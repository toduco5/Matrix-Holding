import { useEffect, useState } from "react";
import { TESTIMONIALS } from "../data/constants.js";

const principles = [
  { value: "Minh bạch", label: "Thông tin trao đổi" },
  { value: "Theo nhu cầu", label: "Kết nối ban đầu" },
  { value: "Đa ngành", label: "Phạm vi hợp tác" },
  { value: "Tự thẩm định", label: "Nguyên tắc làm việc" }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const testimonial = TESTIMONIALS[index];
  useEffect(() => { if (paused) return undefined; const timer = window.setInterval(() => setIndex(value => (value + 1) % TESTIMONIALS.length), 5000); return () => window.clearInterval(timer); }, [paused]);
  return <section className="leadership" aria-label="Nguyên tắc vận hành hệ sinh thái" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}><div className="container leadership-grid"><div><p className="eyebrow">GÓC NHÌN VẬN HÀNH</p><blockquote key={index}>“{testimonial.quote}”</blockquote><p className="quote-author">{testimonial.author}<span>{testimonial.role}</span></p><div className="quote-controls"><button onClick={() => setIndex((index + TESTIMONIALS.length - 1) % TESTIMONIALS.length)} aria-label="Nội dung trước"><i className="fa-solid fa-arrow-left" /></button><button onClick={() => setIndex((index + 1) % TESTIMONIALS.length)} aria-label="Nội dung tiếp theo"><i className="fa-solid fa-arrow-right" /></button></div></div><div className="stats-grid">{principles.map(item => <div className="stat" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></div></section>;
}
