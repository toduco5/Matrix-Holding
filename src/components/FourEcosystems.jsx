import { Link } from "react-router-dom";

const units = [
  { slug: "network", name: "NETWORK", description: "Kết nối cộng đồng doanh nghiệp và nguồn lực phát triển." },
  { slug: "connect", name: "CONNECT", description: "Mở rộng quan hệ, thúc đẩy giao thương và hợp tác." },
  { slug: "business", name: "BUSINESS", description: "Xây dựng và phát triển các mô hình kinh doanh đa ngành." },
  { slug: "capital", name: "CAPITAL", description: "Kết nối đầu tư, quản lý và phát triển nguồn vốn." },
];

export default function FourEcosystems() {
  return (
    <section className="section matrix-ecosystem" aria-labelledby="ecosys-heading">
      <div className="matrix-ecosystem-stage">
        <header className="matrix-ecosystem-heading">
          <p className="home-section-label">KẾT NỐI • HỢP TÁC • PHÁT TRIỂN</p>
          <h2 id="ecosys-heading">HỆ SINH THÁI</h2>
          <span className="matrix-ecosystem-heading-rule" aria-hidden="true" />
          <p>Bốn hệ sinh thái, cùng kiến tạo giá trị bền vững.</p>
        </header>
        <div className="matrix-ecosystem-scroll">
          <div className="matrix-ecosystem-panels">
            {units.map((unit, index) => (
              <Link className="matrix-ecosystem-panel" to={`/ecosystem/${unit.slug}`} key={unit.slug} aria-label={`Khám phá Matrix ${unit.name}`}>
                <div className="matrix-ecosystem-copy">
                  <span className="matrix-ecosystem-number">0{index + 1}<span aria-hidden="true">—</span></span>
                  <h3>MATRIX<br />{unit.name}</h3>
                  <p>{unit.description}</p>
                  <span className="matrix-ecosystem-arrow" aria-hidden="true"><i className="fa-solid fa-arrow-right" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
