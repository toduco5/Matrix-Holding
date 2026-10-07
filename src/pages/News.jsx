import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FEATURED_NEWS,
  NEWS_CATEGORIES,
  NEWS_ITEMS,
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
          titlePrefix="Cổng thông tin &"
          titleHighlight="Sự kiện tiêu điểm"
          subtitle="Cập nhật dòng chảy thông tin thị trường, góc nhìn chuyên gia và hoạt động nổi bật từ hệ sinh thái Matrix Holding."
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
                  <span style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "13px", fontWeight: 600 }}>
                    Cập nhật liên tục dòng chảy sự kiện & báo chí tiêu điểm
                  </span>
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
                  {/* Cyan Blue Title Header on top of 4 news items */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: 8,
                    marginBottom: 2,
                    borderBottom: "1px solid rgba(56, 189, 248, 0.25)"
                  }}>
                    <span style={{
                      color: "#38bdf8",
                      fontSize: "13px",
                      fontWeight: 900,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: 6
                    }}>
                      ⚡ CẬP NHẬT MỚI NHẤT
                    </span>
                    <span style={{ color: "rgba(255, 255, 255, 0.45)", fontSize: "11px" }}>
                      Live Stream • 24/7
                    </span>
                  </div>

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

            {/* SECTION 2: SỰ KIỆN & TIÊU ĐIỂM TRONG NƯỚC - QUỐC TẾ (Matches Reference Image Row 2 Dark Block) */}
            <div style={{
              background: "rgba(12, 18, 32, 0.95)",
              borderRadius: 26,
              padding: "36px 32px",
              border: "1px solid rgba(56, 189, 248, 0.25)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.8)",
              marginBottom: 64
            }}>
              {/* Category Filter Tabs */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 28,
                flexWrap: "wrap",
                gap: 16
              }}>
                <div>
                  <span style={{ color: "#ef4444", fontSize: "11px", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>
                    ★ SỰ KIỆN NỔI BẬT NĂM 2026
                  </span>
                  <h2 style={{ color: "#ffffff", fontSize: "28px", fontWeight: 900, margin: 0 }}>
                    Sự Kiện & Tiêu Điểm Matrix Holding  
                  </h2>
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Tất cả tiêu điểm", "Báo chí nói về Matrix", "Đổi mới sáng tạo & AI", "Thị trường mạo hiểm"].map((tab, idx) => (
                    <button
                      key={tab}
                      type="button"
                      style={{
                        background: idx === 0 ? "#1d4ed8" : "rgba(255,255,255,0.06)",
                        color: "#ffffff",
                        border: idx === 0 ? "1px solid #3b82f6" : "1px solid rgba(255,255,255,0.12)",
                        fontSize: "12px",
                        fontWeight: 700,
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

              {/* 2-Column Main Dark Event Layout */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: 28
              }} className="dark-event-split-grid">
                
                {/* Left: Main Big Featured Event Banner */}
                <div style={{
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  minHeight: 380,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "36px",
                  backgroundImage: `linear-gradient(180deg, rgba(5,7,15,0.2) 0%, rgba(5,7,15,0.92) 80%), url(https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&w=1200&q=85)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "1px solid rgba(255,255,255,0.15)"
                }}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                    <span style={{ background: "#ef4444", color: "#ffffff", fontSize: "11px", fontWeight: 900, padding: "3px 10px", borderRadius: 4 }}>
                      TRỰC TIẾP CHÍNH
                    </span>
                    <span style={{ color: "#38bdf8", fontSize: "12px", fontWeight: 800 }}>Hội thảo Đổi mới Sáng tạo 2026</span>
                  </div>

                  <h3 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 900, lineHeight: 1.3, margin: "0 0 16px" }}>
                    Diễn đàn Đổi mới Sáng tạo & Phát triển Bền vững Quốc gia 2026: Đột phá chiến lược từ thể chế thử nghiệm số
                  </h3>

                  <div style={{
                    borderTop: "1px solid rgba(255,255,255,0.15)",
                    paddingTop: 16,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "13px"
                  }}>
                    <div>⚡ <strong>Doanh thu toàn hệ sinh thái tăng trưởng bứt phá Q3/2026</strong></div>
                    <div>⚡ <strong>Quỹ đầu tư Matrix Ventures rót thêm vốn cho dự án AI</strong></div>
                  </div>
                </div>

                {/* Right: Media Photo Grid + Featured Video Card */}
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {/* Photo Gallery Grid 4 Thumbs */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 12
                  }}>
                    {[
                      "photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80",
                      "photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
                      "photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
                      "photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
                    ].map((imgUrl, i) => (
                      <div key={i} style={{ height: 110, borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)" }}>
                        <img src={`https://images.unsplash.com/${imgUrl}`} alt="Gallery" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                    ))}
                  </div>

                  {/* Photo Featured News Card (Pure photo, no video play icon) */}
                  <div style={{
                    position: "relative",
                    borderRadius: 16,
                    overflow: "hidden",
                    height: 190,
                    backgroundImage: `linear-gradient(180deg, transparent 0%, rgba(5,7,15,0.88) 100%), url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: "1px solid rgba(255,255,255,0.15)",
                    padding: 16,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end"
                  }}>
                    <div>
                      <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, textTransform: "uppercase" }}>TIÊU ĐIỂM BÁO CHÍ</span>
                      <h4 style={{ color: "#ffffff", fontSize: "14px", fontWeight: 800, margin: "4px 0 0" }}>
                        Toàn cảnh ngày làm việc đầu tiên: 5 điểm nhấn chiến lược Matrix Holding
                      </h4>
                    </div>
                  </div>
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
                    Hoạt Động Sắp Tới 
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
                    Dành Riêng Cho Bạn - Đề Xuất Biên Tập
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

              {/* 4 Article Cards Grid (Exact Image 4 Row) */}
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
                      borderRadius: 20,
                      overflow: "hidden",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      boxShadow: "0 14px 40px rgba(0,0,0,0.5)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                    className="member-company-card"
                  >
                    <div>
                      <div style={{ height: 170, overflow: "hidden", position: "relative" }}>
                        <img src={imageUrl(story.image)} alt={story.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <span style={{ position: "absolute", top: 12, left: 12, background: "rgba(5,7,15,0.8)", color: "#38bdf8", fontSize: "10px", fontWeight: 800, padding: "3px 10px", borderRadius: 4 }}>
                          {story.category}
                        </span>
                      </div>

                      <div style={{ padding: "18px 18px 12px" }}>
                        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", display: "block", marginBottom: 6 }}>
                          {story.category} · {story.date}
                        </span>

                        <h3 style={{ color: "#ffffff", fontSize: "15px", fontWeight: 800, margin: "0 0 8px", lineHeight: 1.4 }}>
                          <Link to={`/news/${story.slug}`} style={{ color: "#ffffff", textDecoration: "none" }}>
                            {story.title}
                          </Link>
                        </h3>

                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", lineHeight: 1.55, margin: 0, textAlign: "justify" }}>
                          {story.excerpt}
                        </p>
                      </div>
                    </div>

                    <div style={{ padding: "12px 18px", borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)", fontSize: "11px" }}>
                      {story.author}
                    </div>
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
