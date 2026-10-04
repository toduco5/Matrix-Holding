import { Link } from "react-router-dom";
import { ECOSYSTEM_UNITS } from "../data/ecosystem-units.js";

export default function EcosystemShowcase({ compact = false }) {
  return <section className={`ecosystem-showcase section${compact ? " ecosystem-showcase--compact" : ""}`}>
    <div className="container">
      <div className="section-heading"><p className="eyebrow">HỆ SINH THÁI MATRIX HOLDING</p><h2>Một nền tảng chung, <em>bốn năng lực cộng hưởng.</em></h2><p>Mỗi đơn vị đảm nhiệm một vai trò riêng, cùng tạo nên hành trình trọn vẹn từ phát triển năng lực đến hợp tác và đầu tư.</p></div>
      <div className="ecosystem-map">
        <div className="ecosystem-map__core"><span>MATRIX</span><strong>HOLDING</strong><small>Nền tảng kết nối</small></div>
        <div className="ecosystem-unit-grid">{ECOSYSTEM_UNITS.map(unit => <article className="ecosystem-unit" key={unit.id}>
          <div><span>{unit.number}</span><i className={`fa-solid ${unit.icon}`} /></div><p>{unit.label}</p><h3>{unit.name}</h3><p className="ecosystem-unit__summary">{unit.summary}</p>
          <Link to={`/ecosystem/${unit.id}`} className="text-link">Khám phá ngay <i className="fa-solid fa-arrow-right" /></Link>
        </article>)}</div>
      </div>
    </div>
  </section>;
}
