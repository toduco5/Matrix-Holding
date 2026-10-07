import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FEATURED_NEWS, NEWS_CATEGORIES, NEWS_ITEMS, UPCOMING_EVENTS, SIDEBAR_AD, ECOSYSTEM_PROMO } from "../data/news.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";
import ParticleBackground from "../components/ParticleBackground.jsx";

const imageUrl = image => `https://images.unsplash.com/${image}`;

export default function News() {
  const [category, setCategory] = useState("Tất cả");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const stories = useMemo(() => [FEATURED_NEWS, ...NEWS_ITEMS].filter(item => {
    return (category === "Tất cả" || item.category === category) && `${item.title} ${item.excerpt}`.toLowerCase().includes(query.toLowerCase());
  }), [category, query]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return <>
    <PageMeta title="Tin tức | Matrix Holding" description="Câu chuyện, hoạt động và thông tin cập nhật từ hệ sinh thái Matrix Holding." />
    <Header />
    <main className="insights-page">
      {/* Dynamic Animated Hero Banner */}
      <section 
        className="vivid-page-hero"
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(5,7,15,0.75) 0%, rgba(5,7,15,0.96) 100%), url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=85)"
        }}
      >
        <ParticleBackground />

        <div className="vivid-hero-content">
          <span className="vivid-hero-badge">
            <i className="fa-solid fa-bolt" /> MATRIX HOLDING · INSIGHTS
          </span>
          <h1><span className="text-gradient">Tin tức</span></h1>
          <p className="vivid-hero-desc">
            Cập nhật những chuyển động mới nhất, phân tích chuyên sâu và góc nhìn tăng trưởng từ 04 hệ sinh thái thuộc Matrix Holding.
          </p>

          <div className="vivid-hero-stats">
            <div className="vivid-hero-stat-item">
              <i className="fa-solid fa-newspaper" /> <strong>50+</strong> Bài viết & Phân tích
            </div>
            <div className="vivid-hero-stat-item">
              <i className="fa-solid fa-sitemap" /> <strong>04</strong> Hệ sinh thái
            </div>
            <div className="vivid-hero-stat-item">
              <i className="fa-solid fa-clock-rotate-left" /> Cập nhật Hàng tuần
            </div>
          </div>
        </div>
      </section>

      <section className="insights-content">
        <div className="container">
          {/* Toolbar: Category filter & Search */}
          <div className="insights-toolbar">
            <div className="insights-categories">
              {NEWS_CATEGORIES.map(item => (
                <button className={category === item ? "is-active" : ""} onClick={() => setCategory(item)} key={item}>{item}</button>
              ))}
            </div>
            <label>
              <i className="fa-solid fa-magnifying-glass" />
              <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Tìm trong chuyên mục" />
            </label>
          </div>

          {/* Main Grid: Featured News + Sidebar with Hot Investment Project Ad */}
          <div className="insights-grid">
            <article className="insights-featured" style={{ backgroundImage:`linear-gradient(0deg,#05070ff2 0%,#0f172a99 56%,transparent),url(${imageUrl(FEATURED_NEWS.image)})` }}>
              <div>
                <span>{FEATURED_NEWS.category} · {FEATURED_NEWS.date}</span>
                <h2>{FEATURED_NEWS.title}</h2>
                <p>{FEATURED_NEWS.excerpt}</p>
                <Link to={`/news/${FEATURED_NEWS.slug}`}>Đọc chi tiết <i className="fa-solid fa-arrow-right" /></Link>
              </div>
            </article>

            <aside className="insights-latest">
              <div className="insights-latest__heading">
                <h2>Mới nhất</h2>
                <span>CẬP NHẬT</span>
              </div>
              {NEWS_ITEMS.slice(0, 2).map(item => (
                <article key={item.id}>
                  <small>{item.category} · {item.date}</small>
                  <h3><Link to={`/news/${item.slug}`}>{item.title}</Link></h3>
                  <p>{item.excerpt}</p>
                </article>
              ))}

              {/* Sidebar Ad / Featured Project Card */}
              <div className="news-sidebar-ad">
                <div className="news-sidebar-ad__img" style={{ backgroundImage: `url(${imageUrl(SIDEBAR_AD.image)})` }}>
                  <span className="news-sidebar-ad__badge">{SIDEBAR_AD.badge}</span>
                </div>
                <div className="news-sidebar-ad__body">
                  <h3>{SIDEBAR_AD.title}</h3>
                  <p>{SIDEBAR_AD.subtitle}</p>
                  <div className="news-sidebar-ad__stats">
                    {SIDEBAR_AD.stats.map((s, idx) => (
                      <div key={idx}>
                        <small>{s.label}</small>
                        <strong>{s.val}</strong>
                      </div>
                    ))}
                  </div>
                  <Link to={SIDEBAR_AD.link} className="news-sidebar-ad__btn">
                    {SIDEBAR_AD.cta} <i className="fa-solid fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Banner Quảng Cáo Hệ Sinh Thái (Full-width Promo Banner) */}
          <div className="news-promo-banner">
            <div className="news-promo-banner__content">
              <span className="news-promo-badge"><i className="fa-solid fa-bolt" /> {ECOSYSTEM_PROMO.badge}</span>
              <h2>{ECOSYSTEM_PROMO.title}</h2>
              <p>{ECOSYSTEM_PROMO.description}</p>
              <div className="news-promo-highlights">
                {ECOSYSTEM_PROMO.highlights.map((h, i) => (
                  <span key={i}><i className={`fa-solid ${h.icon}`} /> {h.text}</span>
                ))}
              </div>
            </div>
            <div className="news-promo-banner__cta">
              <Link to={ECOSYSTEM_PROMO.link} className="btn-promo-glowing">
                {ECOSYSTEM_PROMO.cta} <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>

          {/* Banner CTA Giữa các bài viết (Newsletter & Investment Registration Bar) */}
          <div className="news-mid-cta">
            <div className="news-mid-cta__text">
              <span className="eyebrow-cta"><i className="fa-solid fa-gem" /> CỘNG ĐỒNG NHÀ ĐẦU TƯ VIP</span>
              <h2>Nhận Bản Tin Thị Trường & Cơ Hội Đầu Tư Sớm Nhất</h2>
              <p>Cập nhật thông tin phân tích chuyên sâu, xu hướng hệ sinh thái và cơ hội kết nối từ Matrix Holding mỗi tuần.</p>
            </div>
            <form className="news-mid-cta__form" onSubmit={handleSubscribe}>
              {subscribed ? (
                <div className="news-subscribe-success">
                  <i className="fa-solid fa-circle-check" /> Đã đăng ký thành công! Đội ngũ Matrix sẽ liên hệ sớm.
                </div>
              ) : (
                <div className="news-subscribe-input-group">
                  <input 
                    type="email" 
                    required 
                    placeholder="Nhập email của bạn..." 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                  />
                  <button type="submit" className="btn-subscribe">
                    Đăng ký ngay <i className="fa-solid fa-paper-plane" />
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Stories List Heading */}
          <div className="insights-list-heading">
            <div>
              <span>TIN ĐỌC TIẾP</span>
              <h2>Câu chuyện từ Matrix</h2>
            </div>
            <span>{stories.length} bài viết</span>
          </div>

          {/* Stories Cards Grid */}
          <div className="insights-cards">
            {stories.map(item => (
              <article key={item.id}>
                <img src={imageUrl(item.image)} alt="" />
                <small>{item.category} · {item.date}</small>
                <h2>{item.title}</h2>
                <p>{item.excerpt}</p>
                <Link to={`/news/${item.slug}`}>Xem chi tiết <i className="fa-solid fa-arrow-right" /></Link>
              </article>
            ))}
          </div>

          {/* Phần Quảng Cáo Sự Kiện & Hội Thảo Sắp Tới (Upcoming Events Section) */}
          <section className="news-events-section">
            <div className="news-events-heading">
              <div>
                <span className="eyebrow-events"><i className="fa-solid fa-calendar-days" /> HOẠT ĐỘNG & HỘI THẢO</span>
                <h2>Sự Kiện & Hội Thảo Sắp Tới</h2>
              </div>
              <p>Tham gia các chương trình kết nối đầu tư, webinar chuyên đề & workshop từ Matrix Holding.</p>
            </div>

            <div className="news-events-grid">
              {UPCOMING_EVENTS.map(event => (
                <div className="news-event-card" key={event.id}>
                  <div className="news-event-card__img" style={{ backgroundImage: `url(${imageUrl(event.image)})` }}>
                    <span className="event-badge">{event.badge}</span>
                  </div>
                  <div className="news-event-card__content">
                    <div className="event-meta">
                      <span><i className="fa-regular fa-calendar" /> {event.date}</span>
                      <span><i className="fa-regular fa-clock" /> {event.time}</span>
                    </div>
                    <h3>{event.title}</h3>
                    <p className="event-location"><i className="fa-solid fa-location-dot" /> {event.location}</p>
                    <p className="event-excerpt">{event.excerpt}</p>
                    <div className="event-speakers">
                      <strong>Diễn giả:</strong> {event.speakers.join(" · ")}
                    </div>
                    <Link to={event.link} className="event-btn">
                      Đăng ký tham gia ngay <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </section>
    </main>
    <Footer />
  </>;
}

