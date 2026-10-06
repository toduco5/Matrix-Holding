import { Link } from "react-router-dom";
import { FEATURED_NEWS, NEWS_ITEMS } from "../data/news.js";

const imageUrl = image => `https://images.unsplash.com/${image}`;

export default function HomeNews() {
  const latestStories = [FEATURED_NEWS, ...NEWS_ITEMS].slice(0, 3);

  return (
    <section className="section home-news-section" style={{ padding: "80px 0", background: "var(--navy, #05070f)" }}>
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading-row" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
          <div>
            <span style={{
              display: "inline-block",
              color: "#38bdf8",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 12
            }}>
              TIN TỨC & GÓC NHÌN
            </span>
            <h2 style={{
              color: "#ffffff",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              margin: 0,
              fontFamily: "'Be Vietnam Pro', sans-serif"
            }}>
              Tin Tức Mới Nhất <span className="text-gradient">Matrix Holding</span>
            </h2>
          </div>

          <Link
            to="/news"
            style={{
              color: "#2997ff",
              fontWeight: 700,
              fontSize: "13px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8
            }}
          >
            Xem toàn bộ tin tức <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
          </Link>
        </div>

        {/* 3 News Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24
        }} className="home-news-grid">
          {latestStories.map((item) => (
            <article
              key={item.id || item.slug}
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 16,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.35s ease",
                backdropFilter: "blur(8px)"
              }}
              className="home-news-card"
            >
              {/* Image Container */}
              <div style={{ height: 210, position: "relative", overflow: "hidden" }}>
                <img
                  src={imageUrl(item.image)}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease"
                  }}
                />
                <span style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  background: "rgba(0,0,0,0.75)",
                  backdropFilter: "blur(6px)",
                  color: "#ffffff",
                  fontSize: "10px",
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: "50px",
                  letterSpacing: "0.08em",
                  border: "1px solid rgba(255,255,255,0.15)"
                }}>
                  {item.category}
                </span>
              </div>

              {/* Content Body */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                <div>
                  <span style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "11px",
                    fontWeight: 500,
                    display: "block",
                    marginBottom: 8
                  }}>
                    {item.date}
                  </span>

                  <h3 style={{
                    color: "#ffffff",
                    fontSize: "17px",
                    fontWeight: 700,
                    lineHeight: 1.4,
                    margin: "0 0 10px",
                    fontFamily: "'Be Vietnam Pro', sans-serif"
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    margin: "0 0 20px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}>
                    {item.excerpt}
                  </p>
                </div>

                <Link
                  to={`/news/${item.slug}`}
                  style={{
                    color: "#2997ff",
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6
                  }}
                >
                  Đọc bài viết <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
