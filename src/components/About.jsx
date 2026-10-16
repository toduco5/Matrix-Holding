import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about-overview" className="section about-introduction" aria-labelledby="introduction-title">
      <svg className="introduction-curves" viewBox="0 0 1600 420" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="intro-gold-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#eac38b" />
            <stop offset=".25" stopColor="#775535" stopOpacity=".5" />
            <stop offset=".5" stopColor="#775535" stopOpacity=".05" />
            <stop offset=".75" stopColor="#775535" stopOpacity=".5" />
            <stop offset="1" stopColor="#eac38b" />
          </linearGradient>
          <linearGradient id="intro-gold-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#a57d50" stopOpacity=".22" />
            <stop offset="1" stopColor="#a57d50" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 24 C280 306 500 420 800 420 C1100 420 1320 306 1600 24 L1600 160 C1300 345 1100 420 800 420 C500 420 300 345 0 160Z" fill="url(#intro-gold-fill)" />
        <path d="M0 24 C280 306 500 420 800 420 C1100 420 1320 306 1600 24" fill="none" stroke="url(#intro-gold-line)" strokeWidth="1.5" />
        <path d="M0 160 C300 345 500 420 800 420 C1100 420 1300 345 1600 160" fill="none" stroke="url(#intro-gold-line)" strokeWidth=".7" opacity=".55" />
      </svg>
      <div className="introduction-copy">
        <p className="introduction-label">GIỚI THIỆU</p>
        <h2 id="introduction-title">MATRIX <span>HOLDING</span></h2>
        <p className="introduction-description">
          <span className="introduction-sentence">Matrix Holding là doanh nghiệp tư vấn, đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam.</span>{" "}
          <span className="introduction-sentence">Thông qua kết nối nguồn lực, chúng tôi cùng doanh nghiệp và đối tác</span>{" "}
          <span className="introduction-sentence">mở rộng cơ hội hợp tác, phát triển năng lực và kiến tạo giá trị bền vững.</span>
        </p>
        <Link className="introduction-link" to="/gioi-thieu">TÌM HIỂU THÊM <i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
