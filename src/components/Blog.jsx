import { Link } from "react-router-dom";
import { IMG } from "../data/constants.js";

const MATRIX_HOLDING_SERVICES = [
  {
    id: "investment-matching",
    num: "01",
    title: "Kết nối Đầu tư & Nguồn vốn",
    desc: "Thẩm định dự án, cấu trúc vốn chiến lược & kết nối nhà đầu tư uy tín",
    link: "/ecosystem/property",
    image: "photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: "asset-development",
    num: "02",
    title: "Phát triển Tài sản & Dự án",
    desc: "Quy hoạch, phát triển hạ tầng & tối ưu hóa giá trị tài sản bất động sản",
    link: "/ecosystem/technology",
    image: "photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: "digital-transformation",
    num: "03",
    title: "Chuyển đổi Số & Công nghệ",
    desc: "Tự động hóa quy trình, tích hợp dữ liệu & ứng dụng giải pháp DeepTech",
    link: "/ecosystem/energy",
    image: "photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: "operations-management",
    num: "04",
    title: "Vận hành & Quản trị Thương hiệu",
    desc: "Quản trị chuỗi cung ứng thông minh & vận hành dịch vụ chuẩn quốc tế",
    link: "/ecosystem/logistics",
    image: "photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: "sustainable-energy",
    num: "05",
    title: "Năng lượng & Bền vững",
    desc: "Giải pháp năng lượng sạch, tối ưu tài nguyên & tăng trưởng xanh dài hạn",
    link: "/ecosystem/leisure",
    image: "photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=85"
  }
];

export default function Blog() {
  return (
    <section className="section tinasoft-services-section" style={{ padding: "90px 0", background: "#05070f" }}>
      <div className="container">
        {/* Centered Title Section */}
        <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 52px" }}>
          <span style={{
            display: "inline-block",
            color: "#38bdf8",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "12px"
          }}>
            NĂNG LỰC TOÀN DIỆN
          </span>
          <h2 style={{
            color: "#ffffff",
            fontSize: "clamp(30px, 4vw, 42px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: "0 0 14px",
            fontFamily: "'Be Vietnam Pro', sans-serif"
          }}>
            Giải Pháp & Dịch Vụ <span className="text-gradient">Hệ Sinh Thái</span>
          </h2>
          <p style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "clamp(15px, 1.8vw, 17px)",
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.6
          }}>
            Đồng hành cùng đối tác và nhà đầu tư qua 5 giải pháp năng lượng, công nghệ và quản trị cốt lõi
          </p>
        </div>

        {/* 5 Vertical Tall Cards Layout */}
        <div className="tinasoft-tall-cards-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 16
        }}>
          {MATRIX_HOLDING_SERVICES.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="tinasoft-tall-card"
              style={{
                position: "relative",
                height: 440,
                borderRadius: 16,
                overflow: "hidden",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "24px 20px",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.4s ease"
              }}
            >
              {/* Full height background image */}
              <img
                src={`${IMG}/${item.image}`}
                alt={item.title}
                loading="lazy"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                  zIndex: 0
                }}
              />

              {/* Dark Gradient Overlay (Transparent top -> Dark solid bottom) */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.96) 100%)",
                zIndex: 1
              }} />

              {/* Top Tag Number */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <span style={{
                  background: "rgba(0,0,0,0.65)",
                  backdropFilter: "blur(6px)",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.15)"
                }}>
                  {item.num}
                </span>
              </div>

              {/* Bottom Title & Short Description */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <h3 style={{
                  color: "#ffffff",
                  fontSize: "19px",
                  fontWeight: 800,
                  lineHeight: 1.3,
                  margin: "0 0 8px",
                  letterSpacing: "-0.01em",
                  textShadow: "0 2px 10px rgba(0,0,0,0.8)"
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: "rgba(255, 255, 255, 0.75)",
                  fontSize: "12px",
                  lineHeight: 1.45,
                  margin: 0,
                  fontWeight: 400
                }}>
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

