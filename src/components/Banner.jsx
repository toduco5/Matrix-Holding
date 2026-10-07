import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(() => {
    return localStorage.getItem("matrix-ticker-open") === "true";
  });

  const toggleTicker = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    localStorage.setItem("matrix-ticker-open", nextState ? "true" : "false");
  };

  const tickerData = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <>
      {/* Floating Pill Button to reveal Live Ticker when hidden */}
      {!isOpen && (
        <button 
          type="button" 
          className="live-ticker-toggle-btn"
          onClick={toggleTicker}
          aria-label="Mở Live Ticker"
          title="Mở Live Ticker thông tin thị trường & hệ sinh thái"
        >
          <span className="live-ticker__dot" style={{ width: 6, height: 6 }} />
          <span>LIVE TICKER</span>
          <i className="fa-solid fa-chevron-up" style={{ fontSize: 9, marginLeft: 2 }} />
        </button>
      )}

      {/* Main Live Ticker Bar */}
      <div 
        className={`live-ticker ${isOpen ? "is-open" : "is-hidden"}`} 
        role="marquee" 
        aria-label="Thông tin thị trường & hệ sinh thái"
      >
        <div className="live-ticker__badge">
          <span className="live-ticker__dot" />
          <span>LIVE TICKER</span>
        </div>
        <div className="live-ticker__track">
          <div className="live-ticker__inner">
            {tickerData.map((item, i) => (
              <span key={i} className="live-ticker__item">
                <span className="arrow">▲</span>
                <span className="ticker-label">{item.label}:</span>
                &nbsp;
                <strong className={item.cls}>{item.value}</strong>
              </span>
            ))}
          </div>
        </div>
        <button 
          type="button" 
          className="live-ticker__close-btn"
          onClick={toggleTicker}
          aria-label="Ẩn Live Ticker"
          title="Ẩn Live Ticker"
        >
          <i className="fa-solid fa-xmark" style={{ fontSize: 13 }} />
        </button>
      </div>
    </>
  );
}

export default function Banner() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const heroImg = BANNER_SLIDES[1]?.image || "photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=88";

  return (
    <>
      <section
        className="hero hero-centered"
        aria-labelledby="home-hero-title"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
          padding: "130px 20px 100px",
          overflow: "hidden",
          backgroundColor: "#05070f"
        }}
      >
        {/* 100% Monochrome Grayscale Architecture Background Layer */}
        <div 
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${IMG}/${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            filter: "grayscale(100%) contrast(1.2) brightness(0.55)",
            zIndex: 0
          }}
        />

        {/* Neutral Deep Obsidian Dark Overlay */}
        <div 
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(5,7,15,0.78) 0%, rgba(5,7,15,0.88) 50%, rgba(5,7,15,0.98) 100%)",
            zIndex: 1
          }}
        />
        {/* Particle Network Animation */}
        <ParticleBackground />

        {/* Subtle grid pattern overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        <div className="hero-centered-content" style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 980,
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}>
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
            fontSize: "clamp(32px, 4.8vw, 60px)",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            margin: "0 0 20px",
            textShadow: "0 10px 35px rgba(0,0,0,0.7)",
            textAlign: "center",
            width: "100%"
          }}>
            Kinh Doanh Đa Ngành
          </h1>

          <p className="hero-copy-centered" style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "clamp(14px, 1.5vw, 17px)",
            lineHeight: 1.75,
            maxWidth: 960,
            width: "100%",
            margin: "0 auto 36px",
            fontWeight: 400,
            textAlign: "center"
          }}>
            Chúng tôi tập trung xây dựng một môi trường kinh doanh hiệu quả,<br className="hero-desktop-br" />
            nơi các doanh nghiệp có thể tiếp cận với nhiều nguồn lực và mở ra cơ hội tiếp cận thị trường bền vững.
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
              className="hero-btn-primary glowing-pill-btn"
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
                boxShadow: "0 0 35px rgba(255,255,255,0.35)",
                transition: "all 0.25s ease",
                textDecoration: "none"
              }}
            >
              Xem Thương Vụ <i className="fa-solid fa-chevron-right" style={{ fontSize: 11 }} />
            </Link>

            <button
              type="button"
              onClick={() => setShowVideoModal(true)}
              className="hero-btn-secondary video-pill-btn"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "13px",
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                cursor: "pointer",
                padding: "14px 28px",
                borderRadius: "50px",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
                transition: "all 0.25s ease"
              }}
            >
              <div style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.4)",
                display: "grid",
                placeItems: "center",
                color: "#ffffff",
                flexShrink: 0
              }}>
                <i className="fa-solid fa-play" style={{ fontSize: 11, marginLeft: 2 }} />
              </div>
              <span>Xem Tuyên Ngôn (60s)</span>
            </button>
          </div>
        </div>
      </section>

      <LiveTicker />

      {/* Video Modal Popup */}
      {showVideoModal && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "rgba(5, 7, 15, 0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24
        }} onClick={() => setShowVideoModal(false)}>
          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: 860,
            background: "#0f172a",
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(56, 189, 248, 0.4)",
            boxShadow: "0 25px 70px rgba(0,0,0,0.9), 0 0 40px rgba(41, 151, 255, 0.3)"
          }} onClick={e => e.stopPropagation()}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 24px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(15, 23, 42, 0.9)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <i className="fa-solid fa-circle-play" style={{ color: "#38bdf8", fontSize: 18 }} />
                <strong style={{ color: "#ffffff", fontSize: "15px", fontWeight: 800 }}>
                  Tuyên Ngôn Tập Đoàn Matrix Holding (60s)
                </strong>
              </div>
              <button
                type="button"
                onClick={() => setShowVideoModal(false)}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  color: "#ffffff",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 14
                }}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, background: "#000000" }}>
              <iframe
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Tuyên Ngôn Matrix Holding"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
