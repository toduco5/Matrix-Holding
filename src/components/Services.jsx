import { Link } from "react-router-dom";
import { SECTORS, IMG } from "../data/constants.js";

export default function Services() {
  return <section className="section services-section">
    <div className="container">
      <div className="section-heading section-heading-row">
        <div>
          <p className="eyebrow">LĨNH VỰC ĐẦU TƯ TRỌNG TÂM</p>
          <h2>Nơi nguồn lực gặp <em>cơ hội phù hợp.</em></h2>
          <p>Năm lĩnh vực là nền tảng cho danh mục kinh doanh đa ngành, kết nối năng lực phát triển, vận hành và thị trường.</p>
        </div>
        <Link className="text-link" to="/sectors">Xem toàn bộ lĩnh vực <i className="fa-solid fa-arrow-right" /></Link>
      </div>
      <div className="sector-grid">
        {SECTORS.map((sector, index) => <Link className="sector-card" to={`/ecosystem/${sector.slug}`} key={sector.id}>
          <div className="sector-image">
            <img src={`${IMG}/${sector.img}`} alt={`Hình ảnh đại diện cho ${sector.name.toLowerCase()}`} loading="lazy" />
            <span>0{index + 1}</span>
          </div>
          <div className="sector-info">
            <h3>{sector.name}</h3>
            <p>{sector.desc}</p>
            <span className="sector-arrow" aria-hidden="true"><i className="fa-solid fa-arrow-right" /></span>
          </div>
        </Link>)}
      </div>
    </div>
  </section>;
}
