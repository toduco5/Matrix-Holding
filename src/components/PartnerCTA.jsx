import { Link } from "react-router-dom";

export default function PartnerCTA() {
  return (
    <section className="section partner-cta-section" aria-labelledby="partner-cta-title">
      <div className="container">
        <div className="partner-cta-panel">
          <div className="partner-cta-copy">
            <h2 id="partner-cta-title">SẴN SÀNG ĐỒNG HÀNH<br />CÙNG <span>MATRIX HOLDING?</span></h2>
            <p>Kết nối cơ hội, phát triển năng lực kinh doanh và kiến tạo tăng trưởng bền vững<br className="partner-cta-desktop-break" /> cùng hệ sinh thái MATRIX HOLDING.</p>
          </div>
          <div className="partner-cta-actions">
            <Link to="/sectors" className="partner-cta-button partner-cta-button--primary">
              Khám phá hệ sinh thái <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
            <Link to="/contact?interest=opportunity" className="partner-cta-button partner-cta-button--secondary">
              Liên hệ hợp tác <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
