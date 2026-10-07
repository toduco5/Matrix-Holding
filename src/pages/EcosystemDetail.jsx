import { Link, useParams } from "react-router-dom";
import { ECOSYSTEM_CONTENT } from "../data/ecosystem.js";
import { PROJECTS, PROJECTS_BY_SECTOR } from "../data/projects.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";
import PropertyMarketOverview from "../components/PropertyMarketOverview.jsx";

const audiences = [
  { icon:"fa-chart-line", title:"Nhà đầu tư", text:"Tìm hiểu lĩnh vực, đối chiếu mức độ phù hợp và chủ động thực hiện thẩm định trước quyết định." },
  { icon:"fa-lightbulb", title:"Chủ dự án", text:"Trình bày vấn đề, giải pháp, giai đoạn hiện tại và nhu cầu nguồn lực bằng thông tin có thể kiểm chứng." },
  { icon:"fa-people-group", title:"Đối tác chuyên môn", text:"Đóng góp kinh nghiệm pháp lý, tài chính, công nghệ hoặc vận hành cho từng giai đoạn phát triển." },
];

export default function EcosystemDetail() {
  const { slug } = useParams();
  const item = ECOSYSTEM_CONTENT[slug];

  if (!item) {
    return (
      <>
        <Header />
        <main className="not-found">
          <p className="eyebrow">404 · KHÔNG TÌM THẤY TRANG</p>
          <h1>Nội dung này chưa sẵn sàng.</h1>
          <Link className="btn" to="/">Về trang chủ</Link>
        </main>
        <Footer />
      </>
    );
  }

  // Get project items related to current sector/unit
  const projectIds = PROJECTS_BY_SECTOR[slug] || ["matrix-city-urban", "community-learning"];
  const sectorProjects = projectIds.map(id => PROJECTS[id]).filter(Boolean);

  return (
    <>
      <PageMeta title={`${item.title} | Matrix Holding`} description={item.intro} />
      <Header />
      <main>
        {/* Unified Matrix Navy/Blue Glass Hero Banner */}
        <div 
          className="title-band ecosystem-detail-hero" 
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(5,7,15,0.92) 0%, rgba(10,26,58,0.88) 55%, rgba(41,151,255,0.25) 100%), url(https://images.unsplash.com/${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div>
            <p className="eyebrow">{item.label}</p>
            <h1>{item.title}</h1>
            <p>{item.tagline}</p>
          </div>
        </div>

        {/* Overview Section */}
        <section className="section">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">VAI TRÒ TRONG HỆ SINH THÁI</p>
              <h2 className="detail-heading">{item.tagline}</h2>
              <p>{item.intro}</p>
              <p className="detail-note">
                <i className="fa-solid fa-circle-info" /> Nội dung có mục đích giới thiệu kết nối. Mỗi bên tự chịu trách nhiệm kiểm chứng và thẩm định trước quyết định.
              </p>
              <Link className="btn" to="/contact">
                Đăng ký kết nối <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <img className="detail-image" src={`https://images.unsplash.com/${item.image}`} alt={`Hình ảnh chủ đề ${item.title}`} />
          </div>
        </section>

        {/* Specialized Market Overview for Property */}
        {slug === "property" && <PropertyMarketOverview />}

        {/* 🏢 DỰ ÁN & HẠ TẦNG TIÊU BIỂU (SYNCHRONIZED PROJECTS GRID) */}
        {sectorProjects.length > 0 && (
          <section className="section sector-projects-section">
            <div className="container">
              <div className="section-heading">
                <p className="eyebrow">DANH MỤC TRỌNG ĐIỂM</p>
                <h2>Dự án & Hạ tầng Tiêu biểu</h2>
                <p>Các dự án chiến lược đang được triển khai và mở rộng hợp tác trong lĩnh vực {item.title}.</p>
              </div>

              <div className="sector-projects-grid">
                {sectorProjects.map((proj) => (
                  <article className="sector-project-card" key={proj.id}>
                    <div className="sector-project-thumb">
                      <img src={`https://images.unsplash.com/${proj.image}?auto=format&fit=crop&w=800&q=80`} alt={proj.title} loading="lazy" />
                      {proj.tag && <span className="sector-project-tag">{proj.tag}</span>}
                    </div>

                    <div className="sector-project-body">
                      <div className="sector-project-meta">
                        <span><i className="fa-solid fa-location-dot" /> {proj.location}</span>
                        {proj.capital && <span className="sector-project-capital"><i className="fa-solid fa-vault" /> {proj.capital}</span>}
                      </div>

                      <h3>{proj.title}</h3>
                      <p>{proj.summary}</p>

                      {proj.highlights && (
                        <div className="sector-project-stats">
                          {proj.highlights.slice(0, 3).map((h) => (
                            <div className="sector-project-stat-item" key={h.label}>
                              <strong>{h.value}</strong>
                              <small>{h.label}</small>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="sector-project-footer">
                        <span className="sector-project-status">
                          <i className="fa-solid fa-circle-dot" /> {proj.status}
                        </span>
                        <Link className="sector-project-link" to={`/projects/${proj.slug}`}>
                          Chi tiết <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Audiences */}
        <section className="section services-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">AI CÓ THỂ THAM GIA</p>
              <h2>Ba vai trò cùng tạo nên giá trị</h2>
              <p>Mỗi bên tham gia bằng thế mạnh riêng và cùng chịu trách nhiệm về thông tin mình cung cấp.</p>
            </div>
            <div className="pillar-grid">
              {audiences.map((audience, index) => (
                <article className="pillar-card audience-card" key={audience.title}>
                  <span className="pillar-icon"><i className={`fa-solid ${audience.icon}`} /></span>
                  <span className="eyebrow">0{index + 1}</span>
                  <h3>{audience.title}</h3>
                  <p>{audience.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>



        {/* Benefits */}
        <section className="section services-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">GIÁ TRỊ KẾT NỐI</p>
              <h2>Những gì cộng đồng có thể tìm thấy</h2>
            </div>
            <div className="pillar-grid">
              {item.benefits.map((text, index) => (
                <article className="pillar-card" key={text}>
                  <span className="eyebrow">0{index + 1}</span>
                  <h3>{text}</h3>
                  <p>Đây là định hướng kết nối ban đầu; phạm vi hợp tác cụ thể do các bên trực tiếp thống nhất.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="section">
          <div className="container process-layout">
            <div className="section-heading">
              <p className="eyebrow">CÁCH THAM GIA</p>
              <h2>Ba bước bắt đầu</h2>
              <p>Quy trình được thiết kế đơn giản để xác định nhu cầu trước khi đi vào trao đổi chi tiết.</p>
            </div>
            <div className="detail-process">
              {item.steps.map((text, index) => (
                <article key={text}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{text}</h3>
                    <p>Mỗi bước cần sự chủ động cung cấp và kiểm chứng thông tin từ các bên liên quan.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ecosystem-cta">
          <div className="container">
            <div>
              <p className="eyebrow">BẮT ĐẦU TỪ MỘT CUỘC TRÒ CHUYỆN</p>
              <h2>Bạn quan tâm đến {item.title}?</h2>
              <p>Chia sẻ vai trò và điều bạn đang tìm kiếm để bắt đầu kết nối phù hợp.</p>
            </div>
            <Link className="btn" to="/contact">
              Gửi nhu cầu kết nối <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
