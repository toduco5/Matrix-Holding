import React, { useEffect, useRef } from "react";

export default function StrategicPartners() {
  const trackRef = useRef(null);

  const baseBrands = [
    "Forbes",
    "Bloomberg",
    "TechCrunch",
    "WSJ",
    "CNBC",
    "FinancialTimes"
  ];

  // Repeat brands 4 times for seamless infinite looping
  const brands = [...baseBrands, ...baseBrands, ...baseBrands, ...baseBrands];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId;
    let scrollPos = 0;
    let lastTime = performance.now();
    // Tốc độ chạy chậm và êm (28 pixels / giây)
    const SPEED = 28;

    const step = (now) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Di chuyển liên tục, không bao giờ dừng khi di chuột
      if (delta > 0 && delta < 0.2) {
        scrollPos += SPEED * delta;
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0 && scrollPos >= halfWidth) {
          scrollPos -= halfWidth;
        }
        track.style.transform = `translate3d(-${scrollPos}px, 0, 0)`;
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="strategic-partners" style={{ position: "relative", zIndex: 10, width: "100%", background: "#05070f" }}>
      {/* Top Gradient Divider matching Matrix Ventures */}
      <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(41, 151, 255, 0.25), transparent)" }} />

      {/* Main Endorsement Section */}
      <section style={{ padding: "26px 0", background: "transparent", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            gap: 36
          }}
        >
          {/* Label: Bảo chứng bởi (Fixed left badge) */}
          <span
            style={{
              fontSize: "11px",
              color: "#526274",
              textTransform: "uppercase",
              fontWeight: 800,
              letterSpacing: "0.22em",
              flexShrink: 0
            }}
          >
            Bảo chứng bởi
          </span>

          {/* Scrolling Marquee Area with left & right fade masks */}
          <div
            style={{
              flex: 1,
              overflow: "hidden",
              position: "relative",
              maskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)"
            }}
          >
            {/* Infinite Scrolling Track */}
            <div
              ref={trackRef}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "54px",
                width: "max-content",
                willChange: "transform",
                cursor: "default"
              }}
            >
              {brands.map((brand, idx) => (
                <span
                  key={`${brand}-${idx}`}
                  style={{
                    fontSize: "clamp(20px, 2.3vw, 25px)",
                    fontWeight: 800,
                    color: "rgba(71, 85, 105, 0.78)",
                    letterSpacing: "-0.02em",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    transition: "color 0.25s ease, text-shadow 0.25s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#1769aa";
                    e.currentTarget.style.textShadow = "none";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(71, 85, 105, 0.78)";
                    e.currentTarget.style.textShadow = "none";
                  }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Gradient Divider matching Matrix Ventures */}
      <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)" }} />
    </div>
  );
}
