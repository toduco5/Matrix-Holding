import { Link } from "react-router-dom";
import { QUICK_LINKS, SECTORS, TOPBAR_INFO } from "../data/constants.js";

export default function Footer() {
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

      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} Matrix Holding. Bảo lưu mọi quyền.
        </div>
      </div>
    </footer>
  );
}
