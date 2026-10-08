import { Link } from "react-router-dom";

const FOUR_UNITS = [
  {
    number: "01",
    name: "MATRIX NETWORK",
    subline: "Hệ sinh thái dịch vụ toàn diện",
    desc: "Xây dựng, quản lý và điều phối các đơn vị dịch vụ chuyên nghiệp cho doanh nghiệp.",
    actionText: "KHÁM PHÁ NGAY",
    link: "/ecosystem/network",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    number: "02",
    name: "MATRIX CONNECT",
    subline: "Hệ sinh thái kết nối kinh doanh",
    desc: "Kết nối giao thương, mở rộng mạng lưới hợp tác và gia tăng cơ hội kinh doanh bền vững.",
    actionText: "KHÁM PHÁ NGAY",
    link: "/ecosystem/connect",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85"
  },
  {
    number: "03",
    name: "MATRIX VENTURES",
    subline: "Hệ sinh thái kết nối đầu tư",
    desc: "Thẩm định dự án, kết nối các nguồn vốn chiến lược và nâng cao định giá doanh nghiệp.",
    actionText: "KHÁM PHÁ NGAY",
    link: "/ecosystem/ventures",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    number: "04",
    name: "MATRIX ACADEMY",
    subline: "Hệ sinh thái đào tạo tinh hoa",
    desc: "Đào tạo nhân lực chất lượng cao, chia sẻ tri thức quản trị và ươm mầm tài năng trẻ.",
    actionText: "KHÁM PHÁ NGAY",
    link: "/ecosystem/academy",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85"
  }
];

export default function FourEcosystems() {
  return (
    <section className="section four-ecosystems-section" style={{ padding: "85px 0", background: "#05070f", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Header Section - Clean & Balanced */}
        <div style={{
          textAlign: "center",
          maxWidth: 780,
          margin: "0 auto 48px"
        }}>
          <span style={{
            display: "inline-block",
            color: "#38bdf8",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 10
          }}>
            ⚡ HỆ SINH THÁI THÀNH VIÊN
          </span>

          <h2 style={{
            color: "#ffffff",
            fontSize: "clamp(26px, 3.2vw, 38px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            margin: "0 0 12px",
            lineHeight: 1.25,
            fontFamily: "'Be Vietnam Pro', sans-serif"
          }}>
            Hệ Sinh Thái & Nền Tảng Phát Triển.
          </h2>

          <p style={{
            color: "rgba(255, 255, 255, 0.72)",
            fontSize: "14.5px",
            margin: "0 auto",
            maxWidth: 580,
            lineHeight: 1.6
          }}>
            Kết nối dịch vụ, cộng đồng, đầu tư & đào tạo
          </p>
        </div>

        {/* 2x2 Grid Layout of 4 Cards (Symmetrical OCD Alignment) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto"
        }} className="ecosystem-2x2-grid">
          {FOUR_UNITS.map((unit) => (
            <Link
              key={unit.number}
              to={unit.link}
              className="vertical-image-card"
              style={{
                position: "relative",
                height: 320,
                borderRadius: 22,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justify: "space-between",
                padding: "28px 28px",
                textAlign: "left",
                textDecoration: "none",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 14px 40px rgba(0, 0, 0, 0.6)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              {/* Card Background Photo */}
              <div
                className="card-bg-img"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${unit.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.5s ease"
                }}
              />

              {/* Dark Gradient Overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(5,7,15,0.2) 0%, rgba(5,7,15,0.7) 45%, rgba(5,7,15,0.96) 100%)"
              }} />

              {/* Top Badge: Number Circle */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <span style={{
                  background: "rgba(255, 255, 255, 0.22)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 800,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.15)"
                }}>
                  {unit.number}
                </span>
              </div>

              {/* Bottom Content Overlay (Symmetrically aligned typography) */}
              <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                {/* Main Title (ALL CAPS) */}
                <h3 style={{
                  color: "#ffffff",
                  fontSize: "25px",
                  fontWeight: 900,
                  margin: "0 0 4px",
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                  textTransform: "uppercase"
                }}>
                  {unit.name}
                </h3>

                {/* Subline in Cyan */}
                <span style={{
                  color: "#38bdf8",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "0.05em",
                  display: "block",
                  marginBottom: 10
                }}>
                  — {unit.subline}
                </span>

                {/* Description - Equalized 2-line height */}
                <p style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  margin: "0 0 16px",
                  maxWidth: "96%",
                  minHeight: 42,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden"
                }}>
                  {unit.desc}
                </p>

                {/* Action Link with underline */}
                <div style={{
                  color: "#ffffff",
                  fontSize: "12.5px",
                  fontWeight: 800,
                  letterSpacing: "0.05em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  borderBottom: "1.5px solid rgba(255, 255, 255, 0.8)",
                  paddingBottom: 3
                }}>
                  <span>{unit.actionText}</span>
                  <span style={{ fontSize: "13px", fontWeight: 900 }}>↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


