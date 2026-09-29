import { PILLARS } from "../data/constants.js";

const icons = ["fa-compass-drafting", "fa-gears", "fa-leaf"];

export default function Features() {
  return <section className="section pillars"><div className="container">
    <div className="section-heading"><p className="eyebrow">NĂNG LỰC CỐT LÕI</p><h2>Ba năng lực. <em>Một định hướng tăng trưởng.</em></h2><p>Matrix Holding kết hợp năng lực phát triển danh mục, vận hành và đổi mới để xây dựng giá trị trong các ngành trọng tâm.</p></div>
    <div className="pillar-grid">{PILLARS.map((pillar, index) => <article className="pillar-card" key={pillar.number}><span className="pillar-icon"><i className={`fa-solid ${icons[index]}`} /></span><span className="eyebrow">{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.desc}</p></article>)}</div>
  </div></section>;
}
