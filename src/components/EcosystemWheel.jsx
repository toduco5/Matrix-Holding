import { useState } from "react";
import { Link } from "react-router-dom";
import { SECTORS } from "../data/constants.js";

const coreBusinesses = [
  { id: "network", name: "Network", path: "/ecosystem/network", icon: "fa-circle-nodes", description: "Mạng lưới hợp tác và mở rộng thị trường toàn cầu" },
  { id: "connect", name: "Connect", path: "/ecosystem/connect", icon: "fa-link", description: "Kết nối năng lực chuyên môn & tài chính chiến lược" },
  { id: "ventures", name: "Ventures", path: "/ecosystem/ventures", icon: "fa-arrow-trend-up", description: "Ươm tạo & Phát triển danh mục đầu tư tăng trưởng" },
  { id: "academy", name: "Academy", path: "/ecosystem/academy", icon: "fa-graduation-cap", description: "Đào tạo năng lực quản trị & lãnh đạo tương lai" },
];

export default function EcosystemWheel() {
  const [manualPaused, setManualPaused] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const paused = manualPaused;

  return (
    <section className="ecosystem-section" aria-labelledby="ecosystem-title">
      <div className="container ecosystem-heading-container">
        <div className="ecosystem-heading-left">
          <span className="ecosystem-eyebrow-badge">
            <span className="dot" /> HỆ SINH THÁI MATRIX
          </span>
          <h2 id="ecosystem-title" className="ecosystem-main-title">
            Năm lĩnh vực đầu tư.{" "}
            <span className="gold-cyan-gradient-text">Bốn năng lực cộng hưởng.</span>
          </h2>
        </div>

        <div className="ecosystem-heading-right">
          <p className="ecosystem-description">
            Vòng ngoài đại diện cho 5 lĩnh vực đầu tư trọng điểm. Vòng trong 
            tập hợp 4 năng lực cốt lõi đưa con người, chuyên môn và dự án đến thành công.
          </p>
          <div className="ecosystem-controls-row">
            <button 
              type="button" 
              className={`ecosystem-toggle-btn ${manualPaused ? "is-paused" : ""}`} 
              aria-pressed={manualPaused} 
              onClick={() => setManualPaused(value => !value)}
            >
              <i className={`fa-solid ${manualPaused ? "fa-play" : "fa-pause"}`} />
              <span>{manualPaused ? "Tiếp tục xoay" : "Tạm dừng xoay"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Radar Stage */}
      <div className="ecosystem-stage-wrapper">
        <div className={`ecosystem-stage ${paused ? "is-paused" : ""}`}>
          <div className="ecosystem-glow" aria-hidden="true" />
          
          {/* Outer Ring: 5 Sectors */}
          <div className="ecosystem-wheel ecosystem-wheel--outer">
            {SECTORS.map((sector, index) => (
              <Link 
                className="ecosystem-node ecosystem-node--outer" 
                to={`/ecosystem/${sector.slug}`} 
                key={sector.id}
                onMouseEnter={() => setActiveItem({ title: sector.name, desc: sector.desc || "Lĩnh vực đầu tư trọng điểm của Matrix Holding", link: `/ecosystem/${sector.slug}`, type: "Lĩnh vực đầu tư" })}
                onMouseLeave={() => setActiveItem(null)}
                aria-label={`Xem trang ${sector.name}`} 
                style={{
                  "--angle": `${index * (360 / SECTORS.length)}deg`,
                  "--negative-angle": `${index * (-360 / SECTORS.length)}deg`
                }}
              >
                <span>{sector.name}</span>
              </Link>
            ))}
          </div>

          {/* Inner Ring: 4 Capabilities */}
          <div className="ecosystem-wheel ecosystem-wheel--inner">
            {coreBusinesses.map((item, index) => (
              <Link 
                className="ecosystem-node ecosystem-node--inner" 
                to={item.path} 
                key={item.name}
                onMouseEnter={() => setActiveItem({ title: item.name, desc: item.description, link: item.path, type: "Năng lực cốt lõi" })}
                onMouseLeave={() => setActiveItem(null)}
                aria-label={`${item.name}: ${item.description}`} 
                style={{
                  "--angle": `${index * (360 / coreBusinesses.length)}deg`,
                  "--negative-angle": `${index * (-360 / coreBusinesses.length)}deg`
                }}
              >
                <span>
                  <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Center Logo Core */}
          <Link className="ecosystem-core" to="/about" aria-label="Giới thiệu Matrix Holding">
            <img src="/assets/matrix-holding-logo.png?v=matrix" alt="Matrix Holding" />
            <strong>MATRIX</strong>
            <span>HOLDING</span>
          </Link>
        </div>
      </div>

      {/* Interactive Hover Card / Instruction */}
      <div className="container ecosystem-info-footer">
        {activeItem ? (
          <div className="ecosystem-active-card fade-in">
            <span className="active-type-badge">{activeItem.type}</span>
            <strong className="active-title">{activeItem.title}</strong>
            <span className="active-desc">— {activeItem.desc}</span>
            <Link to={activeItem.link} className="active-link">
              Khám phá <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        ) : (
          <p className="ecosystem-hint">
            <i className="fa-solid fa-rotate" /> Di chuột vào một lĩnh vực (vòng ngoài) hoặc năng lực (vòng trong) để xem chi tiết
          </p>
        )}
      </div>
    </section>
  );
}
