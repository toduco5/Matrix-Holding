import { Link } from "react-router-dom";
import { QUICK_LINKS, SECTORS, TOPBAR_INFO } from "../data/constants.js";

export default function Footer() {
  const mapAddress = "107 P. Ngụy Như Kon Tum, Nhân Chính, Thanh Xuân, Hà Nội";
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapAddress)}`;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="logo logo-footer" to="/" aria-label="Trang chủ Matrix Holding">
            <img src="/assets/matrix-holding-logo.png" alt="Matrix Holding Logo" />
            <span>MATRIX<span className="logo-light">HOLDING</span></span>
          </Link>
          <p>
            Matrix Holding kết nối vốn, dự án và năng lực triển khai 
            trong một hệ sinh thái đa ngành minh bạch và bền vững.
          </p>
        </div>

        <div>
          <h3>Khám phá</h3>
          {QUICK_LINKS.map(([label, path]) => (
            <Link className="footer-link" key={path} to={path}>{label}</Link>
          ))}
        </div>

        <div>
          <h3>Lĩnh vực hoạt động</h3>
          {SECTORS.map(sector => (
            <Link className="footer-link" key={sector.id} to={`/ecosystem/${sector.slug}`}>{sector.name}</Link>
          ))}
        </div>

        <div>
          <h3>Liên hệ</h3>
          {TOPBAR_INFO.slice(0, 3).map(item => (
            <p className="footer-contact" key={item.text}>
              {item.href ? <a href={item.href}>{item.text}</a> : item.text}
            </p>
          ))}
        </div>
      </div>

      {/* Embedded Google Map Section */}
      <div className="footer-map-section">
        <div className="container">
          <div className="footer-map-card">
            <div className="footer-map-info">
              <div className="map-info-badge">
                <i className="fa-solid fa-location-dot" /> Trụ sở chính Matrix Holding
              </div>
              <p className="map-address-text">
                <strong>107 Ngụy Như Kon Tum</strong>, Phường Nhân Chính, Q. Thanh Xuân, Hà Nội, Việt Nam
              </p>
              <div className="map-actions">
                <a 
                  href={directionsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-map-btn"
                >
                  <i className="fa-solid fa-diamond-turn-right" />
                  <span>Chỉ đường Google Maps</span>
                </a>
                <a href="tel:+84332318460" className="footer-map-btn-secondary">
                  <i className="fa-solid fa-phone" />
                  <span>(+84) 332 318 460</span>
                </a>
              </div>
            </div>

            <div className="footer-map-wrapper">
              <iframe
                title="Bản đồ vị trí Matrix Holding"
                src={mapEmbedUrl}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="footer-map-iframe"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} Matrix Holding. Bảo lưu mọi quyền.
        </div>
      </div>
    </footer>
  );
}
