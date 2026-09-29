import { Link } from "react-router-dom";

export default function About() {
  return <section className="section about-preview"><div className="container about-grid">
    <div className="about-photo"><img src="/assets/matrix-community-team.jpg" alt="Đội ngũ Matrix Holding" loading="lazy" /><span>Đa ngành vững vàng<br />Giá trị dài hạn</span></div>
    <div className="about-copy"><p className="eyebrow">VỀ MATRIX HOLDING</p><h2>Xây dựng năng lực. <em>Phát triển giá trị đa ngành.</em></h2><p>Matrix Holding phát triển các lĩnh vực kinh doanh trọng tâm thông qua đầu tư có chọn lọc, vận hành hiệu quả và hợp tác với những đối tác có năng lực.</p><p>Chúng tôi hướng tới các mô hình tạo giá trị thực cho khách hàng, nhân sự, đối tác và cộng đồng trong dài hạn.</p><Link className="text-link" to="/about">Khám phá câu chuyện Matrix Holding <i className="fa-solid fa-arrow-right" /></Link></div>
  </div></section>;
}
