import { Link } from "react-router-dom";
import { IMG } from "../data/constants.js";

const FOUR_UNITS = [
  {
    number: "01",
    name: "Matrix Network",
    desc: "Hệ sinh thái dịch vụ toàn diện",
    cta: "Xem giải pháp",
    link: "/ecosystem/network",
    image: "photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    number: "02",
    name: "Matrix Connect",
    desc: "Hệ sinh thái kết nối kinh doanh",
    cta: "Kết nối doanh nghiệp",
    link: "/ecosystem/connect",
    image: "photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85"
  },
  {
    number: "03",
    name: "Matrix Ventures",
    desc: "Hệ sinh thái kết nối đầu tư",
    cta: "Tìm cơ hội đầu tư",
    link: "/ecosystem/ventures",
    image: "photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    number: "04",
    name: "Matrix Academy",
    desc: "Hệ sinh thái đào tạo tinh hoa",
    cta: "Đăng ký khóa học",
    link: "/ecosystem/academy",
    image: "photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85"
  }
];

export default function FourEcosystems() {
  return (
    <section className="section four-ecosystems-section" style={{ padding: "90px 0" }}>
      <div className="container">
        {/* Header row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 48,
          gap: 30,
          flexWrap: "wrap"
        }}>
          <div style={{ maxWidth: 620 }}>
            <h2 style={{
              color: "#ffffff",
              fontSize: "clamp(32px, 4.2vw, 50px)",
              fontWeight: 800,
              lineHeight: 1.12,
              margin: 0,
              letterSpacing: "-0.03em"
            }}>
              Bốn hệ sinh thái.<br />
              Một nền tảng phát triển.
            </h2>
          </div>

          <div style={{
            maxWidth: 420,
            borderLeft: "3px solid #2997ff",
            paddingLeft: 20,
            color: "rgba(255,255,255,0.72)",
            fontSize: "14px",
            lineHeight: 1.6
          }}>
            Kết nối dịch vụ, cộng đồng, đầu tư và đào tạo trong một hệ sinh thái.
          </div>
        </div>

        {/* 2x2 Grid Container with Center Matrix Logo Badge */}
        <div style={{ position: "relative" }}>
          {/* Center Logo Circle Badge */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "#ffffff",
            boxShadow: "0 0 30px rgba(0,0,0,0.6), 0 0 0 8px rgba(10,15,25,0.8)",
            display: "grid",
            placeItems: "center",
            zIndex: 10,
            pointerEvents: "none"
          }}>
            <img
              src="/assets/matrix-holding-logo.png"
              alt="Matrix Holding"
              style={{ height: 28, width: "auto" }}
            />
          </div>

          {/* 2x2 Cards Grid */}
          <div className="four-ecosystems-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24
          }}>
            {FOUR_UNITS.map((unit) => (
              <Link
                key={unit.number}
                to={unit.link}
                className="four-ecosystem-card"
                style={{
                  position: "relative",
                  height: 330,
                  borderRadius: 16,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 28,
                  textDecoration: "none",
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(5,8,20,0.88) 100%), url(${IMG}/${unit.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.35s ease"
                }}
              >
                {/* Top Number Badge */}
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <span style={{
                    background: "rgba(10,15,25,0.65)",
                    backdropFilter: "blur(8px)",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: 700,
                    padding: "5px 14px",
                    borderRadius: "50px",
                    border: "1px solid rgba(255,255,255,0.15)"
                  }}>
                    {unit.number}
                  </span>
                </div>

                {/* Bottom Content */}
                <div>
                  <h3 style={{
                    color: "#ffffff",
                    fontSize: "26px",
                    fontWeight: 800,
                    margin: "0 0 6px",
                    letterSpacing: "-0.02em"
                  }}>
                    {unit.name}
                  </h3>
                  <p style={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "13px",
                    margin: "0 0 16px"
                  }}>
                    {unit.desc}
                  </p>
                  <div style={{
                    color: "#38bdf8",
                    fontSize: "13px",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6
                  }}>
                    <span>{unit.cta}</span>
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: 11, transition: "transform 0.2s" }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
