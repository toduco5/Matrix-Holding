import fs from 'node:fs';
const target = await fetch('http://127.0.0.1:9223/json/new?about:blank', { method: 'PUT' }).then(r => r.json());
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise(resolve => socket.addEventListener('open', resolve, { once: true }));
let sequence = 0;
const pending = new Map();
socket.addEventListener('message', event => {
  const data = JSON.parse(event.data);
  if (data.id) {
    const handler = pending.get(data.id);
    pending.delete(data.id);
    if (data.error) handler.reject(new Error(JSON.stringify(data.error)));
    else handler.resolve(data.result);
  }
});
function call(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++sequence;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const result = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
  return result.result.value;
}
await call('Page.enable');
fs.mkdirSync('output/layout-audit', { recursive: true });
for (const width of [1440, 768, 390]) {
  await call('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: width < 500 });
  for (const route of ['/', '/gioi-thieu', '/news']) {
    await call('Page.navigate', { url: 'http://127.0.0.1:5173' + route });
    await new Promise(r => setTimeout(r, 1700));
    await evaluate(`document.querySelectorAll('.reveal-item').forEach(e => e.classList.add('is-visible'));`);
    const result = await evaluate(`(() => {
      const box = e => { const r=e.getBoundingClientRect(); return {width:Math.round(r.width),height:Math.round(r.height),left:Math.round(r.left),right:Math.round(r.right)}; };
      const buttons=[...document.querySelectorAll('.partner-audience-button')].map(box);
      return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,faq:document.querySelectorAll('.home-faq-section').length,buttons,cta:document.querySelector('.partner-cta-panel')?box(document.querySelector('.partner-cta-panel')):null,dividers:[...document.querySelectorAll('.section-divider')].map(e=>({background:getComputedStyle(e).backgroundColor,zIndex:getComputedStyle(e).zIndex})),overflow:[...document.querySelectorAll('main > section,.footer,.partner-cta-panel')].filter(e=>e.getBoundingClientRect().right>innerWidth+1).map(e=>e.className)};
    })()`);
    console.log(JSON.stringify({ route, ...result }));
    if (route === '/') {
      await evaluate(`document.querySelector('.home-news-section').scrollIntoView({block:'start'});`);
      await new Promise(r => setTimeout(r, 400));
      const newsImage = await call('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('output/layout-audit/news-' + width + '.png', Buffer.from(newsImage.data, 'base64'));
      await evaluate(`document.querySelector('.partner-cta-section').scrollIntoView({block:'start'});`);
      await new Promise(r => setTimeout(r, 400));
      const image = await call('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('output/layout-audit/cta-' + width + '.png', Buffer.from(image.data, 'base64'));
      await evaluate(`document.querySelectorAll('.partner-audience-button')[2].click()`);
      console.log(JSON.stringify({ width, selectedEmployee: await evaluate(`document.querySelector('.partner-audience-details h3').textContent`) }));
    }
  }
}
await fetch('http://127.0.0.1:9223/json/close/' + target.id);
socket.close();
