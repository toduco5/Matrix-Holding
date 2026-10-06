import { Link } from "react-router-dom";
import { BANNER_SLIDES, IMG } from "../data/constants.js";
import ParticleBackground from "./ParticleBackground.jsx";

const TICKER_ITEMS = [
  { label: "MATRIX FUND 1 IRR", value: "42.8%", cls: "up" },
  { label: "LATEST DEAL", value: "FINNEXUS OVERSUBSCRIBED 150%", cls: "blue" },
  { label: "LPS ONLINE", value: "2,401", cls: "up" },
  { label: "BIO-SYNC VALUATION", value: "$150M", cls: "up" },
  { label: "HỆ SINH THÁI THÀNH VIÊN", value: "04 ĐƠN VỊ", cls: "blue" },
  { label: "VAI TRÒ KẾT NỐI", value: "03 NHÓM", cls: "up" },
  { label: "TIẾP NHẬN NHU CẦU", value: "ĐANG MỞ", cls: "up" },
  { label: "KẾT NỐI MINH BẠCH", value: "MATRIX HOLDING", cls: "blue" },
];

function LiveTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="live-ticker" role="marquee" aria-label="Thông tin hệ sinh thái">
      <div className="live-ticker__badge">
        <span className="live-ticker__dot" />
        <span>LIVE TICKER</span>
      </div>
      <div className="live-ticker__track">
        <div className="live-ticker__inner">
          {doubled.map((item, i) => (
            <span key={i} className="live-ticker__item">
              ▲ {item.label}:&nbsp;<strong className={item.cls}>{item.value}</strong>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Banner() {
  // Use skyscraper photo from property slide (photo-1486406146926-c627a92ad1ab) exactly like user screenshot
  const heroImg = BANNER_SLIDES[1]?.image || "photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=88";

  return (
    <>
      <section
        className="hero hero-centered"
        aria-labelledby="home-hero-title"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(5,7,15,0.65) 45%, rgba(0,0,0,0.95) 100%), url(${IMG}/${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
          padding: "100px 20px 80px",
        }}
      >
        {/* Particle Network Animation */}
        <ParticleBackground />

        {/* Subtle grid pattern overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        <div className="hero-centered-content" style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto" }}>
          {/* Eyebrow badge with decorative lines */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            marginBottom: 20
          }}>
            <span style={{ height: 1, width: 40, background: "rgba(255,255,255,0.3)" }} />
            <span style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase"
            }}>
              MATRIX HOLDING • VIETNAM
            </span>
            <span style={{ height: 1, width: 40, background: "rgba(255,255,255,0.3)" }} />
          </div>

          <h1 id="home-hero-title" style={{
            color: "#ffffff",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "clamp(28px, 4.2vw, 56px)",
            fontWeight: 800,
            lineHeight: 1.24,
            letterSpacing: "-0.02em",
            margin: "0 0 20px",
            textShadow: "0 10px 35px rgba(0,0,0,0.7)"
          }}>
            <span style={{ display: "block" }}>Kiến Tạo Hệ Sinh Thái</span>
            <span className="text-gradient" style={{ display: "block" }}>Kinh Doanh Đa Ngành</span>
          </h1>

          <p className="hero-copy-centered" style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "clamp(14px, 1.5vw, 17px)",
            lineHeight: 1.65,
            maxWidth: 760,
            margin: "0 auto 36px",
            fontWeight: 400
          }}>
            Chúng tôi tập trung xây dựng một môi trường kinh doanh hiệu quả, nơi các doanh nghiệp có thể tiếp cận với nhiều nguồn lực và mở ra cơ hội tiếp cận thị trường bền vững.
          </p>

          <div className="hero-actions-centered" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 22,
            flexWrap: "wrap"
          }}>
            <Link
              to="/sectors"
              className="hero-btn-primary"
              style={{
                background: "#ffffff",
                color: "#000000",
                borderRadius: "50px",
                fontWeight: 800,
                fontSize: "13px",
                padding: "16px 36px",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 0 35px rgba(255,255,255,0.25)",
                transition: "all 0.25s ease",
                textDecoration: "none"
              }}
            >
              Xem Thương Vụ <i className="fa-solid fa-chevron-right" style={{ fontSize: 11 }} />
            </Link>

            <Link
              to="/contact"
              className="hero-btn-secondary"
              style={{
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "13px",
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none"
              }}
            >
              <div style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
                display: "grid",
                placeItems: "center",
                color: "#ffffff"
              }}>
                <i className="fa-solid fa-play" style={{ fontSize: 11, marginLeft: 2 }} />
              </div>
              Xem Tuyên Ngôn (60s)
            </Link>
          </div>
        </div>
      </section>

      <LiveTicker />
    </>
  );
}
