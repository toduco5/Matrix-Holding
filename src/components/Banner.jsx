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
  const heroSlide = BANNER_SLIDES.find((slide) => slide.key === "business-performance") || BANNER_SLIDES[0];

  return (
    <>
      <section
        className="hero hero-centered"
        aria-labelledby="home-hero-title"
        style={{
          height: "calc(100vh - 28px)",
          minHeight: "620px",
          width: "calc(100% - 32px)",
          margin: "14px auto",
          borderRadius: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
          padding: "100px 24px 50px",
          boxSizing: "border-box",
          overflow: "hidden",
          backgroundColor: "var(--site-bg, #05070f)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 18px 54px rgba(4, 14, 28, 0.22)"
        }}
      >
        {/* Crossfade through the configured corporate hero images. */}
        {heroSlide && (
          <div
            key={heroSlide.key}
            className="hero-background-image"
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${heroSlide.image.startsWith("http") ? heroSlide.image : `${IMG}/${heroSlide.image}`})`,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              filter: "saturate(0.82) sepia(0.08) contrast(1.08) brightness(0.58)",
              opacity: 1,
              transition: "none",
              zIndex: 0
            }}
          />
        )}

        {/* Navy overlay keeps hero text readable while letting the architecture show */}
        <div
          className="hero-background-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 50% 46%, rgba(5,7,15,0.34) 0%, rgba(5,7,15,0.62) 68%, rgba(5,7,15,0.78) 100%)",
            zIndex: 1
          }}
        />
        {/* Particle Network Animation (Full Viewport Height) */}
        <ParticleBackground />

        {/* Subtle matrix grid pattern overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 1
        }} />

        <div className="hero-centered-content" style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}>
          {/* Eyebrow badge with gold border & decorative lines */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            marginBottom: 20
          }}>
            <span style={{ height: 1, width: 44, background: "rgba(56, 189, 248, 0.6)" }} />
            <span style={{
              color: "var(--hero-accent, #38bdf8)",
              background: "var(--hero-badge-bg, rgba(56, 189, 248, 0.12))",
              border: "1px solid var(--hero-badge-border, rgba(56, 189, 248, 0.35))",
              padding: "5px 18px",
              borderRadius: "50px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              boxShadow: "var(--hero-badge-shadow, 0 0 15px rgba(56, 189, 248, 0.2))"
            }}>
              - MATRIX HOLDING -
            </span>
            <span style={{ height: 1, width: 44, background: "rgba(56, 189, 248, 0.6)" }} />
          </div>

          <h1 id="home-hero-title" style={{
            color: "var(--hero-title-color, #ffffff)",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "clamp(34px, 4.6vw, 56px)",
            fontWeight: 900,
            lineHeight: 1.3,
            letterSpacing: "-0.025em",
            margin: "0 0 20px",
            textShadow: "var(--hero-title-shadow, 0 10px 40px rgba(0,0,0,0.95), 0 0 30px rgba(56, 189, 248, 0.2))",
            textAlign: "center",
            width: "100%"
          }}>
            <div>HỆ SINH THÁI</div>
            {/* <div style={{
              background: "linear-gradient(135deg, #ffffff 30%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "nowrap"
            }}> */}
              KINH DOANH ĐA NGÀNH
            {/* </div> */}
          </h1>

          <p className="hero-copy-centered" style={{
            color: "var(--hero-copy-color, #f1f5f9)",
            fontSize: "clamp(15px, 1.7vw, 18px)",
            lineHeight: 1.9,
            maxWidth: 920,
            width: "100%",
            margin: "0 auto 32px",
            fontWeight: 600,
            textAlign: "center",
            textShadow: "var(--hero-copy-shadow, 0 4px 16px rgba(0,0,0,0.9))"
          }}>
            Chúng tôi tập trung xây dựng một môi trường kinh doanh hiệu quả. <br />
            Các doanh nghiệp có thể tiếp cận nhiều nguồn lực, mở rộng cơ hội và phát triển bền vững.
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
                color: "#0f172a",
                borderRadius: "50px",
                fontWeight: 900,
                fontSize: "14px",
                padding: "18px 42px",
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                boxShadow: "0 0 40px rgba(255,255,255,0.4), 0 10px 30px rgba(0,0,0,0.6)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                textDecoration: "none"
              }}
            >
              <span>Khám phá Matrix Holding</span>
              <i className="fa-solid fa-chevron-right" style={{ fontSize: 12 }} />
            </Link>
          </div>

          <button
            type="button"
            className="hero-scroll-down"
            aria-label="Cuộn xuống phần giới thiệu"
            onClick={() => document.getElementById("about-overview")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            <span>CUỘN XUỐNG</span>
            <i className="fa-solid fa-chevron-down" aria-hidden="true" />
          </button>
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
