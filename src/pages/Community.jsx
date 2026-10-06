import { Link } from "react-router-dom";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

const roles=[
  {icon:"fa-chart-line",title:"Nhà đầu tư",text:"Xác định lĩnh vực, giai đoạn dự án và mức độ rủi ro bạn có thể xem xét.",benefit:"Tiếp cận thông tin ban đầu có cấu trúc và đầu mối trao đổi trực tiếp."},
  {icon:"fa-lightbulb",title:"Chủ dự án",text:"Trình bày vấn đề, giải pháp, đội ngũ, tiến độ và nhu cầu nguồn lực bằng dữ liệu có thể kiểm chứng.",benefit:"Gặp nhà đầu tư và chuyên gia phù hợp với giai đoạn phát triển."},
  {icon:"fa-people-group",title:"Đối tác chuyên môn",text:"Cung cấp hồ sơ năng lực và phạm vi chuyên môn về pháp lý, tài chính, công nghệ hoặc vận hành.",benefit:"Tham gia đúng bài toán cần kinh nghiệm và năng lực của bạn."}
];
const steps=[
  ["01","Khai báo nhu cầu","Chọn vai trò, lĩnh vực quan tâm, mục tiêu kết nối và thông tin có thể chia sẻ."],
  ["02","Rà soát ban đầu","Matrix Holding kiểm tra mức độ đầy đủ, tính nhất quán và đầu mối liên hệ của thông tin."],
  ["03","Kết nối phù hợp","Các bên được giới thiệu khi nhu cầu, năng lực và phạm vi trao đổi có điểm tương đồng."],
  ["04","Tự thẩm định","Mỗi bên chủ động kiểm tra pháp lý, tài chính, vận hành và thống nhất điều kiện hợp tác."]
];
const boundaries=[
  ["Matrix Holding thực hiện","Tiếp nhận nhu cầu, chuẩn hóa thông tin giới thiệu, xác định kết nối tiềm năng và tạo điều kiện cho cuộc trao đổi ban đầu."],
  ["Matrix Holding không thực hiện","Không bảo lãnh dự án, không cam kết lợi nhuận, không nhận tiền đầu tư và không thay thế tư vấn pháp lý hoặc tài chính."],
  ["Thành viên chịu trách nhiệm","Cung cấp thông tin trung thực, bảo mật dữ liệu nhận được, tự thẩm định và tự quyết định mọi giao dịch của mình."]
];

export default function Community(){return <>
  <PageMeta title="Tham gia cộng đồng | Matrix Holding" description="Quy trình minh bạch dành cho nhà đầu tư, chủ dự án và đối tác chuyên môn tham gia hệ sinh thái Matrix Holding."/>
  <Header/><main>
    <section className="detail-hero community-hero" style={{backgroundImage:"linear-gradient(90deg,#1f0d26f2 10%,#452044c9 58%,#8e3f6290),url(/assets/matrix-community-team.jpg)"}}><div className="container"><p className="eyebrow">CỘNG ĐỒNG KẾT NỐI ĐẦU TƯ CÓ TRÁCH NHIỆM</p><h1>Đúng người. Đúng nhu cầu. Đủ cơ sở để tìm hiểu.</h1><p>Matrix Holding tạo điểm gặp giữa nhà đầu tư, chủ dự án và chuyên gia thông qua thông tin rõ ràng, quy trình có cấu trúc và quyền quyết định độc lập của mỗi bên.</p><Link className="btn" to="/contact">Đăng ký nhu cầu kết nối <i className="fa-solid fa-arrow-right"/></Link></div></section>
    <section className="section"><div className="container"><div className="section-heading"><p className="eyebrow">BẠN THAM GIA VỚI VAI TRÒ NÀO?</p><h2>Mỗi vai trò mang đến một <em>nguồn lực khác nhau.</em></h2><p>Chọn đúng vai trò giúp cộng đồng hiểu điều bạn đang tìm kiếm và rút ngắn thời gian xác định kết nối phù hợp.</p></div><div className="pillar-grid">{roles.map((role,index)=><article className="pillar-card community-role" key={role.title}><span className="pillar-icon"><i className={`fa-solid ${role.icon}`}/></span><span className="eyebrow">0{index+1}</span><h3>{role.title}</h3><p>{role.text}</p><strong>Bạn nhận được</strong><p>{role.benefit}</p><Link className="text-link" to="/contact">Đăng ký vai trò <i className="fa-solid fa-arrow-right"/></Link></article>)}</div></div></section>
    <section className="section services-section"><div className="container"><div className="section-heading"><p className="eyebrow">QUY TRÌNH KẾT NỐI</p><h2>Bốn bước trước khi <em>đi đến quyết định.</em></h2><p>Một kết nối được xem là có giá trị khi các bên hiểu rõ mình đang trao đổi về điều gì và cần kiểm chứng những gì tiếp theo.</p></div><div className="community-steps">{steps.map(([number,title,text])=><article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><p className="eyebrow">MINH BẠCH VAI TRÒ</p><h2>Rõ phạm vi để xây dựng <em>niềm tin đúng cách.</em></h2></div><div className="boundary-grid">{boundaries.map(([title,text],index)=><article key={title}><i className={`fa-solid ${index===0?"fa-circle-check":index===1?"fa-circle-xmark":"fa-shield-halved"}`}/><h3>{title}</h3><p>{text}</p></article>)}</div><div className="transparency-note"><i className="fa-solid fa-circle-info"/><p><strong>Lưu ý dành cho nhà đầu tư:</strong> Nội dung trên website phục vụ mục đích giới thiệu và kết nối ban đầu. Mọi quyết định cần dựa trên hồ sơ gốc, thẩm định độc lập và tư vấn chuyên môn phù hợp.</p></div></div></section>
    <section className="ecosystem-cta"><div className="container"><div><p className="eyebrow">BẮT ĐẦU KHI BẠN ĐÃ SẴN SÀNG</p><h2>Chia sẻ tiêu chí và nhu cầu của bạn</h2><p>Chúng tôi ưu tiên chất lượng của cuộc kết nối, không chạy theo số lượng giới thiệu.</p></div><Link className="btn" to="/contact">Gửi thông tin kết nối <i className="fa-solid fa-arrow-right"/></Link></div></section>
  </main><Footer/>
</>}

