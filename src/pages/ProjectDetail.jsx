import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS[slug];

  if (!project) {
    return (
      <>
        <Header />
        <main className="not-found">
          <p className="eyebrow">404 · KHÔNG TÌM THẤY DỰ ÁN</p>
          <h1>Dự án này chưa có thông tin.</h1>
          <Link className="btn" to="/sectors">Về danh mục hệ sinh thái</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <PageMeta title={`${project.title} | Matrix Holding`} description={project.summary} />
      <Header />
      <main>
        {/* Synchronized Hero Section */}
        <section 
          className="detail-hero" 
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(5,7,15,0.92) 0%, rgba(10,26,58,0.88) 55%, rgba(41,151,255,0.25) 100%), url(https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1800&q=86)`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container">
            <p className="eyebrow">DỰ ÁN ĐẦU TƯ & HẠ TẦNG · {project.field}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            {project.capital && (
              <div className="vivid-hero-stats" style={{ justifyContent: "flex-start", marginTop: 16 }}>
                <div className="vivid-hero-stat-item">
                  <i className="fa-solid fa-vault" /> Quy mô vốn: <strong>{project.capital}</strong>
                </div>
                {project.location && (
                  <div className="vivid-hero-stat-item">
                    <i className="fa-solid fa-location-dot" /> Địa điểm: <strong>{project.location}</strong>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Project Details Grid */}
        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">ĐỊNH HƯỚNG TRIỂN KHAI & NGUỒN LỰC</p>
              <h2>{project.need}</h2>
              <p><strong>Trạng thái dự án:</strong> {project.status}</p>
              <p>
                Dự án được định hướng phát triển theo chuẩn mực quản trị hiện đại, tuân thủ tiêu chuẩn ESG và sẵn sàng kết nối hợp tác với các nhà đầu tư, đối tác hạ tầng và tài chính chiến lược.
              </p>
              <Link className="btn" to="/contact" style={{ marginTop: 12 }}>
                Đăng ký hợp tác dự án <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>

            <div>
              <p className="eyebrow">TÁC ĐỘNG & GIÁ TRỊ KỲ VỌNG</p>
              <div className="sector-grid" style={{ gridTemplateColumns: "1fr" }}>
                {project.impact.map((item, i) => (
                  <article className="sector-info" key={item}>
                    <span className="eyebrow">TÁC ĐỘNG 0{i + 1}</span>
                    <h3>{item}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
