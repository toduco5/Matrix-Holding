import { Link } from "react-router-dom";
import { FEATURED_NEWS, NEWS_ITEMS } from "../data/news.js";

const newsIllustrations = [
  '/assets/news-auditorium-gold.png',
  '/assets/news-headquarters-gold.png',
  '/assets/news-investment-gold.png',
];

export default function HomeNews() {
  const latestStories = [NEWS_ITEMS[0], FEATURED_NEWS, NEWS_ITEMS[1]];
  return (
    <section className="section home-news-section" aria-labelledby="home-news-title">
      <div className="container">
        <div className="home-news-heading">
          <div>
            <p className="eyebrow home-section-label">TIN TỨC</p>
            <h2 id="home-news-title">TIN TỨC MỚI NHẤT</h2>
            <p className="home-news-intro">Cập nhật những thông tin, hoạt động và chương trình sự kiện từ MATRIX HOLDING.</p>
          </div>
        </div>
        <div className="home-news-track">
          {latestStories.map((item, index) => (
            <article className="home-news-card" key={item.slug}>
              <Link className="home-news-image" to={'/news/' + item.slug} tabIndex={-1} aria-hidden="true" draggable={false}>
                <img src={newsIllustrations[index % newsIllustrations.length]} alt="" loading="lazy" draggable={false} />
              </Link>
              <div className="home-news-copy">
                <span className="home-news-topic">{item.topic || "Tin tức"}</span>
                <div className="home-news-meta"><time>{item.date}{item.time ? ' · ' + item.time : ''}</time></div>
                <h3><Link to={'/news/' + item.slug}>{index === 2 && item.title.includes(' VÀ ') ? <>{item.title.split(' VÀ ')[0]}<br />VÀ {item.title.split(' VÀ ').slice(1).join(' VÀ ')}</> : item.title}</Link></h3>
              </div>
            </article>
          ))}
        </div>
        <div className="home-news-bottom">
          <Link className="home-news-view-all" to="/news">Xem tất cả <i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
