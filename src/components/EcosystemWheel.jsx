import { useState } from "react";
import { Link } from "react-router-dom";

const outerCompanies = [
  ["Bất động sản & Hạ tầng", "property"],
  ["Công nghệ & Đổi mới", "technology"],
  ["Năng lượng & Bền vững", "energy"],
  ["Logistics & Chuỗi cung ứng", "logistics"],
  ["Du lịch & Dịch vụ", "leisure"],
];

const coreBusinesses = [
  ["Network", "/ecosystem/network", "fa-circle-nodes"],
  ["Connect", "/ecosystem/connect", "fa-link"],
  ["Ventures", "/ecosystem/ventures", "fa-arrow-trend-up"],
];

export default function EcosystemWheel() {
  const [manualPaused, setManualPaused] = useState(false);
  const paused = manualPaused;
  return <section className="ecosystem-section" aria-labelledby="ecosystem-title">
    <div className="container ecosystem-heading">
      <div><p className="eyebrow">HỆ SINH THÁI MATRIX</p><h2 id="ecosystem-title">Năm lĩnh vực đầu tư. <em>Ba năng lực kết nối.</em></h2></div>
      <div className="ecosystem-intro"><p>Vòng ngoài thể hiện các lĩnh vực trọng tâm. Network, Connect và Ventures là ba năng lực cốt lõi giúp đưa con người, chuyên môn và dự án đến gần nhau.</p><button type="button" className="ecosystem-toggle" aria-pressed={manualPaused} onClick={() => setManualPaused(value => !value)}><i className={`fa-solid ${manualPaused ? "fa-play" : "fa-pause"}`} /> {manualPaused ? "Tiếp tục xoay" : "Tạm dừng"}</button></div>
    </div>
    <div className={`ecosystem-stage${paused ? " is-paused" : ""}`}>
      <div className="ecosystem-glow" aria-hidden="true" />
      <div className="ecosystem-wheel ecosystem-wheel--outer">
        {outerCompanies.map(([name, slug], index) => <Link className="ecosystem-node ecosystem-node--outer" to={`/ecosystem/${slug}`} key={name} style={{"--angle":`${index * (360 / outerCompanies.length)}deg`,"--negative-angle":`${index * (-360 / outerCompanies.length)}deg`}}><span>{name}</span></Link>)}
      </div>
      <div className="ecosystem-wheel ecosystem-wheel--inner">
        {coreBusinesses.map(([name, path, icon], index) => <Link className="ecosystem-node ecosystem-node--inner" to={path} key={name} style={{"--angle":`${index * (360 / coreBusinesses.length)}deg`,"--negative-angle":`${index * (-360 / coreBusinesses.length)}deg`}}><span><i className={`fa-solid ${icon}`} aria-hidden="true" />{name}</span></Link>)}
      </div>
      <Link className="ecosystem-core" to="/about" aria-label="Giới thiệu Matrix Holding"><img src="/assets/matrix-holding-logo.png?v=matrix" alt="Matrix Holding" /><strong>MATRIX</strong><span>HOLDING</span></Link>
    </div>
    <p className="ecosystem-hint"><i className="fa-solid fa-rotate" /> Chọn một lĩnh vực ở vòng ngoài hoặc một năng lực ở vòng trong để khám phá</p>
  </section>;
}
