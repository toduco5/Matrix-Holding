import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CAREER_DEPARTMENTS, CAREER_JOBS } from "../data/careers.js";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function Careers() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("Tất cả");
  const jobs = useMemo(() => CAREER_JOBS.filter(job => {
    const matchesQuery = `${job.title} ${job.unit} ${job.department}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (department === "Tất cả" || job.department === department);
  }), [query, department]);

  return <>
    <PageMeta title="Tuyển dụng | Matrix Holding" description="Khám phá cơ hội nghề nghiệp tại Matrix Holding." />
    <TopBar /><Header />
    <main className="careers-page">
      <section className="career-hero">
        <div className="container">
          <p className="eyebrow">MATRIX HOLDING CAREERS</p>
          <h1>Cơ hội phù hợp cho hành trình tiếp theo của bạn.</h1>
          <p>Khám phá các vị trí tại Matrix Holding và những doanh nghiệp trong hệ sinh thái đối tác.</p>
          <label className="career-search"><i className="fa-solid fa-magnifying-glass" /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Tìm vị trí, công ty hoặc phòng ban" /><span>{jobs.length} vị trí <i className="fa-solid fa-arrow-right" /></span></label>
          <div className="career-hero__stats"><strong>{CAREER_JOBS.length} vị trí đang tuyển</strong><strong>5 doanh nghiệp liên trong</strong></div>
        </div>
      </section>

      <section className="career-content section">
        <div className="container">
          <div className="career-filters" aria-label="Lọc vị trí tuyển dụng">
            {CAREER_DEPARTMENTS.map(item => <button type="button" className={department === item ? "is-active" : ""} onClick={() => setDepartment(item)} key={item}>{item}</button>)}
          </div>
          <div className="career-layout">
            <aside className="career-aside">
              <span className="eyebrow">TÌM VIỆC THÔNG MINH</span>
              <h2>Kết nối với đúng cơ hội, đúng doanh nghiệp.</h2>
              <p>Mỗi tin tuyển dụng được cập nhật trực tiếp bởi đơn vị tuyển dụng.</p>
              <hr />
              <small>DOANH NGHIỆP ĐANG HIỂN THỊ</small>
              <ul><li>Matrix Accounting</li><li>Matrix Finance</li><li>Matrix Legal</li><li>Matrix Research</li><li>Matrix Strategy</li></ul>
            </aside>
            <div className="job-list">
              <div className="job-list__meta"><span>Hiển thị {jobs.length} vị trí</span><button type="button">Mới nhất <i className="fa-solid fa-arrow-down-wide-short" /></button></div>
              {jobs.length ? jobs.map(job => <article className={`job-card job-card--${job.tone}`} key={job.id}>
                <div className="job-card__code">{job.code}</div>
                <div className="job-card__body"><span className="job-type">{job.type}</span><h2>{job.title}</h2><strong>{job.unit}</strong><div className="job-tags"><span><i className="fa-solid fa-location-dot" />{job.location}</span><span><i className="fa-regular fa-money-bill-1" />{job.salary}</span><span><i className="fa-regular fa-folder" />{job.department}</span></div><p>{job.summary}</p><small>Đăng ngày {job.date}</small></div>
                <Link to="/contact" className="job-card__link">Xem chi tiết <i className="fa-solid fa-arrow-right" /></Link>
              </article>) : <div className="career-empty"><i className="fa-regular fa-folder-open" /><h2>Chưa có vị trí phù hợp</h2><p>Thử thay đổi từ khóa hoặc phòng ban.</p></div>}
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
