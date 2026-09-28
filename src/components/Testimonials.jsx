import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS, STATS } from "../data/constants.js";
import AnimatedNumber from "./AnimatedNumber.jsx";
export default function Testimonials(){
  const [i,setI]=useState(0), [paused,setPaused]=useState(false), [visible,setVisible]=useState(false);
  const sectionRef=useRef(null), t=TESTIMONIALS[i];
  useEffect(()=>{if(paused)return undefined;const timer=window.setInterval(()=>setI(value=>(value+1)%TESTIMONIALS.length),5000);return()=>window.clearInterval(timer)},[paused]);
  useEffect(()=>{const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);observer.disconnect()}},{threshold:.25});if(sectionRef.current)observer.observe(sectionRef.current);return()=>observer.disconnect()},[]);
  const statValue=value=>/^\d+$/.test(value)?<AnimatedNumber value={Number(value)} pad={value.length}/>:value;
  return <section ref={sectionRef} className="leadership" aria-label="Nguyên tắc vận hành và thông tin hệ sinh thái" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={()=>setPaused(false)}><div className="container leadership-grid"><div><p className="eyebrow">GÓC NHÌN VẬN HÀNH</p><blockquote key={i}>“{t.quote}”</blockquote><p className="quote-author">{t.author}<span>{t.role}</span></p><div className="quote-controls"><button onClick={()=>setI((i+TESTIMONIALS.length-1)%TESTIMONIALS.length)} aria-label="Nội dung trước"><i className="fa-solid fa-arrow-left"/></button><button onClick={()=>setI((i+1)%TESTIMONIALS.length)} aria-label="Nội dung tiếp theo"><i className="fa-solid fa-arrow-right"/></button></div></div><div className="stats-grid">{STATS.map(s=><div className="stat" key={s.label}><strong>{visible?statValue(s.value):"0"}</strong><span>{s.label}</span></div>)}</div></div></section>
}
