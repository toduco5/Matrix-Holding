import { Link } from "react-router-dom";

const audiences = [
  { icon: "fa-chart-line", eyebrow: "DÀNH CHO NHÀ ĐẦU TƯ", title: "Tiếp cận cơ hội có cấu trúc", text: "Xem xét cơ hội theo lĩnh vực, nhu cầu nguồn lực và giai đoạn phát triển để bắt đầu một cuộc trao đổi phù hợp.", steps: ["Chia sẻ tiêu chí quan tâm", "Nhận thông tin ban đầu", "Tự thẩm định và trao đổi"], to: "/contact?type=investor", cta: "Kết nối với Matrix Holding" },
  { icon: "fa-building-circle-check", eyebrow: "DÀNH CHO CHỦ DỰ ÁN", title: "Đưa dự án đến đúng nguồn lực", text: "Trình bày mục tiêu, giai đoạn và nhu cầu triển khai để tìm kiếm các kết nối vốn, vận hành hoặc chuyên môn.", steps: ["Gửi thông tin dự án", "Làm rõ nhu cầu", "Kết nối các bên phù hợp"], to: "/contact?type=project", cta: "Gửi dự án" },
  { icon: "fa-handshake", eyebrow: "DÀNH CHO ĐỐI TÁC", title: "Kết hợp năng lực triển khai", text: "Chia sẻ chuyên môn, năng lực vận hành và lĩnh vực hoạt động để cùng mở ra những khả năng hợp tác dài hạn.", steps: ["Giới thiệu năng lực", "Xác định điểm giao", "Phát triển phương án hợp tác"], to: "/contact?type=partner", cta: "Kết nối hợp tác" }
];

export default function AudiencePaths() {
  return <section className="section audience-paths" aria-labelledby="audience-title"><div className="container">
    <div className="section-heading audience-heading"><p className="eyebrow">KẾT NỐI THEO NHU CẦU</p><h2 id="audience-title">Mỗi điểm khởi đầu, <em>một lộ trình rõ ràng.</em></h2><p>Matrix Holding kết nối vốn, dự án và năng lực triển khai trong một hệ sinh thái đa ngành minh bạch.</p></div>
    <div className="audience-grid">{audiences.map((audience, index) => <article className="audience-card" key={audience.eyebrow}><div className="audience-card__top"><span className="audience-index">0{index + 1}</span><i className={`fa-solid ${audience.icon}`} aria-hidden="true" /></div><p className="eyebrow">{audience.eyebrow}</p><h3>{audience.title}</h3><p>{audience.text}</p><ol>{audience.steps.map(step => <li key={step}>{step}</li>)}</ol><Link to={audience.to} className="audience-link">{audience.cta} <i className="fa-solid fa-arrow-right" /></Link></article>)}</div>
  </div></section>;
}
