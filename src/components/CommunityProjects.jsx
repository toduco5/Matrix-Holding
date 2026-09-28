import { Link } from "react-router-dom";
const projects=[
  ["Năng lượng mặt trời cho trường học","Giáo dục & năng lượng","photo-1473341304170-971dccb5ac1e","/projects/solar-school"],
  ["Không gian học tập cộng đồng","Giáo dục","photo-1523240795612-9a054b0db644","/projects/community-learning"],
  ["Chợ xanh kết nối nông sản địa phương","Nông nghiệp & thương mại","photo-1488459716781-31db52582fe9","/projects/green-market"],
  ["Nền tảng kỹ năng số cho thanh niên","Công nghệ & việc làm","photo-1516321318423-f06f85e504b3","/projects/digital-skills"],
  ["Logistics hỗ trợ hộ kinh doanh","Hạ tầng cộng đồng","photo-1586528116311-ad8dd3c8310d","/projects/small-business-logistics"],
];
export default function CommunityProjects(){return <section className="section services-section"><div className="container"><div className="section-heading"><p className="eyebrow">DỰ ÁN CỘNG ĐỒNG MINH HỌA</p><h2>Ý tưởng nhỏ. <em>Tác động thiết thực.</em></h2><p>Các ví dụ định hướng dưới đây chưa phải lời mời đầu tư hoặc dự án đang huy động vốn.</p></div><div className="news-grid">{projects.map(([title,type,image,to])=><article className="news-card" key={title}><Link className="news-image" to={to}><img src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=900&q=82`} alt={title} loading="lazy"/></Link><div className="news-meta">MINH HỌA <span>{type}</span></div><h3><Link to={to}>{title}</Link></h3><p>Ví dụ về cách cộng đồng có thể kết nối nhu cầu thực tế với chuyên môn và nguồn lực phù hợp.</p><Link className="text-link" to={to}>Xem hướng triển khai <i className="fa-solid fa-arrow-right"/></Link></article>)}</div></div></section>}
