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
              borderRadius: 16,
              padding: "14px 22px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }} className="float-badge-anim">
              

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
              Về Chúng Tôi
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
              Giới Thiệu Doanh Nghiệp
              
            </h2>

            <p style={{
              color: "rgba(255, 255, 255, 0.82)",
              fontSize: "15px",
              lineHeight: 1.8,
              margin: "0 0 16px",
              fontWeight: 400
            }}>
              Matrix Holding là doanh nghiệp hoạt động trong lĩnh vực đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam. Hướng đến mục tiêu đưa các doanh nghiệp tiềm năng trở thành kỳ lân trong lĩnh vực, chúng tôi cam kết sẽ không ngừng nỗ lực, phát huy sự sáng tạo nhằm đưa ra giải pháp phù hợp với nhu cầu của từng doanh nghiệp.
            </p>
            <br />

            

            {/* Checklist items */}
         
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
                GIỚI THIỆU MATRIX HOLDING <i className="fa-solid fa-arrow-right" style={{ fontSize: 12, transition: "transform 0.25s ease" }} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


