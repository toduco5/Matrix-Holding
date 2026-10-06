import { Link, useParams } from "react-router-dom";
import { CAREER_JOBS } from "../data/careers.js";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function CareerDetail() {
  const { id } = useParams();
  const job = CAREER_JOBS.find(position => position.id === id);
  if (!job) return <><Header/><main className="not-found"><p className="eyebrow">404 · KHÔNG TÌM THẤY VỊ TRÍ</p><h1>Vị trí này không còn khả dụng.</h1><Link className="btn" to="/tuyen-dung">Xem vị trí khác</Link></main><Footer/></>;
  return <><PageMeta title={`${job.title} | Tuyển dụng Matrix Holding`} description={job.summary}/><Header/><main className="career-detail-page">
    <section className="career-hero"><div className="container"><Link to="/tuyen-dung" className="news-back"><i className="fa-solid fa-arrow-left"/> Tất cả vị trí</Link><p className="eyebrow">{job.unit} · {job.department}</p><h1>{job.title}</h1><p>{job.summary}</p><div className="career-detail-tags"><span>{job.location}</span><span>{job.type}</span><span>{job.salary}</span></div><a href={`mailto:tminhduc1302@gmail.com?subject=${encodeURIComponent(`Ứng tuyển: ${job.title}`)}`} className="btn">Ứng tuyển qua email <i className="fa-solid fa-arrow-right"/></a></div></section>
    <section className="section"><div className="container career-detail-copy"><div><p className="eyebrow">VỀ VỊ TRÍ</p><h2>Cùng đội ngũ tạo ra giá trị thiết thực.</h2><p>{job.summary} Vị trí làm việc tại {job.location}, theo hình thức {job.type.toLowerCase()}.</p><h3>Thông tin tuyển dụng</h3><ul><li>Đơn vị: {job.unit}</li><li>Phòng ban: {job.department}</li><li>Mức lương tham khảo: {job.salary}</li><li>Ngày đăng: {job.date}</li></ul><p className="detail-note"><i className="fa-solid fa-circle-info"/> Thông tin tuyển dụng cần được đơn vị tuyển dụng xác nhận và cập nhật trước khi công bố.</p></div></div></section>
  </main><Footer/></>;
}
