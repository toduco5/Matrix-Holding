import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SECTORS, IMG } from "../data/constants.js";

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef(null);
  const total = SECTORS.length;

  const scrollToSlide = (index) => {
    const nextIdx = (index + total) % total;
    setActiveIdx(nextIdx);
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0]?.offsetWidth || 380;
      const gap = 24;
      trackRef.current.scrollTo({
        left: nextIdx * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => scrollToSlide(activeIdx + 1);
  const handlePrev = () => scrollToSlide(activeIdx - 1);

  // Auto slide loop every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % total;
        if (trackRef.current) {
          const cardWidth = trackRef.current.children[0]?.offsetWidth || 380;
          const gap = 24;
          trackRef.current.scrollTo({
            left: next * (cardWidth + gap),
            behavior: "smooth",
          });
        }
        return next;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="section services-section" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="section-heading section-heading-row" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 35 }}>
          <div>
            <p className="eyebrow">LĨNH VỰC ĐẦU TƯ TRỌNG TÂM</p>
            <h2>Nơi nguồn lực gặp <em>cơ hội phù hợp.</em></h2>
            <p>Năm lĩnh vực là nền tảng cho danh mục kinh doanh đa ngành, kết nối năng lực phát triển, vận hành và thị trường.</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link className="text-link" to="/sectors" style={{ marginRight: 12 }}>
              Xem toàn bộ lĩnh vực <i className="fa-solid fa-arrow-right" />
            </Link>

            {/* Carousel Arrow Controls */}
            <div className="slider-nav-arrows" style={{ display: "flex", gap: 8 }}>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Lĩnh vực trước"
                className="slider-arrow-btn"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#ffffff",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <i className="fa-solid fa-arrow-left" style={{ fontSize: 13 }} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Lĩnh vực tiếp theo"
                className="slider-arrow-btn"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#ffffff",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <i className="fa-solid fa-arrow-right" style={{ fontSize: 13 }} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={trackRef}
          className="sector-carousel-track"
          style={{
            display: "flex",
            gap: 24,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            paddingBottom: 20,
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          {SECTORS.map((sector, index) => (
            <Link
              className={`sector-card ${index === activeIdx ? "is-active" : ""}`}
              to={`/ecosystem/${sector.slug}`}
              key={sector.id}
              style={{
                minWidth: "calc(33.333% - 16px)",
                flex: "0 0 calc(33.333% - 16px)",
                scrollSnapAlign: "start",
                borderRadius: 12,
                overflow: "hidden",
                background: "rgba(15,23,42,0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease"
              }}
            >
              <div className="sector-image" style={{ height: 230, position: "relative", overflow: "hidden" }}>
                <img
                  src={`${IMG}/${sector.img}`}
                  alt={`Hình ảnh ${sector.name.toLowerCase()}`}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                />
                <span style={{
                  position: "absolute", top: 16, left: 16,
                  background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)",
                  color: "#ffffff", fontWeight: 800, fontSize: 12, padding: "4px 10px", borderRadius: 6
                }}>
                  0{index + 1}
                </span>
              </div>
              <div className="sector-info" style={{ padding: "24px 24px 28px", position: "relative" }}>
                <h3 style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, margin: "0 28px 10px 0" }}>{sector.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{sector.desc}</p>
                <span className="sector-arrow" style={{
                  position: "absolute", bottom: 28, right: 24,
                  width: 34, height: 34, borderRadius: "50%",
                  background: "rgba(41,151,255,0.12)", color: "#2997ff",
                  display: "grid", placeItems: "center"
                }}>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Carousel Progress Indicator Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 24 }}>
          {SECTORS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToSlide(i)}
              aria-label={`Chuyển đến slide ${i + 1}`}
              style={{
                width: i === activeIdx ? 32 : 10,
                height: 4,
                borderRadius: 4,
                border: "none",
                background: i === activeIdx ? "#2997ff" : "rgba(255,255,255,0.2)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
