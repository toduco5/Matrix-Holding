import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FEATURED_NEWS,
  NEWS_CATEGORIES,
  NEWS_ITEMS,
  OLDER_NEWS,
  QUICK_BREAKING_NEWS,
  EXPERT_QUOTE,
  UPCOMING_EVENTS,
  SIDEBAR_AD
} from "../data/news.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";
import PageBanner from "../components/PageBanner.jsx";

const imageUrl = image => `https://images.unsplash.com/${image}`;

export default function News() {
  const [category, setCategory] = useState("Tất cả");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeTabEvents, setActiveTabEvents] = useState("Tất cả (04)");
  const [activeTabEditors, setActiveTabEditors] = useState("Bài viết đọc nhiều nhất");

  // Poll state
  const [pollSelected, setPollSelected] = useState(0);

  const stories = useMemo(() => {
    return [FEATURED_NEWS, ...NEWS_ITEMS].filter(item => {
      const matchesCategory = category === "Tất cả" || item.category === category;
      const matchesQuery = `${item.title} ${item.excerpt}`.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <PageMeta
        title="Tin tức & Sự kiện | Matrix Holding"
        description="Cổng thông tin tin tức, phân tích chuyên sâu, tiêu điểm báo chí và các sự kiện kết nối đầu tư từ hệ sinh thái Matrix Holding."
      />
      <Header />

      <main style={{ background: "#05070f", color: "#ffffff", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
        {/* HERO PAGE BANNER */}
        <PageBanner
          eyebrow="TIN TỨC 24H • MATRIX HOLDING"
          titlePrefix="TIN TỨC & SỰ KIỆN"
          subtitle="Cập nhật dòng chảy thông tin thị trường, góc nhìn chuyên gia và hoạt động nổi bật."
        />

        <section style={{ padding: "60px 0 90px", background: "#05070f" }}>
          <div className="container">
            
            {/* UNIFIED TOP NEWS FRAME CONTAINER (Cùng 1 Frame + Tin tức mới nhất ở trên đầu) */}
            <div style={{
              background: "rgba(12, 18, 32, 0.92)",
              backdropFilter: "blur(16px)",
              borderRadius: 26,
              padding: "32px",
              border: "1px solid rgba(56, 189, 248, 0.25)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.8)",
              marginBottom: 64
            }}>

              {/* TOP HEADER INSIDE FRAME: Latest News Badge & Category Filter Pills */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 16,
                paddingBottom: 22,
                marginBottom: 28,
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
              }}>
                {/* Latest News Badge (Tin tức mới nhất ở trên đầu) */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    background: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.4)",
                    padding: "6px 14px",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                  }}>
                    <span className="live-ticker__dot" />
                    <span style={{ color: "#ef4444", fontSize: "12px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      TIN TỨC MỚI NHẤT
                    </span>
                  </div>
                  
                </div>

                {/* Category Filter Pills inside same frame */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  {NEWS_CATEGORIES.map(item => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      style={{
                        background: category === item ? "#38bdf8" : "rgba(255, 255, 255, 0.06)",
                        color: category === item ? "#000000" : "rgba(255, 255, 255, 0.85)",
                        border: category === item ? "1px solid #38bdf8" : "1px solid rgba(255, 255, 255, 0.12)",
                        fontWeight: 800,
                        fontSize: "12px",
                        padding: "6px 16px",
                        borderRadius: "30px",
                        cursor: "pointer",
                        transition: "all 0.25s ease"
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2-COLUMN GRID INSIDE THE SINGLE UNIFIED FRAME */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1.25fr 1fr",
                gap: 28,
                alignItems: "stretch"
              }} className="news-top-editorial-grid">

                {/* LEFT COLUMN: Main Big Featured Story (Image Top, Title & Text Bottom - Picture 1) */}
                <div style={{
                  background: "rgba(18, 24, 38, 0.6)",
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}>
                  <div>
                    {/* Photo at top */}
                    <div style={{ height: 320, borderRadius: 14, overflow: "hidden", position: "relative", marginBottom: 18 }}>
                      <img
                        src={imageUrl((stories[0] || FEATURED_NEWS).image)}
                        alt={(stories[0] || FEATURED_NEWS).title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                      <div style={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        display: "flex",
                        gap: 8
                      }}>
                        <span style={{
                          background: "#ef4444",
                          color: "#ffffff",
                          fontSize: "10.5px",
                          fontWeight: 900,
                          padding: "4px 10px",
                          borderRadius: 4,
                          textTransform: "uppercase"
                        }}>
                          NỔI BẬT
                        </span>
                        <span style={{
                          background: "rgba(5, 7, 15, 0.85)",
                          backdropFilter: "blur(8px)",
                          color: "#38bdf8",
                          fontSize: "10.5px",
                          fontWeight: 800,
                          padding: "4px 10px",
                          borderRadius: 4,
                          border: "1px solid rgba(56, 189, 248, 0.3)"
                        }}>
                          {(stories[0] || FEATURED_NEWS).category}
                        </span>
                      </div>
                    </div>

                    {/* Title directly below image (Picture 1 style) */}
                    <h2 style={{
                      color: "#ffffff",
                      fontSize: "clamp(20px, 2.2vw, 25px)",
                      fontWeight: 900,
                      lineHeight: 1.35,
                      margin: "0 0 12px",
                      letterSpacing: "-0.02em"
                    }}>
                      <Link to={`/news/${(stories[0] || FEATURED_NEWS).slug}`} style={{ color: "#ffffff", textDecoration: "none" }} className="news-title-hover">
                        {(stories[0] || FEATURED_NEWS).title}
                      </Link>
                    </h2>

                    {/* Excerpt paragraph below title (Picture 1 style) */}
                    <p style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "13.5px",
                      lineHeight: 1.65,
                      margin: "0 0 18px",
                      textAlign: "justify"
                    }}>
                      ({(stories[0] || FEATURED_NEWS).category} - Tin Tiêu Điểm) {(stories[0] || FEATURED_NEWS).excerpt}
                    </p>
                  </div>

                  <div style={{
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "12px"
                  }}>
                    <div style={{ display: "flex", gap: 16 }}>
                      <span><i className="fa-regular fa-eye" /> {(stories[0] || FEATURED_NEWS).views || "15.400"} lượt xem</span>
                      <span><i className="fa-solid fa-share-nodes" /> {(stories[0] || FEATURED_NEWS).shares || "824"} chia sẻ</span>
                    </div>
                    <Link to={`/news/${(stories[0] || FEATURED_NEWS).slug}`} style={{ color: "#38bdf8", fontWeight: 800, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                      Đọc toàn văn <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
                    </Link>
                  </div>
                </div>

                {/* RIGHT COLUMN: 4 Stacked Horizontal News Items with Photos */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  justifyContent: "space-between"
                }}>
                

                  {(stories.slice(1, 5).length > 0 ? stories.slice(1, 5) : NEWS_ITEMS.slice(0, 4)).map(item => (
                    <div
                      key={item.id}
                      style={{
                        background: "rgba(18, 24, 38, 0.6)",
                        backdropFilter: "blur(12px)",
                        borderRadius: 16,
                        padding: "12px 14px",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        transition: "transform 0.25s ease, border-color 0.25s ease",
                        flex: 1
                      }}
                      className="member-company-card"
                    >
                      {/* Thumbnail Image on Left (Photo only, no play button) */}
                      <div style={{
                        width: 140,
                        height: 90,
                        borderRadius: 10,
                        overflow: "hidden",
                        flexShrink: 0
                      }}>
                        <img
                          src={imageUrl(item.image)}
                          alt={item.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      </div>

                      {/* Title & Metadata on Right */}
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <span style={{
                            color: "#38bdf8",
                            fontSize: "11px",
                            fontWeight: 800
                          }}>
                            {item.category}
                          </span>
                          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>• {item.date}</span>
                        </div>

                        <h3 style={{
                          color: "#ffffff",
                          fontSize: "13.5px",
                          fontWeight: 800,
                          lineHeight: 1.35,
                          margin: "0 0 4px",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}>
                          <Link to={`/news/${item.slug}`} style={{ color: "#ffffff", textDecoration: "none" }} className="news-title-hover">
                            {item.title}
                          </Link>
                        </h3>

                        <p style={{
                          color: "rgba(255,255,255,0.65)",
                          fontSize: "11.5px",
                          margin: 0,
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}>
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* SECTION 3: HOẠT ĐỘNG SẮP TỚI & ĐĂNG KÝ THAM GIA (Matches Reference Image Row 3 - Calendar Badges Grid) */}
            <div style={{ marginBottom: 64 }}>
              <div style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: 32,
                flexWrap: "wrap",
                gap: 16
              }}>
                <div>
                  <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                    SỰ KIỆN TRONG THÁNG
                  </span>
                  <h2 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 900, margin: 0 }}>
                     HOẠT ĐỘNG SẮP TỚI
                  </h2>
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Tất cả (04)", "Sự kiện mở", "Webinar", "VIP"].map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTabEvents(tab)}
                      style={{
                        background: activeTabEvents === tab ? "#38bdf8" : "rgba(255,255,255,0.06)",
                        color: activeTabEvents === tab ? "#000000" : "rgba(255,255,255,0.8)",
                        border: activeTabEvents === tab ? "1px solid #38bdf8" : "1px solid rgba(255,255,255,0.12)",
                        fontSize: "12px",
                        fontWeight: 800,
                        padding: "6px 16px",
                        borderRadius: "30px",
                        cursor: "pointer"
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4 Event Cards with Calendar Badges (Exact User Reference Image Layout) */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 20
              }} className="event-calendar-grid">
                {UPCOMING_EVENTS.map(ev => (
                  <div
                    key={ev.id}
                    style={{
                      background: "rgba(18, 24, 38, 0.85)",
                      backdropFilter: "blur(12px)",
                      borderRadius: 20,
                      padding: "24px 20px",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      boxShadow: "0 14px 40px rgba(0,0,0,0.5)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                    className="member-company-card"
                  >
                    <div>
                      {/* Top Row: Calendar Day Box + Badge */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                        <div style={{
                          background: "rgba(15, 23, 42, 0.9)",
                          border: "1px solid rgba(56, 189, 248, 0.35)",
                          borderRadius: 12,
                          padding: "5px 14px",
                          textAlign: "center"
                        }}>
                          <span style={{ color: "#38bdf8", fontSize: "10px", fontWeight: 800, display: "block", textTransform: "uppercase" }}>
                            {ev.month}
                          </span>
                          <strong style={{ color: "#ffffff", fontSize: "24px", fontWeight: 900, lineHeight: 1 }}>
                            {ev.day}
                          </strong>
                        </div>

                        <span style={{
                          background: ev.badgeBg,
                          color: ev.badgeColor,
                          fontSize: "10.5px",
                          fontWeight: 800,
                          padding: "5px 12px",
                          borderRadius: "30px",
                          border: `1px solid ${ev.badgeColor}40`
                        }}>
                          {ev.badge}
                        </span>
                      </div>

                      {/* Time Line */}
                      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "11.5px", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                        <i className="fa-regular fa-clock" style={{ color: "#38bdf8" }} />
                        <span>{ev.time}</span>
                      </div>

                      {/* Title */}
                      <h3 style={{ color: "#ffffff", fontSize: "15px", fontWeight: 800, margin: "0 0 8px", lineHeight: 1.4 }}>
                        {ev.title}
                      </h3>

                      {/* Location Line */}
                      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "11.5px", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
                        <i className="fa-solid fa-location-dot" style={{ color: "rgba(255,255,255,0.4)" }} />
                        <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{ev.location}</span>
                      </div>

                      {/* Excerpt Paragraph (JUSTIFY TEXT as requested) */}
                      <p style={{
                        color: "rgba(255,255,255,0.72)",
                        fontSize: "12px",
                        lineHeight: 1.6,
                        margin: "0 0 16px",
                        textAlign: "justify"
                      }}>
                        {ev.excerpt}
                      </p>
                    </div>

                    <div>
                      {/* Attendance & Status Row */}
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: 12,
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        marginBottom: 14,
                        fontSize: "11px"
                      }}>
                        <span style={{ color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: 5 }}>
                          <i className="fa-solid fa-user-group" style={{ fontSize: 10 }} />
                          {ev.attendees}
                        </span>
                        <span style={{ color: ev.statusColor, fontWeight: 800 }}>
                          {ev.status}
                        </span>
                      </div>

                      {/* Bottom Action Button */}
                      <Link
                        to={ev.link}
                        style={{
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "#ffffff",
                          fontWeight: 800,
                          fontSize: "12px",
                          padding: "11px 16px",
                          borderRadius: 12,
                          textDecoration: "none",
                          textAlign: "center",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          transition: "all 0.25s ease"
                        }}
                        className="overview-pill-link"
                      >
                        <i className={`fa-solid ${ev.buttonIcon}`} />
                        <span>{ev.buttonText}</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 4: DÀNH RIÊNG CHO BẠN - ĐỀ XUẤT BIÊN TẬP (Matches Reference Image Row 4 Grid) */}
            <div style={{ marginBottom: 64 }}>
              <div style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: 32,
                flexWrap: "wrap",
                gap: 16
              }}>
                <div>
                  <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                    GÓC NHÌN BÁO CHÍ
                  </span>
                  <h2 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 900, margin: 0 }}>
                    DÀNH RIÊNG CHO BẠN
                  </h2>
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Bài viết đọc nhiều nhất", "Tin nổi bật tuần", "Thềm bài viết mới"].map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTabEditors(tab)}
                      style={{
                        background: activeTabEditors === tab ? "#38bdf8" : "rgba(255,255,255,0.06)",
                        color: activeTabEditors === tab ? "#000000" : "rgba(255,255,255,0.8)",
                        border: activeTabEditors === tab ? "1px solid #38bdf8" : "1px solid rgba(255,255,255,0.12)",
                        fontSize: "12px",
                        fontWeight: 800,
                        padding: "6px 16px",
                        borderRadius: "30px",
                        cursor: "pointer"
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4 Article Cards Grid (Equal Heights, Justified Text, Clean Border) */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 20
              }} className="editorial-cards-grid">
                {NEWS_ITEMS.map(story => (
                  <article
                    key={story.id}
                    style={{
                      background: "rgba(18, 24, 38, 0.85)",
                      backdropFilter: "blur(12px)",
                      borderRadius: 18,
                      overflow: "hidden",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      boxShadow: "0 14px 40px rgba(0,0,0,0.5)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                    className="editorial-news-card"
                  >
                    <div>
                      <div style={{ height: 170, overflow: "hidden", position: "relative" }}>
                        <img src={imageUrl(story.image)} alt={story.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <span style={{ position: "absolute", top: 12, left: 12, background: "rgba(5,7,15,0.8)", color: "#38bdf8", fontSize: "10px", fontWeight: 800, padding: "3px 10px", borderRadius: 4 }}>
                          {story.category}
                        </span>
                      </div>

                      <div style={{ padding: "18px 16px 12px" }}>
                        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", display: "block", marginBottom: 6 }}>
                          {story.category} · {story.date}
                        </span>

                        <h3 style={{
                          color: "#ffffff",
                          fontSize: "14.5px",
                          fontWeight: 800,
                          margin: "0 0 10px",
                          lineHeight: 1.42,
                          height: "62px",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textAlign: "justify",
                          textJustify: "inter-word"
                        }}>
                          <Link to={`/news/${story.slug}`} style={{ color: "#ffffff", textDecoration: "none" }}>
                            {story.title}
                          </Link>
                        </h3>

                        <p style={{
                          color: "rgba(255,255,255,0.72)",
                          fontSize: "12px",
                          lineHeight: 1.6,
                          margin: 0,
                          height: "58px",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textAlign: "justify",
                          textJustify: "inter-word"
                        }}>
                          {story.excerpt}
                        </p>
                      </div>
                    </div>

                    <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)", fontSize: "11px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {story.author}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* SECTION 5: KHO LƯU TRỮ TIN TỨC CŨ HƠN */}
            <div style={{ marginTop: 56, paddingTop: 44, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: 28,
                flexWrap: "wrap",
                gap: 16
              }}>
                <div>
                  <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                    Tin Trước Đó
                  </span>
                  <h2 style={{ color: "#ffffff", fontSize: "28px", fontWeight: 900, margin: 0 }}>
                    TIN TỨC TRƯỚC ĐÓ
                  </h2>
                </div>

                <span style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "13px" }}>
                  Tổng hợp các ấn phẩm phân tích và sự kiện giai đoạn 2024 – 2025
                </span>
              </div>

              {/* Grid 4 thẻ tin tức cũ */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 20
              }} className="older-news-grid">
                {OLDER_NEWS.map(item => (
                  <article
                    key={item.id}
                    style={{
                      background: "rgba(18, 24, 38, 0.65)",
                      backdropFilter: "blur(12px)",
                      borderRadius: 16,
                      padding: "16px 18px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      gap: 18,
                      alignItems: "center"
                    }}
                    className="editorial-news-card"
                  >
                    <div style={{
                      width: 130,
                      height: 95,
                      borderRadius: 12,
                      overflow: "hidden",
                      flexShrink: 0
                    }}>
                      <img
                        src={imageUrl(item.image)}
                        alt={item.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                        <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800 }}>
                          {item.category}
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>• {item.date}</span>
                      </div>

                      <h4 style={{
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: 800,
                        margin: "0 0 6px",
                        lineHeight: 1.4,
                        textAlign: "justify",
                        textJustify: "inter-word"
                      }}>
                        <Link to={`/news/${item.slug}`} style={{ color: "#ffffff", textDecoration: "none" }}>
                          {item.title}
                        </Link>
                      </h4>

                      <p style={{
                        color: "rgba(255, 255, 255, 0.65)",
                        fontSize: "12px",
                        lineHeight: 1.55,
                        margin: 0,
                        textAlign: "justify",
                        textJustify: "inter-word",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}>
                        {item.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* NÚT XEM TẤT CẢ TIN TỨC Ở CUỐI TRANG */}
              <div style={{ textAlign: "center", marginTop: 44, paddingBottom: 10 }}>
                <button
                  type="button"
                  onClick={() => {
                    setCategory("Tất cả");
                    window.scrollTo({ top: 380, behavior: "smooth" });
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 38px",
                    borderRadius: 30,
                    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                    color: "#ffffff",
                    fontSize: "13.5px",
                    fontWeight: 800,
                    border: "1px solid rgba(56, 189, 248, 0.4)",
                    boxShadow: "0 10px 30px rgba(37, 99, 235, 0.35)",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
                  <span>Xem tất cả tin tức & bài viết</span>
                  <i className="fa-solid fa-arrow-up" style={{ fontSize: 12 }} />
                </button>
              </div>
            </div>



          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
