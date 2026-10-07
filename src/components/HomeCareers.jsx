import { useState } from "react";
import { Link } from "react-router-dom";

const ECOSYSTEM_CATEGORIES = [
  "Tất cả",
  "Pháp lý",
  "Tài chính",
  "Vận hành",
  "Nhân sự",
  "Kinh doanh",
  "Truyền thông",
  "Công nghệ"
];

const MEMBER_COMPANIES = [
  {
    id: "network",
    name: "MATRIX NETWORK",
    desc: "Dịch vụ doanh nghiệp",
    subDesc: "Cung cấp hạ tầng vận hành và giải pháp quản trị doanh nghiệp toàn diện.",
    jobsCount: 1,
    categories: ["Vận hành", "Kinh doanh"],
    slug: "network"
  },
  {
    id: "connect",
    name: "MATRIX CONNECT",
    desc: "Kết nối doanh nghiệp",
    subDesc: "Mạng lưới kết nối đối tác, mở rộng cơ hội thương mại & hợp tác chiến lược.",
    jobsCount: 1,
    categories: ["Kinh doanh", "Truyền thông"],
    slug: "connect"
  },
  {
    id: "ventures",
    name: "MATRIX VENTURES",
    desc: "Đầu tư và đổi mới",
    subDesc: "Ươm tạo dự án đổi mới sáng tạo và tối ưu danh mục đầu tư tăng trưởng.",
    jobsCount: 1,
    categories: ["Tài chính", "Công nghệ"],
    slug: "ventures"
  },
  {
    id: "strategy",
    name: "MATRIX STRATEGY",
    desc: "Tư vấn chiến lược",
    subDesc: "Hoạch định chiến lược tái cấu trúc và định hướng phát triển bền vững.",
    jobsCount: 1,
    categories: ["Chiến lược", "Pháp lý"],
    slug: "strategy"
  },
  {
    id: "research",
    name: "MATRIX RESEARCH",
    desc: "Nghiên cứu & phát triển",
    subDesc: "Nghiên cứu thị trường, xu hướng công nghệ và mô hình kinh doanh mới.",
    jobsCount: 1,
    categories: ["Công nghệ", "Chiến lược"],
    slug: "research"
  },
  {
    id: "legal",
    name: "MATRIX LEGAL",
    desc: "Tư vấn pháp lý",
    subDesc: "Đảm bảo tuân thủ pháp lý, quản trị rủi ro và tư vấn giao dịch M&A.",
    jobsCount: 1,
    categories: ["Pháp lý"],
    slug: "legal"
  },
  {
    id: "finance",
    name: "MATRIX FINANCE",
    desc: "Quản lý tài chính",
    subDesc: "Hoạch định cấu trúc vốn, quản trị dòng tiền và tối ưu nguồn lực tài chính.",
    jobsCount: 1,
    categories: ["Tài chính"],
    slug: "finance"
  },
  {
    id: "accounting",
    name: "MATRIX ACCOUNTING",
    desc: "Kế toán & kiểm toán",
    subDesc: "Cung cấp giải pháp báo cáo tài chính minh bạch và kiểm soát rủi ro.",
    jobsCount: 1,
    categories: ["Tài chính", "Vận hành"],
    slug: "accounting"
  }
];

export default function HomeCareers() {
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [isFollowing, setIsFollowing] = useState(false);

  const filteredCompanies = MEMBER_COMPANIES.filter(comp => {
    if (activeTab === "Tất cả") return true;
    return comp.categories.includes(activeTab);
  });

  return (
    <section className="section ecosystem-hiring-section" style={{ padding: "80px 0", background: "var(--navy, #05070f)" }}>
      <div className="container">
        {/* Section Header (Centered) */}
        <div className="section-heading" style={{ maxWidth: 840, margin: "0 auto 36px", textAlign: "center" }}>
          <span style={{
            display: "inline-block",
            color: "#38bdf8",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 12
          }}>
            DOANH NGHIỆP TUYỂN DỤNG
          </span>
          <h2 style={{
            color: "#ffffff",
            fontSize: "clamp(28px, 3.6vw, 42px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: "0 0 12px",
            fontFamily: "'Be Vietnam Pro', sans-serif"
          }}>
            DOANH NGHIỆP TRONG HỆ SINH THÁI
          </h2>
          <p style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "15px",
            margin: "0 auto",
            maxWidth: 500,
            lineHeight: 1.6
          }}>
            Khám phá các doanh nghiệp đang tuyển dụng  Matrix.
          </p>
        </div>

        {/* Outer Container Card */}
        <div style={{
          background: "rgba(15, 23, 42, 0.75)",
          borderRadius: 20,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
          overflow: "hidden",
          backdropFilter: "blur(12px)"
        }}>
          {/* Top Skyscraper Banner Header */}
          <div style={{
            position: "relative",
            height: 120,
            backgroundImage: `linear-gradient(90deg, rgba(5,7,15,0.92) 0%, rgba(10,24,48,0.75) 50%, rgba(5,7,15,0.92) 100%), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 32px",
            borderBottom: "1px solid rgba(255,255,255,0.08)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#2997ff",
                boxShadow: "0 0 10px #2997ff"
              }} />
              <span style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase"
              }}>
                HỆ THỐNG TUYỂN DỤNG HỢP NHẤT
              </span>
            </div>
            <img
              src="/assets/matrix-holding-logo.png"
              alt="Matrix Holding"
              style={{ height: 36, opacity: 0.9 }}
            />
          </div>

          {/* Filter Pills Bar */}
          <div style={{
            padding: "20px 28px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            background: "rgba(0,0,0,0.2)"
          }}>
            {ECOSYSTEM_CATEGORIES.map(category => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveTab(category)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "50px",
                    border: isActive ? "1px solid #2997ff" : "1px solid rgba(255,255,255,0.12)",
                    background: isActive ? "linear-gradient(135deg, #2997ff 0%, #1d4ed8 100%)" : "rgba(255,255,255,0.04)",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.75)",
                    fontSize: "13px",
                    fontWeight: isActive ? 700 : 500,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    boxShadow: isActive ? "0 0 18px rgba(41,151,255,0.4)" : "none"
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Main Grid Content */}
          <div style={{ padding: "28px", display: "grid", gridTemplateColumns: "320px 1fr", gap: 24 }}>

            {/* Left Featured Holding Card */}
            <div style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              backgroundImage: `linear-gradient(180deg, rgba(5,7,15,0.88) 0%, rgba(10,26,50,0.96) 100%), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "40px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              gap: 16,
              boxShadow: "0 15px 35px rgba(0,0,0,0.4)"
            }}>
              {/* White Square Logo Container (Image 1 style) */}
              <div style={{
                width: 76,
                height: 76,
                borderRadius: 16,
                background: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                display: "grid",
                placeItems: "center",
                margin: "0 auto",
                padding: 8
              }}>
                <img
                  src="/assets/matrix-holding-logo.png"
                  alt="Matrix Holding"
                  style={{ height: 42, width: "auto", objectFit: "contain" }}
                />
              </div>

              {/* Company Info Header */}
              <div style={{ maxWidth: 260 }}>
                {/* Company Name (Centered) */}
                <h3 style={{
                  color: "#ffffff",
                  fontSize: "16.5px",
                  fontWeight: 800,
                  letterSpacing: "0.01em",
                  margin: "0 0 8px",
                  lineHeight: 1.35,
                  fontFamily: "'Be Vietnam Pro', sans-serif"
                }}>
                  CÔNG TY TNHH MATRIX HOLDING
                </h3>

                {/* Subtitle / Category (Centered) */}
                <p style={{
                  color: "rgba(255, 255, 255, 0.75)",
                  fontSize: "12.5px",
                  lineHeight: 1.55,
                  margin: 0
                }}>
                  Công ty trung tâm quản trị, kết nối và phát triển toàn bộ hệ sinh thái Matrix Holding.
                </p>
              </div>

              {/* Stacked Badges & Buttons (Image 1 vertical flow: Job count -> Pro Company -> Follow button) */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                width: "100%",
                maxWidth: 220,
                marginTop: 4
              }}>
                {/* Dark Capsule Job Count with Briefcase Icon */}
                <div style={{
                  background: "rgba(0, 0, 0, 0.55)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  color: "#ffffff",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  padding: "8px 24px",
                  borderRadius: "50px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  backdropFilter: "blur(6px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)"
                }}>
                  <i className="fa-solid fa-briefcase" style={{ fontSize: 12, opacity: 0.9 }} />
                  <span>5 việc làm</span>
                </div>

                {/* Champagne Gold Pro Company Badge */}
                <span style={{
                  background: "linear-gradient(135deg, #ffde8a 0%, #f5ab35 50%, #e08b18 100%)",
                  color: "#4a1d05",
                  fontSize: "12.5px",
                  fontWeight: 800,
                  padding: "8px 24px",
                  borderRadius: "50px",
                  letterSpacing: "0.02em",
                  boxShadow: "0 4px 16px rgba(245, 171, 53, 0.35)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  fontFamily: "'Be Vietnam Pro', sans-serif"
                }}>
                  Pro Company
                </span>

                {/* White Follow Pill Button (+ Theo dõi) */}
                <button
                  type="button"
                  onClick={() => setIsFollowing(!isFollowing)}
                  style={{
                    background: isFollowing ? "rgba(16, 185, 129, 0.18)" : "#ffffff",
                    color: isFollowing ? "#10b981" : "#0f172a",
                    border: isFollowing ? "1px solid #10b981" : "1px solid #ffffff",
                    fontWeight: 800,
                    fontSize: "13px",
                    borderRadius: "50px",
                    padding: "10px 24px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    transition: "all 0.25s ease",
                    width: "100%",
                    boxShadow: isFollowing ? "0 0 16px rgba(16,185,129,0.35)" : "0 4px 16px rgba(255,255,255,0.2)"
                  }}
                >
                  {isFollowing ? (
                    <>
                      <i className="fa-solid fa-check" style={{ fontSize: 12 }} /> Đã theo dõi
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-plus" style={{ fontSize: 12 }} /> Theo dõi
                    </>
                  )}
                </button>
              </div>

              {/* Secondary Link */}
              <Link
                to="/tuyen-dung"
                style={{
                  color: "rgba(255, 255, 255, 0.75)",
                  fontSize: "12px",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 4,
                  transition: "color 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#38bdf8"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)"}
              >
                Khám phá việc làm <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
              </Link>
            </div>

            {/* Right Member Com
            panies Cards (2x4 Grid matching reference design) */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16
            }}>
              {filteredCompanies.map(company => (
                <Link
                  key={company.id}
                  to="/tuyen-dung"
                  className="member-company-card"
                  style={{
                    position: "relative",
                    borderRadius: 16,
                    padding: "20px 22px",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 145,
                    transition: "all 0.3s ease"
                  }}
                >
                  {/* Top Row: White Square Logo + Info */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    {/* White Square Logo Container */}
                    <div style={{
                      width: 54,
                      height: 54,
                      borderRadius: 12,
                      background: "#ffffff",
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.18)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                      padding: 5
                    }}>
                      <img
                        src="/assets/matrix-holding-logo.png"
                        alt={company.name}
                        style={{ height: 28, width: "auto", objectFit: "contain" }}
                      />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4 className="member-company-title" style={{
                        fontSize: "13.5px",
                        fontWeight: 800,
                        letterSpacing: "0.02em",
                        margin: "0 0 3px 0",
                        lineHeight: 1.35,
                        fontFamily: "'Be Vietnam Pro', sans-serif"
                      }}>
                        {company.name}
                      </h4>
                      <p className="member-company-desc" style={{
                        fontSize: "11.5px",
                        color: "#38bdf8",
                        fontWeight: 700,
                        margin: "0 0 4px 0"
                      }}>
                        {company.desc}
                      </p>
                      {company.subDesc && (
                        <p className="member-company-subdesc" style={{
                          fontSize: "11px",
                          margin: 0,
                          lineHeight: 1.45,
                          textAlign: "justify"
                        }}>
                          {company.subDesc}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bottom Row: Briefcase Icon + Job Count & Arrow */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 14,
                    paddingTop: 12,
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)"
                  }}>
                    <div className="member-company-jobs" style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      fontSize: "12.5px",
                      fontWeight: 700
                    }}>
                      <i className="fa-solid fa-briefcase" style={{ fontSize: 13 }} />
                      <span>{company.jobsCount} việc làm</span>
                    </div>

                    <span className="member-company-arrow" style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "rgba(56, 189, 248, 0.12)",
                      color: "#38bdf8",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 10
                    }}>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Footer bar */}
          <div style={{
            padding: "16px 28px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(0,0,0,0.3)"
          }}>
            <p style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "12px",
              margin: 0
            }}>
              Các tin tuyển dụng được cập nhật trực tiếp từ hệ thống tuyển dụng.
            </p>

            <Link
              to="/tuyen-dung"
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
              Khám phá tất cả <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
