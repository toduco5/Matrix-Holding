import { Link } from "react-router-dom";
import { SECTORS, IMG } from "../data/constants.js";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function Sectors() {
  return <>
    <PageMeta title="Lĩnh vực kinh doanh | Matrix Holding" description="Khám phá các lĩnh vực kinh doanh đa ngành của Matrix Holding: bất động sản, công nghệ, năng lượng, logistics, du lịch và dịch vụ." />
    <TopBar /><Header />
    <main>
      <div className="title-band" style={{backgroundImage:"linear-gradient(90deg,#06152ee8,#0f27658c),url(https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1800&q=86)"}}><h1>Các lĩnh vực kinh doanh trọng tâm</h1></div>
      <section className="section services-section"><div className="container">
        <div className="section-heading"><p className="eyebrow">NĂM LĨNH VỰC TRỌNG TÂM</p><h2>Danh mục đa ngành, <em>giá trị dài hạn.</em></h2><p>Mỗi lĩnh vực được phát triển trên nền tảng năng lực vận hành, nhu cầu thị trường và định hướng tăng trưởng bền vững của Matrix Holding.</p></div>
        <div className="sector-grid">{SECTORS.map((sector,i)=><Link className="sector-card" to={`/ecosystem/${sector.slug}`} key={sector.id}><div className="sector-image"><img src={`${IMG}/${sector.img}`} alt={sector.name}/><span>0{i+1}</span></div><div className="sector-info"><h3>{sector.name}</h3><p>{sector.desc}</p><span className="text-link">Tìm hiểu chi tiết <i className="fa-solid fa-arrow-right"/></span></div></Link>)}</div>
      </div></section>
    </main><Footer />
  </>;
}

