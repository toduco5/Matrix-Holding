import { useState } from "react";
import { Link } from "react-router-dom";

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
  return (
    <>
      <section className="hero hero-architecture" aria-labelledby="home-hero-title">
        <div className="hero-architecture-background" aria-hidden="true" />
        <div className="hero-architecture-shade" aria-hidden="true" />
        <div className="hero-architecture-container">
          <div className="hero-architecture-copy">
            <p className="hero-architecture-label home-section-label">MATRIX HOLDING</p>
            <h1 id="home-hero-title"><span className="hero-title-line">HỆ SINH THÁI</span><span className="hero-title-line">KINH DOANH</span><span className="hero-title-line">ĐA NGÀNH</span></h1>
            <p className="hero-architecture-description">Chúng tôi kiến tạo môi trường kinh doanh minh bạch và hiệu quả, nơi các doanh nghiệp có thể tiếp cận nhiều nguồn lực đa dạng và mở ra cơ hội phát triển bền vững.</p>
            <Link to="/sectors" className="hero-architecture-button">Khám phá Matrix Holding <i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <LiveTicker />
    </>
  );
}
