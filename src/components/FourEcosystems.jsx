import { Link } from "react-router-dom";

const units = [
  { slug: "network", name: "NETWORK", description: "" },
  { slug: "connect", name: "CONNECT", description: "" },
  { slug: "business", name: "BUSINESS", description: "" },
  { slug: "capital", name: "CAPITAL", description: "" },
];

export default function FourEcosystems() {
  return (
    <section className="section matrix-ecosystem" aria-labelledby="ecosys-heading">
      <div className="matrix-ecosystem-stage">
        <header className="matrix-ecosystem-heading">
          <p className="home-section-label">HỆ SINH THÁI</p>
          <h2 id="ecosys-heading">KHÁM PHÁ HỆ SINH THÁI MATRIX HOLDING</h2>
          <span className="matrix-ecosystem-heading-rule" aria-hidden="true" />
          <p>Mỗi đơn vị đảm nhiệm một vai trò riêng, cùng nhau hướng đến mục tiêu tạo ra cơ hội và giá trị cho cộng đồng.</p>
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
