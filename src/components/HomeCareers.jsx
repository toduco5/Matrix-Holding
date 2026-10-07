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
    jobsCount: 1,
    categories: ["Vận hành", "Kinh doanh"],
    slug: "network"
  },
  {
    id: "connect",
    name: "MATRIX CONNECT",
    desc: "Kết nối doanh nghiệp",
    jobsCount: 1,
    categories: ["Kinh doanh", "Truyền thông"],
    slug: "connect"
  },
  {
    id: "ventures",
    name: "MATRIX VENTURES",
    desc: "Đầu tư và đổi mới",
    jobsCount: 1,
    categories: ["Tài chính", "Công nghệ"],
    slug: "ventures"
  },
  {
    id: "strategy",
    name: "MATRIX STRATEGY",
    desc: "Chiến lược",
    jobsCount: 1,
    categories: ["Chiến lược", "Pháp lý"],
    slug: "strategy"
  },
  {
    id: "research",
    name: "MATRIX RESEARCH",
    desc: "Nghiên cứu",
    jobsCount: 1,
    categories: ["Công nghệ", "Chiến lược"],
    slug: "research"
  },
  {
    id: "legal",
    name: "MATRIX LEGAL",
    desc: "Pháp lý",
    jobsCount: 1,
    categories: ["Pháp lý"],
    slug: "legal"
  },
  {
    id: "finance",
    name: "MATRIX FINANCE",
    desc: "Tài chính",
    jobsCount: 1,
    categories: ["Tài chính"],
    slug: "finance"
  },
  {
    id: "accounting",
    name: "MATRIX ACCOUNTING",
    desc: "Kế toán",
    jobsCount: 1,
    categories: ["Tài chính", "Vận hành"],
    slug: "accounting"
  }
];

export default function HomeCareers() {
  const [activeTab, setActiveTab] = useState("Tất cả");

  const filteredCompanies = MEMBER_COMPANIES.filter(comp => {
    if (activeTab === "Tất cả") return true;
    return comp.categories.includes(activeTab);
  });

  return (
    <section className="section ecosystem-hiring-section" style={{ padding: "80px 0", background: "var(--navy, #05070f)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-heading" style={{ maxWidth: 840, marginBottom: 36 }}>
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
            CÁC DOANH NGHIỆP TRONG HỆ SINH THÁI
          </h2>
          <p style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "15px",
            margin: 0,
            lineHeight: 1.6
          }}>
            Khám phá các doanh nghiệp đang tuyển dụng trong hệ sinh thái Matrix.
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
              padding: "36px 24px 28px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-between",
              boxShadow: "0 15px 35px rgba(0,0,0,0.4)"
            }}>
              <div>
                {/* Logo Square */}
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: 16,
                  background: "rgba(0,0,0,0.75)",
                  border: "2px solid rgba(41,151,255,0.4)",
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto 20px",
                  boxShadow: "0 0 25px rgba(41,151,255,0.25)"
                }}>
                  <img
                    src="/assets/matrix-holding-logo.png"
                    alt="Matrix Holding"
                    style={{ height: 50, width: "auto" }}
                  />
                </div>

                <h3 style={{
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: 800,
                  letterSpacing: "0.02em",
                  margin: "0 0 12px",
                  lineHeight: 1.35
                }}>
                  CÔNG TY TNHH MATRIX HOLDING
                </h3>

                <p style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "12px",
                  lineHeight: 1.6,
                  margin: "0 0 22px"
                }}>
                  Công ty trung tâm quản trị, kết nối và phát triển toàn bộ hệ sinh thái Matrix Holding.
                </p>

                {/* Badges */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginBottom: 24 }}>
                  <span style={{
                    background: "rgba(41, 151, 255, 0.16)",
                    border: "1px solid rgba(56, 189, 248, 0.45)",
                    color: "#38bdf8",
                    fontSize: "12px",
                    fontWeight: 800,
                    padding: "6px 18px",
                    borderRadius: "50px",
                    display: "inline-flex",
                    alignItems: "center",
                    boxShadow: "0 0 16px rgba(56, 189, 248, 0.25)"
                  }}>
                    5 việc làm
                  </span>

                  <span style={{
                    background: "linear-gradient(135deg, #ffde8a 0%, #f5ab35 50%, #e08b18 100%)",
                    color: "#4a1d05",
                    fontSize: "12px",
                    fontWeight: 800,
                    padding: "6px 20px",
                    borderRadius: "50px",
                    letterSpacing: "0.02em",
                    boxShadow: "0 4px 14px rgba(245, 171, 53, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    display: "inline-block",
                    fontFamily: "'Be Vietnam Pro', sans-serif"
                  }}>
                    Pro Company
                  </span>
                </div>
              </div>

              {/* Action Link Button */}
              <Link
                to="/tuyen-dung"
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  fontWeight: 800,
                  fontSize: "12px",
                  borderRadius: "50px",
                  padding: "12px 24px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: "0 0 20px rgba(255,255,255,0.25)",
                  transition: "all 0.25s ease",
                  width: "100%",
                  justifyContent: "center"
                }}
              >
                Khám phá việc làm <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
              </Link>
            </div>

            {/* Right Member Companies Cards (2x4 Grid) */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16
            }}>
              {filteredCompanies.map(company => (
                <Link
                  key={company.id}
                  to="/tuyen-dung"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 14,
                    padding: "18px 20px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    transition: "all 0.3s ease"
                  }}
                  className="member-company-card"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    {/* Small Square Logo */}
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "rgba(0,0,0,0.6)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0
                    }}>
                      <img
                        src="/assets/matrix-holding-logo.png"
                        alt={company.name}
                        style={{ height: 26, width: "auto" }}
                      />
                    </div>

                    <div>
                      <h4 style={{
                        color: "#ffffff",
                        fontSize: "13px",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                        margin: "0 0 3px",
                        fontFamily: "'Be Vietnam Pro', sans-serif"
                      }}>
                        {company.name}
                      </h4>
                      <p style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "11px",
                        margin: "0 0 6px"
                      }}>
                        {company.desc}
                      </p>
                      <span style={{
                        background: "rgba(41, 151, 255, 0.12)",
                        border: "1px solid rgba(56, 189, 248, 0.35)",
                        color: "#38bdf8",
                        fontSize: "10px",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: "50px",
                        display: "inline-flex",
                        alignItems: "center"
                      }}>
                        {company.jobsCount} việc làm
                      </span>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <span style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                    color: "#2997ff",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                    fontSize: 11
                  }}>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
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
