import { Link } from "react-router-dom";
import { SECTORS, IMG } from "../data/constants.js";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function Sectors() {
  return <>
    <PageMeta title="Lĩnh vực đầu tư | Matrix Holding" description="Khám phá các lĩnh vực bất động sản, công nghệ, năng lượng, logistics, du lịch và dịch vụ trong hệ sinh thái Matrix Holding." />
    <TopBar /><Header />
    <main>
      <div className="title-band" style={{backgroundImage:"linear-gradient(90deg,#06152ee8,#0f27658c),url(https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1800&q=86)"}}><h1>Các lĩnh vực đầu tư trọng tâm</h1></div>
      <section className="section services-section"><div className="container">
        <div className="section-heading"><p className="eyebrow">NĂM LĨNH VỰC TRỌNG TÂM</p><h2>Từ cơ hội theo ngành đến <em>nguồn lực phù hợp.</em></h2><p>Mỗi lĩnh vực tập hợp nhu cầu dự án, năng lực chuyên môn và đối tác quan tâm. Thông tin trên website là cơ sở tìm hiểu ban đầu; các bên tự thẩm định trước khi hợp tác.</p></div>
        <div className="sector-grid">{SECTORS.map((sector,i)=><Link className="sector-card" to={`/ecosystem/${sector.slug}`} key={sector.id}><div className="sector-image"><img src={`${IMG}/${sector.img}`} alt={sector.name}/><span>0{i+1}</span></div><div className="sector-info"><h3>{sector.name}</h3><p>{sector.desc}</p><span className="text-link">Tìm hiểu chi tiết <i className="fa-solid fa-arrow-right"/></span></div></Link>)}</div>
      </div></section>
    </main><Footer />
  </>;
}

