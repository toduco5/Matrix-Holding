import { Link } from "react-router-dom";

const FOUR_UNITS = [
  {
    number: "01",
    name: "Matrix Network",
    tagline: "Hệ sinh thái dịch vụ toàn diện",
    desc: "Mô hình dịch vụ khép kín, nơi các doanh nghiệp chia sẻ nguồn lực, khai thác thế mạnh và cùng phát triển.",
    link: "/ecosystem/network",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    number: "02",
    name: "Matrix Connect",
    tagline: "Hệ sinh thái kết nối kinh doanh",
    desc: "Cộng đồng kết nối kinh doanh, tạo cơ hội hợp tác và thúc đẩy doanh thu phát triển bền vững.",
    link: "/ecosystem/connect",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85"
  },
  {
    number: "03",
    name: "Matrix Ventures",
    tagline: "Hệ sinh thái kết nối đầu tư",
    desc: "Mô hình kết nối đầu tư, tiếp cận các nguồn vốn chiến lược và nâng cao định giá doanh nghiệp.",
    link: "/ecosystem/ventures",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    number: "04",
    name: "Matrix Academy",
    tagline: "Hệ sinh thái đào tạo tinh hoa",
    desc: "Nền tảng đào tạo nhân sự chất lượng cao, chia sẻ tri thức quản trị và ươm mầm tài năng trẻ.",
    link: "/ecosystem/academy",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85"
  }
];

export default function FourEcosystems() {
  return (
    <section className="section four-ecosystems-section" style={{ padding: "85px 0", background: "#05070f", position: "relative", overflow: "hidden" }}>
      {/* Background SVG connecting wave lines (Image 1 Style) */}
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: "220px",
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.35,
          transform: "translateY(-50%)"
        }}
        viewBox="0 0 1440 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-100,110 C200,30 400,190 720,110 C1040,30 1240,190 1540,110" stroke="url(#wave-grad-1)" strokeWidth="2.5" />
        <path d="M-100,130 C220,50 420,170 720,130 C1020,90 1220,170 1540,130" stroke="url(#wave-grad-2)" strokeWidth="1.5" strokeDasharray="6 6" />
        <defs>
          <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2997ff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2997ff" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Header section with Title & "Xem tổng quan" CTA button */}
        <div style={{
          textAlign: "center",
          maxWidth: 780,
          margin: "0 auto 44px"
        }}>
          <span style={{
            color: "#38bdf8",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: 8
          }}>
            04 HỆ SINH THÁI THÀNH VIÊN
          </span>
          <h2 style={{
            color: "#ffffff",
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontWeight: 800,
            margin: "0 0 12px",
            letterSpacing: "-0.02em"
          }}>
            Hệ sinh thái, mạng lưới nguồn lực.
          </h2>
          <p style={{
            color: "rgba(255, 255, 255, 0.72)",
            fontSize: "14px",
            margin: "0 auto 20px",
            maxWidth: 640,
            lineHeight: 1.6
          }}>
            Mỗi hệ sinh thái đảm nhận một vai trò chuyên biệt, nhưng cùng chung mục tiêu tạo ra giá trị lâu dài cho doanh nghiệp.
          </p>

          <Link
            to="/sectors"
            style={{
              background: "rgba(56, 189, 248, 0.12)",
              border: "1px solid rgba(56, 189, 248, 0.35)",
              color: "#38bdf8",
              padding: "10px 24px",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.25s ease",
              boxShadow: "0 4px 16px rgba(56, 189, 248, 0.15)",
              whiteSpace: "nowrap"
            }}
            className="overview-pill-link"
          >
            <span>Xem tổng quan</span>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: 11 }} />
          </Link>
        </div>

        {/* 4 Vertical Banner Image Cards Grid (Image 1 Style) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20
        }} className="four-ecosystem-cards-grid">
          {FOUR_UNITS.map((unit) => (
            <Link
              key={unit.number}
              to={unit.link}
              className="vertical-image-card"
              style={{
                position: "relative",
                height: 400,
                borderRadius: 22,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "24px 22px",
                textDecoration: "none",
                border: "1px solid rgba(255, 255, 255, 0.14)",
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

              {/* Dark Gradient Overlay for text contrast (like Image 1) */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(5,7,15,0.15) 0%, rgba(5,7,15,0.65) 45%, rgba(5,7,15,0.96) 100%)"
              }} />

              {/* Top Badge: Number Pill */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <span style={{
                  background: "rgba(5, 7, 15, 0.75)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  color: "#38bdf8",
                  fontSize: "12px",
                  fontWeight: 800,
                  padding: "5px 14px",
                  borderRadius: 30,
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  display: "inline-block"
                }}>
                  {unit.number}
                </span>
              </div>

              {/* Bottom Content Overlay (matching Image 1 typography & placement) */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <span style={{
                  color: "#38bdf8",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 6
                }}>
                  {unit.tagline}
                </span>

                <h3 style={{
                  color: "#ffffff",
                  fontSize: "22px",
                  fontWeight: 900,
                  margin: "0 0 8px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  textShadow: "0 2px 8px rgba(0,0,0,0.8)"
                }}>
                  {unit.name}
                </h3>

                <p style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "12.5px",
                  lineHeight: 1.5,
                  margin: "0 0 14px"
                }}>
                  {unit.desc}
                </p>

                <div style={{
                  color: "#38bdf8",
                  fontSize: "12.5px",
                  fontWeight: 800,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6
                }}>
                  <span>Khám phá ngay</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: 11, transition: "transform 0.25s ease" }} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
