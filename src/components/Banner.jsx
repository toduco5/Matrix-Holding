import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BANNER_SLIDES, IMG } from "../data/constants.js";

export default function Banner() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [parallax, setParallax] = useState(0);
  const sectionRef = useRef(null);
  useEffect(() => { if (paused) return undefined; const timer = window.setInterval(() => setActive(value => (value + 1) % BANNER_SLIDES.length), 5000); return () => window.clearInterval(timer); }, [paused]);
  useEffect(() => { const handleScroll = () => { if (!sectionRef.current) return; const rect = sectionRef.current.getBoundingClientRect(); setParallax(Math.min(Math.max(0, -rect.top) * .08, 30)); }; window.addEventListener("scroll", handleScroll, { passive: true }); return () => window.removeEventListener("scroll", handleScroll); }, []);
  const slide = BANNER_SLIDES[active];
  const move = direction => setActive(value => (value + direction + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  return <section ref={sectionRef} className="hero hero-parallax" aria-roledescription="carousel" aria-label="Lĩnh vực Matrix Holding" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)} style={{ backgroundImage: `linear-gradient(90deg,rgba(4,17,38,.9),rgba(4,17,38,.58) 55%,rgba(4,17,38,.18)),url(${IMG}/${slide.image})`, backgroundPositionY: `${parallax}px` }}>
    <div className="container hero-content" key={slide.key}><p className="eyebrow">MATRIX HOLDING · HỆ SINH THÁI ĐA NGÀNH</p><h1>{slide.title}</h1><p className="hero-copy">{slide.subtitle}</p><div className="hero-actions"><Link className="btn" to="/sectors">Khám phá lĩnh vực đầu tư <i className="fa-solid fa-arrow-right" /></Link><Link className="text-link" to="/contact?type=project">Gửi dự án / Kết nối hợp tác</Link></div>
      <div className="hero-controls"><button className="hero-arrow" onClick={() => move(-1)} aria-label="Nội dung trước"><i className="fa-solid fa-arrow-left" /></button><div className="hero-dots" aria-label="Chọn nội dung nổi bật">{BANNER_SLIDES.map((item, index) => <button key={item.key} aria-label={`Xem ${item.title}`} aria-current={index === active ? "true" : undefined} className={index === active ? "active" : ""} onClick={() => setActive(index)} />)}</div><button className="hero-arrow" onClick={() => move(1)} aria-label="Nội dung tiếp theo"><i className="fa-solid fa-arrow-right" /></button><span>0{active + 1}<i />0{BANNER_SLIDES.length}</span></div>
    </div><div className="hero-side-label">BUILDING VALUE ACROSS INDUSTRIES</div>
  </section>;
}
