import { useRef } from "react";
import { Link } from "react-router-dom";
import { FEATURED_NEWS, NEWS_ITEMS } from "../data/news.js";

const newsIllustrations = [
  '/assets/news-auditorium-gold.png',
  '/assets/news-headquarters-gold.png',
  '/assets/news-investment-gold.png',
];

export default function HomeNews() {
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const latestStories = [FEATURED_NEWS, ...NEWS_ITEMS];
  const move = direction => {
    const track = trackRef.current;
    const card = track?.querySelector('article');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 24;
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  const startDrag = event => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    dragRef.current = { x: event.clientX, left: event.currentTarget.scrollLeft, moved: false };
  };
  const drag = event => {
    const state = dragRef.current;
    if (!state) return;
    const distance = event.clientX - state.x;
    if (Math.abs(distance) > 6) {
      state.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.classList.add('is-dragging');
      event.currentTarget.scrollLeft = state.left - distance;
    }
  };
  const stopDrag = event => {
    event.currentTarget.classList.remove('is-dragging');
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (dragRef.current) dragRef.current.active = false;
  };
  return (
    <section className="section home-news-section" aria-labelledby="home-news-title">
      <div className="container">
        <div className="home-news-heading">
          <div>
            <p className="eyebrow">NEWS</p>
            <h2 id="home-news-title">TIN TỨC MỚI NHẤT</h2>
            <p className="home-news-intro">Cập nhật những hoạt động, sự kiện và câu chuyện phát triển từ MATRIX HOLDING.</p>
          </div>
          <div className="home-news-controls">
            <button type="button" onClick={() => move(-1)} aria-label="Tin trước"><i className="fa-solid fa-arrow-left" aria-hidden="true" /></button>
            <button type="button" onClick={() => move(1)} aria-label="Tin tiếp theo"><i className="fa-solid fa-arrow-right" aria-hidden="true" /></button>
          </div>
        </div>
        <div className="home-news-track" ref={trackRef} tabIndex={0} role="region" aria-label="Danh sách tin tức, trượt ngang để xem thêm"
          onPointerDown={startDrag} onPointerMove={event => { if (event.buttons === 1) drag(event); }} onPointerUp={stopDrag}
          onPointerCancel={event => { dragRef.current = null; event.currentTarget.classList.remove('is-dragging'); }}
          onDragStart={event => event.preventDefault()}
          onClickCapture={event => { if (dragRef.current?.moved) { event.preventDefault(); event.stopPropagation(); dragRef.current = null; } }}
          onKeyDown={event => { if (event.target === event.currentTarget && ['ArrowLeft', 'ArrowRight'].includes(event.key)) { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); } }}>
          {latestStories.map((item, index) => (
            <article className="home-news-card" key={item.slug}>
              <Link className="home-news-image" to={'/news/' + item.slug} tabIndex={-1} aria-hidden="true" draggable={false}>
                <img src={newsIllustrations[index % newsIllustrations.length]} alt="" loading="lazy" draggable={false} />
              </Link>
              <div className="home-news-copy">
                <div className="home-news-meta"><time>{item.date}{item.time ? ' · ' + item.time : ''}</time></div>
                <h3><Link to={'/news/' + item.slug}>{item.title}</Link></h3>
                <Link className="home-news-read" to={'/news/' + item.slug} aria-label={'Đọc bài viết: ' + item.title}><i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link>
                <span className="home-news-topic">{item.topic || "Tin tức"}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="home-news-bottom">
          <Link className="home-news-view-all" to="/news">Xem tất cả <i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
