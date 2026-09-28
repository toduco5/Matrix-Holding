import { useState } from "react";
import { CONTACT_INFO } from "../data/constants.js";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function Contact() {
  const [message,setMessage]=useState("");
  const submit=(event)=>{
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const subject=encodeURIComponent("Nhu cầu kết nối từ website Matrix Holding");
    const body=encodeURIComponent(`Họ tên: ${data.get("name")}\nEmail: ${data.get("email")}\nĐiện thoại: ${data.get("phone")||"Không cung cấp"}\nVai trò: ${data.get("role")}\n\nNội dung:\n${data.get("comments")}`);
    setMessage("Ứng dụng email sẽ được mở với nội dung bạn vừa nhập. Vui lòng kiểm tra và nhấn Gửi.");
    window.location.href=`mailto:tminhduc1302@gmail.com?subject=${subject}&body=${body}`;
  };
  return <>
    <PageMeta title="Kết nối với Matrix Holding" description="Chia sẻ nhu cầu đầu tư, dự án hoặc chuyên môn với cộng đồng Matrix Holding." />
    <TopBar /><Header />
    <main>
      <div className="title-band" style={{backgroundImage:"linear-gradient(90deg,#06152ee8,#0f27658c),url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=86)"}}><h1>Kết nối với chúng tôi</h1></div>
      <section className="contact-form-area default-padding"><div className="container"><div className="row">
        <div className="col-md-7 contact-form"><div className="content"><div className="heading"><p className="eyebrow">BẮT ĐẦU MỘT CUỘC TRAO ĐỔI</p><h3>Chia sẻ nhu cầu của bạn</h3><p>Hãy nêu rõ vai trò, lĩnh vực quan tâm và mục tiêu kết nối để chúng tôi có cơ sở phản hồi phù hợp.</p></div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-group"><label htmlFor="name">Họ và tên</label><input className="form-control" id="name" name="name" placeholder="Nguyễn Văn A" required/></div>
            <div className="form-group"><label htmlFor="email">Email</label><input className="form-control" id="email" name="email" placeholder="email@domain.vn" type="email" required/></div>
            <div className="form-group"><label htmlFor="phone">Số điện thoại</label><input className="form-control" id="phone" name="phone" placeholder="Số điện thoại liên hệ"/></div>
            <div className="form-group"><label htmlFor="role">Vai trò của bạn</label><select className="form-control" id="role" name="role" required defaultValue=""><option value="" disabled>Chọn vai trò</option><option>Nhà đầu tư</option><option>Chủ dự án</option><option>Đối tác chuyên môn</option><option>Thành viên cộng đồng</option></select></div>
            <div className="form-group comments"><label htmlFor="comments">Nhu cầu kết nối</label><textarea className="form-control" id="comments" name="comments" placeholder="Mô tả ngắn lĩnh vực, giai đoạn và nguồn lực bạn đang tìm kiếm..." required/></div>
            <button type="submit">Soạn email kết nối <i className="fa fa-paper-plane"/></button>
            <div className="alert-msg" role="status" aria-live="polite">{message}</div><p className="form-note">Website không lưu dữ liệu biểu mẫu. Nội dung chỉ được gửi khi bạn xác nhận trong ứng dụng email.</p>
          </form>
        </div></div>
        <aside className="col-md-5 office-info"><div className="tab-content pad-all-20p"><h3>Thông tin liên hệ</h3><ul>{CONTACT_INFO.map(item=><li key={item.label}><div className="icon"><i className={`fas ${item.icon}`}/></div><div className="info"><strong>{item.label}</strong><p>{item.href?<a href={item.href}>{item.detail}</a>:item.detail}</p></div></li>)}</ul></div></aside>
      </div></div></section>
      <div className="maps-area-items"><div className="maps-box oh"><div className="google-maps"><iframe title="Bản đồ văn phòng Matrix Holding tại 107 Ngụy Như Kon Tum" src="https://www.google.com/maps?q=107%20Ng%E1%BB%A5y%20Nh%C6%B0%20Kon%20Tum%2C%20Thanh%20Xu%C3%A2n%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vi%E1%BB%87t%20Nam&output=embed" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></div></div>
    </main><Footer />
  </>;
}

