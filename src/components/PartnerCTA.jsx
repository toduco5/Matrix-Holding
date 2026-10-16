import { Link } from "react-router-dom";

export default function PartnerCTA() {
  return (
    <section className="section partner-cta-section" aria-labelledby="partner-cta-title">
      <div className="container">
        <div className="partner-cta-panel">
          <br />
          <br />
          <div className="partner-cta-copy">
            <br />
            <p className="home-section-label">ĐỒNG HÀNH CÙNG MATRIX HOLDING</p>
            <h2 id="partner-cta-title">SẴN SÀNG ĐỒNG HÀNH CÙNG <span>MATRIX HOLDING?</span></h2>
          </div>
          <br />
          <div className="partner-cta-actions">
            <Link to="/sectors" className="partner-cta-button partner-cta-button--primary">
             Liên hệ chúng tôi  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
            <Link to="/contact?interest=opportunity" className="partner-cta-button partner-cta-button--secondary">
              Xem cơ hội hợp tác <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
