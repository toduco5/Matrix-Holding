import { Link, useParams } from "react-router-dom";
import { ECOSYSTEM_CONTENT } from "../data/ecosystem.js";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";
import PropertyMarketOverview from "../components/PropertyMarketOverview.jsx";

const thematicGalleries = {
  network: [
    { src:"photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=82", alt:"Nhà đầu tư trao đổi và thiết lập quan hệ", caption:"Mở rộng mạng lưới" },
    { src:"photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=82", alt:"Cộng đồng cùng thảo luận cơ hội", caption:"Chia sẻ góc nhìn" },
  ],
  ventures: [
    { src:"photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=82", alt:"Dự án phát triển đô thị quy mô lớn", caption:"Năng lực triển khai" },
    { src:"photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1000&q=82", alt:"Đội ngũ dự án trình bày kế hoạch", caption:"Chuẩn hóa dự án" },
  ],
  connect: [
    { src:"photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=82", alt:"Chuyên gia phân tích hồ sơ và dữ liệu", caption:"Phân tích chuyên môn" },
    { src:"photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=82", alt:"Đối tác thống nhất phạm vi làm việc", caption:"Đối thoại trực tiếp" },
  ],
  academy: [
    { src:"photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=82", alt:"Học viên trao đổi trong chương trình đào tạo", caption:"Học tập thực tiễn" },
    { src:"photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=82", alt:"Đội ngũ cùng thảo luận kế hoạch phát triển", caption:"Cộng đồng tinh hoa" },
  ],
  technology: [
    { src:"photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=82", alt:"Hạ tầng công nghệ và vi mạch", caption:"Nền tảng công nghệ" },
    { src:"photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=82", alt:"Đội ngũ phát triển giải pháp số", caption:"Giải pháp thực tế" },
  ],
  energy: [
    { src:"photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=82", alt:"Hệ thống năng lượng tái tạo", caption:"Năng lượng sạch" },
    { src:"photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=82", alt:"Giải pháp điện mặt trời bền vững", caption:"Tác động dài hạn" },
  ],
};

const audiences = [
  { icon:"fa-chart-line", title:"Nhà đầu tư", text:"Tìm hiểu lĩnh vực, đối chiếu mức độ phù hợp và chủ động thực hiện thẩm định trước quyết định." },
  { icon:"fa-lightbulb", title:"Chủ dự án", text:"Trình bày vấn đề, giải pháp, giai đoạn hiện tại và nhu cầu nguồn lực bằng thông tin có thể kiểm chứng." },
  { icon:"fa-people-group", title:"Đối tác chuyên môn", text:"Đóng góp kinh nghiệm pháp lý, tài chính, công nghệ hoặc vận hành cho từng giai đoạn phát triển." },
];

export default function EcosystemDetail(){
  const { slug }=useParams(), item=ECOSYSTEM_CONTENT[slug];
  if(!item)return <main className="not-found"><h1>Nội dung chưa có</h1><Link className="btn" to="/">Về trang chủ</Link></main>;
  const gallery=[{src:item.image,alt:`Hoạt động liên quan đến ${item.title}`,caption:item.title},...(thematicGalleries[slug] || thematicGalleries.connect)];
  return <><PageMeta title={item.title} description={item.intro}/><Header/><main>
    <div className="title-band ecosystem-detail-hero" style={{backgroundImage:`linear-gradient(90deg,#1f0d26dd,#592b509c),url(https://images.unsplash.com/${item.image})`}}><div><p className="eyebrow">{item.label}</p><h1>{item.title}</h1><p>{item.tagline}</p></div></div>
    <section className="section"><div className="container about-grid"><div><p className="eyebrow">VAI TRÒ TRONG HỆ SINH THÁI</p><h2 className="detail-heading">{item.tagline}</h2><p>{item.intro}</p><p className="detail-note"><i className="fa-solid fa-circle-info"/> Nội dung có mục đích giới thiệu kết nối. Mỗi bên tự chịu trách nhiệm kiểm chứng và thẩm định trước quyết định.</p><Link className="btn" to="/contact">Đăng ký kết nối <i className="fa-solid fa-arrow-right"/></Link></div><img className="detail-image" src={`https://images.unsplash.com/${item.image}`} alt={`Hình ảnh chủ đề ${item.title}`}/></div></section>
    {slug === "property" && <PropertyMarketOverview />}
    <section className="section services-section"><div className="container"><div className="section-heading"><p className="eyebrow">AI CÓ THỂ THAM GIA</p><h2>Ba vai trò cùng tạo nên giá trị</h2><p>Mỗi bên tham gia bằng thế mạnh riêng và cùng chịu trách nhiệm về thông tin mình cung cấp.</p></div><div className="pillar-grid">{audiences.map((audience,index)=><article className="pillar-card audience-card" key={audience.title}><span className="pillar-icon"><i className={`fa-solid ${audience.icon}`}/></span><span className="eyebrow">0{index+1}</span><h3>{audience.title}</h3><p>{audience.text}</p></article>)}</div></div></section>
    <section className="section ecosystem-gallery-section"><div className="container"><div className="section-heading"><p className="eyebrow">GÓC NHÌN THỰC TẾ</p><h2>Con người, dữ liệu và đối thoại</h2><p>Một cơ hội chỉ trở nên rõ ràng hơn khi thông tin được xem xét, câu hỏi được đặt ra và các bên trao đổi trực tiếp.</p></div><div className="ecosystem-gallery">{gallery.map((photo,index)=><figure className={index===0?"is-featured":""} key={photo.src}><img src={`https://images.unsplash.com/${photo.src}`} alt={photo.alt} loading="lazy"/><figcaption><span>0{index+1}</span>{photo.caption}</figcaption></figure>)}</div></div></section>
    <section className="section services-section"><div className="container"><div className="section-heading"><p className="eyebrow">GIÁ TRỊ KẾT NỐI</p><h2>Những gì cộng đồng có thể tìm thấy</h2></div><div className="pillar-grid">{item.benefits.map((text,index)=><article className="pillar-card" key={text}><span className="eyebrow">0{index+1}</span><h3>{text}</h3><p>Đây là định hướng kết nối ban đầu; phạm vi hợp tác cụ thể do các bên trực tiếp thống nhất.</p></article>)}</div></div></section>
    <section className="section"><div className="container process-layout"><div className="section-heading"><p className="eyebrow">CÁCH THAM GIA</p><h2>Ba bước bắt đầu</h2><p>Quy trình được thiết kế đơn giản để xác định nhu cầu trước khi đi vào trao đổi chi tiết.</p></div><div className="detail-process">{item.steps.map((text,index)=><article key={text}><span>0{index+1}</span><div><h3>{text}</h3><p>Mỗi bước cần sự chủ động cung cấp và kiểm chứng thông tin từ các bên liên quan.</p></div></article>)}</div></div></section>
    <section className="ecosystem-cta"><div className="container"><div><p className="eyebrow">BẮT ĐẦU TỪ MỘT CUỘC TRÒ CHUYỆN</p><h2>Bạn quan tâm đến {item.title}?</h2><p>Chia sẻ vai trò và điều bạn đang tìm kiếm để bắt đầu kết nối phù hợp.</p></div><Link className="btn" to="/contact">Gửi nhu cầu kết nối <i className="fa-solid fa-arrow-right"/></Link></div></section>
  </main><Footer/></>;
}
