import { Link } from "react-router-dom";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { TEAM_MEMBERS } from "../data/team.js";

const principles = [
  { number: "01", title: "Minh bạch thông tin", desc: "Mỗi nhu cầu kết nối được trình bày với mục tiêu, giai đoạn, nguồn lực cần thiết và đầu mối trao đổi rõ ràng." },
  { number: "02", title: "Kết nối có chọn lọc", desc: "Các bên gặp nhau dựa trên lĩnh vực quan tâm, năng lực bổ trợ và định hướng hợp tác phù hợp." },
  { number: "03", title: "Quyết định độc lập", desc: "Nhà đầu tư và đối tác tự thẩm định pháp lý, tài chính, vận hành trước khi đưa ra quyết định." },
];

export default function About() {
  return <>
    <PageMeta title="Giới thiệu | Matrix Holding" description="Matrix Holding xây dựng hệ sinh thái cộng đồng kết nối nhà đầu tư, chủ dự án và đối tác chuyên môn." />
    <TopBar /><Header />
    <main>
      <div className="title-band" style={{backgroundImage:"linear-gradient(90deg,#00081de8,#0f2765a8),url(/assets/matrix-community-team.jpg)"}}><h1>Về Matrix Holding</h1></div>
      <section className="section about-preview"><div className="container about-grid about-story">
        <figure className="about-photo about-team-photo"><img src="/assets/matrix-community-team.jpg" alt="Hình ảnh đại diện đội ngũ kết nối cộng đồng Matrix Holding"/><span>Con người kết nối<br/>Giá trị lan tỏa</span><figcaption>Hình ảnh đại diện cho đội ngũ kết nối Matrix Holding</figcaption></figure>
        <div className="about-copy"><p className="eyebrow">NƠI VỐN, DỰ ÁN VÀ CHUYÊN MÔN GẶP NHAU</p><h2>Biến một cuộc gặp đúng người thành <em>khởi đầu có giá trị.</em></h2><p>Trong đầu tư, cơ hội tốt thường không thiếu. Điều khó hơn là tìm được người phù hợp, hiểu đúng nhu cầu và có đủ thông tin để bắt đầu một cuộc trao đổi nghiêm túc.</p><p>Matrix Holding xây dựng một cộng đồng nơi nhà đầu tư tìm thấy dự án đáng quan tâm, chủ dự án tiếp cận nguồn lực phù hợp, còn chuyên gia đưa năng lực của mình vào những bài toán thực tế.</p><div className="about-points"><span><i className="fa-solid fa-circle-check"/> Nhu cầu được trình bày rõ</span><span><i className="fa-solid fa-circle-check"/> Kết nối theo mức độ phù hợp</span><span><i className="fa-solid fa-circle-check"/> Thẩm định trước quyết định</span></div><p className="detail-note"><i className="fa-solid fa-shield-halved"/> Matrix Holding hỗ trợ kết nối ban đầu, không cam kết lợi nhuận và không thay thế tư vấn pháp lý hoặc tài chính độc lập.</p><Link className="btn" to="/contact">Bắt đầu một kết nối <i className="fa-solid fa-arrow-right"/></Link></div>
      </div></section>
      <section className="section team-section"><div className="container"><div className="section-heading"><p className="eyebrow">ĐỘI NGŨ KẾT NỐI</p><h2>Ba đầu mối đồng hành cùng <em>cộng đồng.</em></h2><p>Các hồ sơ dưới đây đang dùng nội dung mẫu. Hãy thay bằng tên, ảnh và kinh nghiệm thật của nhân sự trước khi công bố website.</p></div><div className="team-grid">{TEAM_MEMBERS.map(member=><article className="team-card" key={member.name}><img src={member.image} style={{objectPosition:member.imagePosition}} alt={`Hình ảnh đại diện ${member.role}`}/><div><span>NỘI DUNG MẪU</span><h3>{member.name}</h3><strong>{member.role}</strong><p>{member.bio}</p></div></article>)}</div></div></section>
      <section className="section services-section"><div className="container"><div className="section-heading"><p className="eyebrow">CÁCH CHÚNG TÔI VẬN HÀNH</p><h2>Ba nguyên tắc cho một cộng đồng <em>đáng tin cậy.</em></h2></div><div className="sector-grid">{principles.map(item=><article className="sector-info" key={item.number}><span className="eyebrow">NGUYÊN TẮC {item.number}</span><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></div></section>
      <section className="section"><div className="container section-heading section-heading-row"><div><p className="eyebrow">VAI TRÒ TRONG HỆ SINH THÁI</p><h2>Nhà đầu tư · Chủ dự án · Đối tác chuyên môn</h2><p>Mỗi vai trò mang một nguồn lực khác nhau. Giá trị hình thành khi nhu cầu, năng lực và trách nhiệm được trao đổi thẳng thắn.</p></div><Link className="btn" to="/careers">Tham gia cộng đồng</Link></div></section>
    </main><Footer />
  </>;
}
