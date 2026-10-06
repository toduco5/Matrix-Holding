import { Link } from "react-router-dom";
import { SECTORS, IMG } from "../data/constants.js";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";
import EcosystemShowcase from "../components/EcosystemShowcase.jsx";

export default function Sectors() {
  return <>
    <PageMeta title="Hệ sinh thái | Matrix Holding" description="Khám phá hệ sinh thái Matrix Holding gồm Network, Connect, Ventures và Academy." />
    <Header />
    <main>
      <div className="title-band" style={{backgroundImage:"linear-gradient(90deg,#1f0d26ee,#592b50b8),url(https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1800&q=86)"}}><h1>Hệ sinh thái Matrix Holding</h1></div>
      <EcosystemShowcase />
      <section className="section services-section"><div className="container">
        <div className="section-heading"><p className="eyebrow">LĨNH VỰC ƯU TIÊN</p><h2>Danh mục đa ngành, <em>giá trị dài hạn.</em></h2><p>Các lĩnh vực được phát triển trên nền tảng năng lực vận hành, nhu cầu thị trường và định hướng tăng trưởng bền vững của Matrix Holding.</p></div>
        <div className="sector-grid">{SECTORS.map((sector,i)=><Link className="sector-card" to={`/ecosystem/${sector.slug}`} key={sector.id}><div className="sector-image"><img src={`${IMG}/${sector.img}`} alt={sector.name}/><span>0{i+1}</span></div><div className="sector-info"><h3>{sector.name}</h3><p>{sector.desc}</p><span className="text-link">Tìm hiểu chi tiết <i className="fa-solid fa-arrow-right"/></span></div></Link>)}</div>
      </div></section>
    </main><Footer />
  </>;
}

