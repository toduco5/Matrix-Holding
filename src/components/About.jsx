import { Link } from "react-router-dom";
import { IMG } from "../data/constants.js";

export default function About() {
  // High-resolution corporate executive boardroom photo & high-rise architecture photo
  const mainImage = "photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=88";
  const subImage = "photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=88";

  return (
    <section className="section about-preview" style={{ padding: "105px 0 115px", background: "#05070f", position: "relative", overflow: "hidden" }}>
      {/* Background glow circle */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "8%",
        width: 450,
        height: 450,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(41, 151, 255, 0.14) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none"
      }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center"
        }} className="about-intro-grid">
          
          {/* Left Column: Dual Overlapping Photos & Floating Glass Badge */}
          <div className="about-intro-image-wrap" style={{ position: "relative", paddingRight: 28, paddingBottom: 28 }}>
            {/* Main Executive Boardroom Photo */}
            <div style={{
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.75), 0 0 35px rgba(41, 151, 255, 0.2)"
            }}>
              <img
                src={`${IMG}/${mainImage}`}
                alt="Văn phòng điều hành Matrix Holding"
                loading="lazy"
                style={{
                  width: "100%",
                  height: 430,
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>

            {/* Floating Glass Badge (Top Left) */}
            <div style={{
              position: "absolute",
              top: 24,
              left: -16,
              background: "rgba(18, 24, 38, 0.92)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(56, 189, 248, 0.45)",
              borderRadius: 16,
              padding: "14px 22px",
              display: "flex",
              alignItems: "center",
              gap: 14,
              boxShadow: "0 18px 40px rgba(0,0,0,0.7), 0 0 30px rgba(41,151,255,0.3)"
            }} className="float-badge-anim">
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: "rgba(41, 151, 255, 0.22)",
                border: "1px solid rgba(41, 151, 255, 0.5)",
                display: "grid",
                placeItems: "center",
                color: "#38bdf8"
              }}>
                <i className="fa-solid fa-shield-halved" style={{ fontSize: 18 }} />
              </div>
              <div>
                <strong style={{ color: "#ffffff", fontSize: "14px", fontWeight: 800, display: "block", lineHeight: 1.2 }}>
                  Đa ngành vững vàng
                </strong>
                <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 600 }}>
                  Giá trị dài hạn
                </span>
              </div>
            </div>

            {/* Secondary Overlapping Skyscraper Photo (Bottom Right) */}
            <div style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 255,
              height: 170,
              borderRadius: 20,
              overflow: "hidden",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.85), 0 0 35px rgba(41, 151, 255, 0.35)"
            }} className="float-photo-anim">
              <img
                src={`${IMG}/${subImage}`}
                alt="Tòa nhà trụ sở Matrix Holding"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>
          </div>

          {/* Right Column: Copy & Checklist & Glowing Pill Button */}
          <div className="about-intro-copy">
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#38bdf8",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 14
            }}>
              <span style={{ width: 18, height: 2, background: "#38bdf8" }} />
              VỀ MATRIX HOLDING
            </span>

            <h2 style={{
              color: "#ffffff",
              fontSize: "clamp(32px, 3.8vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: "-0.025em",
              margin: "0 0 24px",
              fontFamily: "'Be Vietnam Pro', sans-serif"
            }}>
              Xây dựng năng lực.<br />
              <span className="text-gradient">Phát triển giá trị</span><br />
              <span className="text-gradient">đa ngành.</span>
            </h2>

            <p style={{
              color: "rgba(255, 255, 255, 0.82)",
              fontSize: "15px",
              lineHeight: 1.8,
              margin: "0 0 16px",
              fontWeight: 400
            }}>
              Matrix Holding phát triển các lĩnh vực kinh doanh trọng tâm thông qua đầu tư có chọn lọc, vận hành hiệu quả và hợp tác với những đối tác có năng lực.
            </p>

            <p style={{
              color: "rgba(255, 255, 255, 0.68)",
              fontSize: "14px",
              lineHeight: 1.7,
              margin: "0 0 32px",
              fontWeight: 400
            }}>
              Chúng tôi hướng tới các mô hình tạo giá trị thực cho khách hàng, nhân sự, đối tác và cộng đồng trong dài hạn.
            </p>

            {/* Checklist items */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              marginBottom: 40,
              flexWrap: "wrap"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <i className="fa-solid fa-circle-check" style={{ color: "#38bdf8", fontSize: 16 }} />
                <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 700 }}>
                  Đầu tư chọn lọc & Thẩm định
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <i className="fa-solid fa-circle-check" style={{ color: "#38bdf8", fontSize: 16 }} />
                <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 700 }}>
                  Đồng hành phát triển dài hạn
                </span>
              </div>
            </div>

            {/* Main Pill Button */}
            <div>
              <Link
                to="/gioi-thieu"
                className="glowing-pill-btn"
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "16px 36px",
                  borderRadius: "50px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
                  transition: "all 0.3s ease"
                }}
              >
                KHÁM PHÁ HÀNH TRÌNH MATRIX HOLDING <i className="fa-solid fa-arrow-right" style={{ fontSize: 12, transition: "transform 0.25s ease" }} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


