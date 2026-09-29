import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects.js";

export default function CommunityProjects() {
  return <section className="section services-section"><div className="container">
    <div className="section-heading"><p className="eyebrow">MÔ HÌNH KINH DOANH MINH HỌA</p><h2>Ý tưởng rõ ràng. <em>Khả năng triển khai thực tế.</em></h2><p>Các mô hình dưới đây minh họa cách Matrix Holding tiếp cận cơ hội trong các ngành kinh doanh trọng tâm.</p></div>
    <div className="news-grid">{Object.entries(PROJECTS).map(([slug, project]) => <article className="news-card" key={slug}><Link className="news-image" to={`/projects/${slug}`}><img src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=900&q=82`} alt={project.title} loading="lazy" /></Link><div className="news-meta">MÔ HÌNH MINH HỌA <span>{project.field}</span></div><h3><Link to={`/projects/${slug}`}>{project.title}</Link></h3><p>{project.summary}</p><Link className="text-link" to={`/projects/${slug}`}>Xem mô hình triển khai <i className="fa-solid fa-arrow-right" /></Link></article>)}</div>
  </div></section>;
}
