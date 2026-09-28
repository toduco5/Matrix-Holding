import { useState } from "react";
import { DESIGNS, DESIGN_CATEGORIES } from "../data/designs.js";
import { IMG } from "../data/constants.js";

export default function DesignGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? DESIGNS : DESIGNS.filter(d => d.category === activeCategory);

  return <section className="section design-section">
    <div className="container">
      <div className="section-heading"><p className="eyebrow">THIẾT KẾ CỦA TÔI</p><h2>Sản phẩm <em>thẩm mỹ.</em></h2><p>Tuyển tập các dự án thiết kế gần đây nhất.</p></div>
      <div className="design-filters">{DESIGN_CATEGORIES.map(cat=><button key={cat} className={activeCategory===cat?"active":""} onClick={()=>setActiveCategory(cat)}>{cat}</button>)}</div>
      <div className="design-grid">{filtered.map(design=><article className="design-card" key={design.id}>
        <div className="design-image"><img src={`${IMG}/${design.image}`} alt={design.title} loading="lazy" /><span className="design-year">{design.year}</span></div>
        <div className="design-info"><h3>{design.title}</h3><p>{design.desc}</p><span className="design-category">{design.category}</span></div>
      </article>)}</div>
    </div>
  </section>;
}
