import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

import PageBanner from "../components/PageBanner.jsx";

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
        <PageBanner
          eyebrow={`DỰ ÁN ĐẦU TƯ & HẠ TẦNG · ${project.field}`}
          titlePrefix={project.title}
          subtitle={project.summary}
        />

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
