import { Link } from "react-router-dom";
import { TOPBAR_INFO } from "../data/constants.js";

const FOOTER_EXPLORE = ["Giới thiệu", "Hệ sinh thái", "Tin tức", "Liên hệ"];

const FOOTER_FIELDS = [
  { slug: "network", name: "Cộng đồng" },
  { slug: "connect", name: "Kết nối" },
  { slug: "business", name: "Kinh doanh" },
  { slug: "capital", name: "Đầu tư" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="logo logo-footer" to="/" aria-label="Trang chủ Matrix Holding">
            <img src="/assets/matrix-ecosystem-footer-logo-clean.png" alt="Matrix Ecosystem Business" />
          </Link>
          <p>
            Matrix Holding kết nối mọi nguồn lực nhằm kiến tạo một hệ sinh thái có sự liên kết chặt chẽ với nhau, tạo nên một môi trường kinh doanh minh bạch và hiệu quả.
          </p>
        </div>

        <div>
          <h3>Khám phá</h3>
          {FOOTER_EXPLORE.map(label => (
            <span className="footer-link footer-explore-label" key={label}>{label}</span>
          ))}
        </div>

        <div>
          <h3>Lĩnh vực hoạt động</h3>
          {FOOTER_FIELDS.map(field => (
            <Link className="footer-link" key={field.slug} to={`/ecosystem/${field.slug}`}>{field.name}</Link>
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
