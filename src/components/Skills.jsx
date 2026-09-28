import { useState } from "react";
import { SKILLS, SKILL_CATEGORIES } from "../data/skills.js";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? SKILLS : SKILLS.filter(s => s.category === activeCategory);
  const maxLevel = Math.max(...SKILLS.map(s => s.level));

  return <section className="section skills-section">
    <div className="container">
      <div className="section-heading"><p className="eyebrow">KỸ NĂNG CỦA TÔI</p><h2>Công cụ và <em>năng lực.</em></h2><p>Tổng hợp các kỹ năng kỹ thuật và thiết kế mà tôi đang sở hữu.</p></div>
      <div className="skill-filters">{SKILL_CATEGORIES.map(cat=><button key={cat} className={activeCategory===cat?"active":""} onClick={()=>setActiveCategory(cat)}>{cat}</button>)}</div>
      <div className="skill-grid">{filtered.map(skill=><article className="skill-card" key={skill.name}>
        <div className="skill-header"><i className={skill.icon} aria-hidden="true"></i><div><h3>{skill.name}</h3><span>{skill.category}</span></div></div>
        <div className="skill-bar"><div className="skill-bar-fill" style={{width:`${skill.level}%`}}><span>{skill.level}%</span></div></div>
      </article>)}</div>
    </div>
  </section>;
}
