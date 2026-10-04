import { Link } from "react-router-dom";
import { CAREER_JOBS } from "../data/careers.js";

export default function HomeCareers() {
  return <section className="section home-careers"><div className="container">
    <div className="section-heading section-heading-row"><div><p className="eyebrow">CƠ HỘI NGHỀ NGHIỆP</p><h2>Cùng Matrix Holding <em>kiến tạo giá trị.</em></h2><p>Khám phá các vị trí đang được đăng tải trong hệ sinh thái.</p></div><Link className="text-link" to="/tuyen-dung">Xem tất cả vị trí <i className="fa-solid fa-arrow-right"/></Link></div>
    <div className="home-careers__grid">{CAREER_JOBS.slice(0,4).map(job=><article key={job.id}><span>{job.unit} · {job.location}</span><h3>{job.title}</h3><p>{job.department} <i/> {job.type}</p><Link to={`/careers/${job.id}`}>Xem chi tiết <i className="fa-solid fa-arrow-right"/></Link></article>)}</div>
  </div></section>;
}
