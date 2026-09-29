import { useState } from "react";
import { SKILLS, SKILL_CATEGORIES } from "../data/skills.js";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const visibleItems = activeCategory === "Tất cả" ? SKILLS : SKILLS.filter(item => item.category === activeCategory);

  return <section className="section skills-section business-capabilities"><div className="container">
    <div className="section-heading"><p className="eyebrow">NĂNG LỰC PHÁT TRIỂN ĐA NGÀNH</p><h2>Nền tảng để <em>phát triển bền vững.</em></h2><p>Những năng lực được tổ chức xuyên suốt từ chiến lược, phát triển dự án đến vận hành, công nghệ và quản trị rủi ro.</p></div>
    <div className="skill-filters" aria-label="Lọc năng lực">{SKILL_CATEGORIES.map(category => <button type="button" key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
    <div className="skill-grid">{visibleItems.map(item => <article className="skill-card capability-card" key={item.name}><div className="skill-header"><i className={item.icon} aria-hidden="true" /><div><span>{item.category}</span><h3>{item.name}</h3></div></div><p>{item.description}</p><span className="capability-card__link">Năng lực trọng tâm <i className="fa-solid fa-arrow-up-right-from-square" /></span></article>)}</div>
  </div></section>;
}
