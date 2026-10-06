import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CONTACT_INFO, SECTORS } from "../data/constants.js";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

const roles = { investor: "Nhà đầu tư", project: "Chủ dự án", partner: "Đối tác chuyên môn" };

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("");
  const initialRole = roles[searchParams.get("type")] || "";
  const submit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Nhu cầu kết nối từ website Matrix Holding");
    const body = encodeURIComponent(`Người đại diện: ${data.get("name")}\nDoanh nghiệp: ${data.get("company") || "Chưa cung cấp"}\nTrụ sở: ${data.get("address") || "Chưa cung cấp"}\nMã số thuế: ${data.get("tax") || "Chưa cung cấp"}\nEmail: ${data.get("email")}\nĐiện thoại: ${data.get("phone") || "Không cung cấp"}\nVai trò: ${data.get("role")}\nLĩnh vực: ${data.get("sector") || "Chưa xác định"}\nQuy mô/giai đoạn: ${data.get("scale") || "Chưa cung cấp"}\n\nThông tin trao đổi:\n${data.get("comments")}`);
    setMessage("Ứng dụng email đã được mở với nội dung bạn vừa nhập. Vui lòng kiểm tra và nhấn Gửi.");
    window.location.href = `mailto:tminhduc1302@gmail.com?subject=${subject}&body=${body}`;
  };
  return <>
    <PageMeta title="Kết nối với Matrix Holding" description="Chia sẻ nhu cầu đầu tư, dự án hoặc năng lực triển khai để bắt đầu một cuộc trao đổi phù hợp với Matrix Holding." />
    <Header />
    <main>
      <div className="title-band" style={{ backgroundImage: "linear-gradient(90deg,#1f0d26ee,#592b50b8),url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=86)" }}><h1>Kết nối với chúng tôi</h1></div>
      <section className="contact-form-area default-padding"><div className="container"><div className="row">
        <div className="col-md-7 contact-form"><div className="content"><div className="heading"><p className="eyebrow">BẮT ĐẦU MỘT CUỘC TRAO ĐỔI</p><h3>Chia sẻ nhu cầu của bạn</h3><p>Hãy nêu rõ vai trò, lĩnh vực quan tâm và mục tiêu kết nối để chúng tôi có cơ sở phản hồi phù hợp.</p></div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-group"><label htmlFor="name">Họ tên người đại diện</label><input className="form-control" id="name" name="name" placeholder="Nguyễn Văn A" required /></div>
            <div className="form-group"><label htmlFor="company">Tên doanh nghiệp</label><input className="form-control" id="company" name="company" placeholder="Công ty TNHH ABC" /></div>
            <div className="form-group"><label htmlFor="address">Trụ sở chính</label><input className="form-control" id="address" name="address" placeholder="Tỉnh/Thành phố, Việt Nam" /></div>
            <div className="form-group"><label htmlFor="tax">Mã số thuế</label><input className="form-control" id="tax" name="tax" placeholder="Mã số thuế doanh nghiệp" /></div>
            <div className="form-group"><label htmlFor="email">Email</label><input className="form-control" id="email" name="email" placeholder="email@domain.vn" type="email" required /></div>
            <div className="form-group"><label htmlFor="phone">Số điện thoại</label><input className="form-control" id="phone" name="phone" placeholder="Số điện thoại liên hệ" /></div>
            <div className="form-group"><label htmlFor="role">Vai trò của bạn</label><select className="form-control" id="role" name="role" required defaultValue={initialRole}><option value="" disabled>Chọn vai trò</option><option>Nhà đầu tư</option><option>Chủ dự án</option><option>Đối tác chuyên môn</option><option>Thành viên cộng đồng</option></select></div>
            <div className="form-group"><label htmlFor="sector">Lĩnh vực quan tâm</label><select className="form-control" id="sector" name="sector" defaultValue=""><option value="">Chọn lĩnh vực (không bắt buộc)</option>{SECTORS.map(sector => <option key={sector.id}>{sector.name}</option>)}<option>Khác</option></select></div>
            <div className="form-group"><label htmlFor="scale">Quy mô hoặc giai đoạn</label><input className="form-control" id="scale" name="scale" placeholder="Ví dụ: đang khảo sát, cần vốn, cần đối tác vận hành..." /></div>
            <div className="form-group comments"><label htmlFor="comments">Thông tin trao đổi</label><textarea className="form-control" id="comments" name="comments" placeholder="Mô tả ngắn mục tiêu hợp tác, nguồn lực và thông tin bạn muốn trao đổi..." required /></div>
            <button type="submit">Gửi thông tin hợp tác <i className="fa-solid fa-paper-plane" /></button>
            <div className="alert-msg" role="status" aria-live="polite">{message}</div><p className="form-note">Website không lưu dữ liệu biểu mẫu. Nội dung chỉ được gửi khi bạn xác nhận trong ứng dụng email.</p>
          </form>
        </div></div>
        <aside className="col-md-5 office-info"><div className="tab-content pad-all-20p"><h3>Thông tin doanh nghiệp</h3><ul><li><div className="icon"><i className="fa-solid fa-building" /></div><div className="info"><strong>Tên doanh nghiệp</strong><p>Matrix Holding</p></div></li>{CONTACT_INFO.map(item => <li key={item.label}><div className="icon"><i className={`fa-solid ${item.icon}`} /></div><div className="info"><strong>{item.label}</strong><p>{item.href ? <a href={item.href}>{item.detail}</a> : item.detail}</p></div></li>)}</ul></div></aside>
      </div></div></section>
      <div className="maps-area-items"><div className="maps-box oh"><div className="google-maps"><iframe title="Bản đồ văn phòng Matrix Holding tại 107 Ngụy Như Kon Tum" src="https://www.google.com/maps?q=107%20Ng%E1%BB%A5y%20Nh%C6%B0%20Kon%20Tum%2C%20Thanh%20Xu%C3%A2n%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vi%E1%BB%87t%20Nam&output=embed" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></div>
    </main><Footer />
  </>;
}
