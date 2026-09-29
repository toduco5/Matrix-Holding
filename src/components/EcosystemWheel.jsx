import { useState } from "react";
import { Link } from "react-router-dom";
import { SECTORS } from "../data/constants.js";

const coreBusinesses = [
  { name:"Network", path:"/ecosystem/network", icon:"fa-circle-nodes", description:"Mạng lưới hợp tác và thị trường" },
  { name:"Connect", path:"/ecosystem/connect", icon:"fa-link", description:"Kết nối năng lực chuyên môn" },
  { name:"Ventures", path:"/ecosystem/ventures", icon:"fa-arrow-trend-up", description:"Phát triển danh mục kinh doanh" },
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
        {SECTORS.map((sector, index) => <Link className="ecosystem-node ecosystem-node--outer" to={`/ecosystem/${sector.slug}`} key={sector.id} aria-label={`Xem trang ${sector.name}`} style={{"--angle":`${index * (360 / SECTORS.length)}deg`,"--negative-angle":`${index * (-360 / SECTORS.length)}deg`}}><span>{sector.name}</span></Link>)}
      </div>
      <div className="ecosystem-wheel ecosystem-wheel--inner">
        {coreBusinesses.map((item, index) => <Link className="ecosystem-node ecosystem-node--inner" to={item.path} key={item.name} aria-label={`${item.name}: ${item.description}`} style={{"--angle":`${index * (360 / coreBusinesses.length)}deg`,"--negative-angle":`${index * (-360 / coreBusinesses.length)}deg`}}><span><i className={`fa-solid ${item.icon}`} aria-hidden="true" />{item.name}</span></Link>)}
      </div>
      <Link className="ecosystem-core" to="/about" aria-label="Giới thiệu Matrix Holding"><img src="/assets/matrix-holding-logo.png?v=matrix" alt="Matrix Holding" /><strong>MATRIX</strong><span>HOLDING</span></Link>
    </div>
    <p className="ecosystem-hint"><i className="fa-solid fa-rotate" /> Chọn một lĩnh vực ở vòng ngoài hoặc một năng lực ở vòng trong để khám phá</p>
  </section>;
}
