import { Link } from "react-router-dom";

const FOUR_UNITS = [
  {
    name: "MATRIX NETWORK",
    subline: "Hệ sinh thái cộng đồng",
    actionText: "KHÁM PHÁ NGAY",
    link: "/ecosystem/network",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    name: "MATRIX CONNECT",
    subline: "Hệ sinh thái kết nối",
    actionText: "KHÁM PHÁ NGAY",
    link: "/ecosystem/connect",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "MATRIX BUSINESS",
    subline: "Hệ sinh thái kinh doanh",
    actionText: "KHÁM PHÁ NGAY",
    link: "/ecosystem/ventures",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "MATRIX CAPITAL",
    subline: "Hệ sinh thái đầu tư",
    actionText: "KHÁM PHÁ NGAY",
    link: "/ecosystem/academy",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=85"
  }
];

export default function FourEcosystems() {
  return (
    <section className="section four-ecosystems-section ecosys-section" aria-labelledby="ecosys-heading">
      <div className="container ecosys-container">

        {/* Section Header */}
        <div className="ecosys-intro">
          <span className="ecosystem-gallery-eyebrow">KẾT NỐI • HỢP TÁC • PHÁT TRIỂN</span>
          <h2 id="ecosys-heading" className="ecosys-heading-title">
            HỆ SINH THÁI MATRIX HOLDING
          </h2>
          <p className="ecosys-heading-sub">
             Bốn hệ sinh thái kết nối cộng đồng, xúc tiến thương mại, phát triển kinh doanh và đầu tư.
          </p>
        </div>

        {/* Even 2 x 2 ecosystem card grid */}
        <div className="ecosys-magazine-grid">
          {FOUR_UNITS.map((unit) => (
            <Link
              key={unit.name}
              to={unit.link}
              className="ecosys-card ecosys-card--grid"
              aria-label={`Khám phá ${unit.name}`}
            >
              <div
                className="ecosys-card-bg"
                style={{ backgroundImage: `url(${unit.image})` }}
                aria-hidden="true"
              />
              <div className="ecosys-card-body ecosys-body--grid">
                <h3 className="ecosys-name ecosys-name--grid">{unit.name}</h3>
                <span className="ecosys-sub ecosys-sub--grid">{unit.subline}</span>
                <span className="ecosys-cta-btn ecosys-cta-btn--grid">
                  {unit.actionText} <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
