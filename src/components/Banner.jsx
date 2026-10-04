import { Link } from "react-router-dom";
import { BANNER_SLIDES, IMG } from "../data/constants.js";

export default function Banner() {
  const hero = BANNER_SLIDES[0];
  return <section className="hero hero-parallax" aria-labelledby="home-hero-title" style={{ backgroundImage:`linear-gradient(90deg,rgba(31,13,38,.94),rgba(54,24,53,.72) 58%,rgba(54,24,53,.28)),url(${IMG}/${hero.image})` }}>
    <div className="container hero-content">
      <p className="eyebrow">MATRIX HOLDING · HỆ SINH THÁI ĐA NGÀNH</p>
      <h1 id="home-hero-title">Kết nối nguồn lực.<br/><em>Kiến tạo giá trị bền vững.</em></h1>
      <p className="hero-copy">Bốn hệ sinh thái Network, Connect, Ventures và Academy đồng hành cùng doanh nghiệp trên hành trình phát triển, hợp tác, đầu tư và nâng cao năng lực.</p>
      <div className="hero-actions"><Link className="btn" to="/sectors">Khám phá hệ sinh thái <i className="fa-solid fa-arrow-right"/></Link><Link className="text-link" to="/contact">Trao đổi cơ hội hợp tác</Link></div>
    </div>
    <div className="hero-side-label">BUILDING VALUE ACROSS INDUSTRIES</div>
  </section>;
}
