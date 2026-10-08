import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CAREER_DEPARTMENTS, CAREER_JOBS } from "../data/careers.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";
import PageBanner from "../components/PageBanner.jsx";

const FEATURED_COMPANIES = [
  { name: "Matrix Finance", logo: "🏛️", count: 5 },
  { name: "Matrix Legal", logo: "⚖️", count: 4 },
  { name: "Matrix Strategy", logo: "🎯", count: 4 },
  { name: "Matrix Accounting", logo: "📊", count: 3 },
  { name: "Matrix Research", logo: "🔬", count: 2 },
  { name: "Matrix Capital", logo: "💎", count: 6 }
];

const QUICK_INDUSTRY_PILLS = [
 
];

const FEATURED_BANNERS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85",
    sideImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    title: "MATRIX HOLDING - TUYỂN DỤNG TẬP TRUNG TOÀN QUỐC",
    subtitle: "Hội tụ Ứng viên chất - Doanh nghiệp hàng đầu | Gói đãi ngộ xứng tầm & Môi trường đẳng cấp",
    tag: "Tuyển dụng Cấp cao 2026",
    buttonText: "Ứng tuyển ngay",
    badge: "Hot Deal"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85",
    sideImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    title: "MATRIX FINANCE - CHUYÊN VIÊN TÀI CHÍNH & VỐN",
    subtitle: "Mức thu nhập hấp dẫn 30 - 50 triệu/tháng + Thưởng giao dịch M&A Tập đoàn",
    tag: "Tài chính & Đầu tư",
    buttonText: "Nộp hồ sơ ngay",
    badge: "Ưu tiên tuyển gấp"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85",
    sideImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    title: "MATRIX NETWORK - KỸ SƯ AI & INFRASTRUCTURE SENIOR",
    subtitle: "Xây dựng hạ tầng Cloud AI tập đoàn, thưởng dự án lên đến 100 triệu",
    tag: "Công nghệ & AI",
    buttonText: "Khám phá vị trí",
    badge: "Thu nhập khủng"
  }
];

const ITEMS_PER_PAGE = 6; // Display exactly 6 jobs per page (3 columns x 2 rows grid)

export default function Careers() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("Tất cả");
  const [locationFilter, setLocationFilter] = useState("Tất cả");
  
  // Banner Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto advance banner slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % FEATURED_BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Section filters & Pagination states
  const [urgentLoc, setUrgentLoc] = useState("Tất cả");
  const [pageUrgent, setPageUrgent] = useState(1);

  const [featuredTab, setFeaturedTab] = useState("Tất cả");
  const [pageFeatured, setPageFeatured] = useState(1);

  const [pageFast, setPageFast] = useState(1);

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [favoriteJobs, setFavoriteJobs] = useState([]);

  // Base search filtered jobs
  const searchedJobs = useMemo(() => {
    return CAREER_JOBS.filter(job => {
      const matchesQuery = `${job.title} ${job.unit} ${job.department} ${job.summary} ${job.location}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesDept = department === "Tất cả" || job.department === department;
      const matchesLoc = locationFilter === "Tất cả" || job.location.includes(locationFilter);
      return matchesQuery && matchesDept && matchesLoc;
    });
  }, [query, department, locationFilter]);

  // 1. Urgent Jobs list & pagination
  const urgentJobs = useMemo(() => {
    return searchedJobs.filter(job => job.urgent && (urgentLoc === "Tất cả" || job.location.includes(urgentLoc)));
  }, [searchedJobs, urgentLoc]);

  const totalPagesUrgent = Math.ceil(urgentJobs.length / ITEMS_PER_PAGE) || 1;
  const paginatedUrgentJobs = useMemo(() => {
    const start = (pageUrgent - 1) * ITEMS_PER_PAGE;
    return urgentJobs.slice(start, start + ITEMS_PER_PAGE);
  }, [urgentJobs, pageUrgent]);

  // 2. Featured Jobs (Việc làm nổi bật) with Management / Expert tabs
  const featuredJobs = useMemo(() => {
    return searchedJobs.filter(job => {
      if (featuredTab === "Việc quản lý") return job.category === "Quản lý";
      if (featuredTab === "Việc chuyên gia") return job.category === "Chuyên gia";
      return true;
    });
  }, [searchedJobs, featuredTab]);

  const totalPagesFeatured = Math.ceil(featuredJobs.length / ITEMS_PER_PAGE) || 1;
  const paginatedFeaturedJobs = useMemo(() => {
    const start = (pageFeatured - 1) * ITEMS_PER_PAGE;
    return featuredJobs.slice(start, start + ITEMS_PER_PAGE);
  }, [featuredJobs, pageFeatured]);

  // 3. Fast Start Jobs list & pagination
  const fastStartJobs = useMemo(() => {
    return searchedJobs.filter(job => job.fastStart);
  }, [searchedJobs]);

  const totalPagesFast = Math.ceil(fastStartJobs.length / ITEMS_PER_PAGE) || 1;
  const paginatedFastStartJobs = useMemo(() => {
    const start = (pageFast - 1) * ITEMS_PER_PAGE;
    return fastStartJobs.slice(start, start + ITEMS_PER_PAGE);
  }, [fastStartJobs, pageFast]);

  const toggleFavorite = (id) => {
    if (favoriteJobs.includes(id)) {
      setFavoriteJobs(favoriteJobs.filter(jId => jId !== id));
    } else {
      setFavoriteJobs([...favoriteJobs, id]);
    }
  };

  // Helper render for pagination controls
  const renderPagination = (currentPage, totalPages, setPageFn) => {
    if (totalPages <= 1) return null;
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        marginTop: 32
      }}>
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setPageFn(p => Math.max(1, p - 1))}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: currentPage === 1 ? "1px solid rgba(255,255,255,0.1)" : "1px solid #eab308",
            background: currentPage === 1 ? "rgba(255,255,255,0.03)" : "rgba(234, 179, 8, 0.15)",
            color: currentPage === 1 ? "rgba(255,255,255,0.25)" : "#eab308",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            display: "grid",
            placeItems: "center",
            fontSize: 13,
            transition: "all 0.2s ease"
          }}
          title="Trang trước"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>

        <span style={{
          fontSize: "13.5px",
          fontWeight: 700,
          color: "rgba(255,255,255,0.75)",
          padding: "4px 12px",
          borderRadius: "50px",
          background: "rgba(255,255,255,0.04)"
        }}>
          <strong style={{ color: "#eab308" }}>{currentPage}</strong> / {totalPages} trang
        </span>

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => setPageFn(p => Math.min(totalPages, p + 1))}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: currentPage === totalPages ? "1px solid rgba(255,255,255,0.1)" : "1px solid #eab308",
            background: currentPage === totalPages ? "rgba(255,255,255,0.03)" : "rgba(234, 179, 8, 0.15)",
            color: currentPage === totalPages ? "rgba(255,255,255,0.25)" : "#eab308",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            display: "grid",
            placeItems: "center",
            fontSize: 13,
            transition: "all 0.2s ease"
          }}
          title="Trang sau"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    );
  };

  const activeBanner = FEATURED_BANNERS[currentSlide];

  return (
    <>
      <PageMeta
        title="Tuyển dụng | Matrix Holding"
        description="Ứng viên chất - Doanh nghiệp hàng đầu. Hệ thống kết nối cơ hội nghề nghiệp đa dạng tại Matrix Holding."
      />
      <Header />

      <main style={{ background: "transparent", color: "#ffffff", fontFamily: "'Be Vietnam Pro', sans-serif", paddingBottom: 60 }}>
        {/* HERO BANNER SECTION WITH SEARCH BAR, PILLS & FEATURED SLIDER */}
        <PageBanner
          eyebrow="MATRIX HOLDING CAREERS"
          titlePrefix="Ứng viên chất -"
          titleHighlight="Doanh nghiệp hàng đầu"
          subtitle="Khám phá các vị trí tuyển dụng cấp cao, môi trường chuyên nghiệp"
        >
          {/* SEARCH BAR */}
          <div style={{
            maxWidth: 880,
            margin: "28px auto 0",
            background: "#ffffff",
            borderRadius: "50px",
            padding: "6px 8px 6px 24px",
            boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap"
          }}>
            {/* Field 1: Keyword Input */}
            <div style={{ flex: 1.2, minWidth: 220, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fa-solid fa-magnifying-glass" style={{ color: "#64748b", fontSize: 14 }} />
              <input
                type="text"
                value={query}
                onChange={e => { setQuery(e.target.value); setPageFeatured(1); setPageUrgent(1); setPageFast(1); }}
                placeholder="Nhập vị trí muốn ứng tuyển..."
                style={{
                  width: "100%",
                  border: "none",
                  background: "transparent",
                  color: "#0f172a",
                  fontSize: 14,
                  fontWeight: 600,
                  outline: "none"
                }}
              />
            </div>

            {/* Field 2: Department / Industry Select */}
            <div style={{ borderLeft: "1px solid #e2e8f0", paddingLeft: 14, flex: 1, minWidth: 160, display: "flex", alignItems: "center", gap: 8 }}>
              <select
                value={department}
                onChange={e => { setDepartment(e.target.value); setPageFeatured(1); setPageUrgent(1); setPageFast(1); }}
                style={{
                  width: "100%",
                  border: "none",
                  background: "transparent",
                  color: "#334155",
                  fontSize: 13.5,
                  fontWeight: 700,
                  outline: "none",
                  cursor: "pointer"
                }}
              >
                <option value="Tất cả">Ngành nghề (Tất cả)</option>
                {CAREER_DEPARTMENTS.filter(d => d !== "Tất cả").map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* Field 3: Location Select */}
            <div style={{ borderLeft: "1px solid #e2e8f0", paddingLeft: 14, flex: 0.9, minWidth: 140, display: "flex", alignItems: "center", gap: 8 }}>
              <select
                value={locationFilter}
                onChange={e => { setLocationFilter(e.target.value); setPageFeatured(1); setPageUrgent(1); setPageFast(1); }}
                style={{
                  width: "100%",
                  border: "none",
                  background: "transparent",
                  color: "#334155",
                  fontSize: 13.5,
                  fontWeight: 700,
                  outline: "none",
                  cursor: "pointer"
                }}
              >
                <option value="Tất cả">Địa điểm (Tất cả)</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="TP.HCM">TP.HCM</option>
                <option value="Bắc Ninh">Bắc Ninh</option>
              </select>
            </div>

            {/* Field 4: Purple Gradient Search Button */}
            <button
              type="button"
              onClick={() => { }}
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: "50px",
                padding: "12px 28px",
                fontWeight: 800,
                fontSize: 14,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 6px 18px rgba(79, 70, 229, 0.4)",
                whiteSpace: "nowrap"
              }}
            >
              <i className="fa-solid fa-magnifying-glass" />
              <span>Tìm việc</span>
            </button>
          </div>

          {/* QUICK INDUSTRY CAPSULE PILLS */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
            marginTop: 28,
            maxWidth: 1100,
            marginInline: "auto"
          }}>
            {QUICK_INDUSTRY_PILLS.map(item => {
              const isSelected = department === item.dept;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    setDepartment(isSelected ? "Tất cả" : item.dept);
                    setPageFeatured(1);
                    setPageUrgent(1);
                    setPageFast(1);
                  }}
                  style={{
                    background: isSelected ? "rgba(56, 189, 248, 0.22)" : "rgba(15, 23, 42, 0.75)",
                    border: isSelected ? "1px solid #38bdf8" : "1px solid rgba(255, 255, 255, 0.15)",
                    color: isSelected ? "#38bdf8" : "#ffffff",
                    borderRadius: "50px",
                    padding: "9px 20px",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    backdropFilter: "blur(10px)",
                    transition: "all 0.25s ease",
                    boxShadow: isSelected ? "0 4px 16px rgba(56, 189, 248, 0.25)" : "none"
                  }}
                >
                  <span style={{ fontSize: 15 }}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* FEATURED RECRUITMENT BANNER CAROUSEL */}
          <div style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.55)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            minHeight: 280,
            display: "flex",
            alignItems: "center",
            maxWidth: 1100,
            margin: "24px auto 0",
            textAlign: "left"
          }}>
            {/* Slide background image */}
            {activeBanner.image ? (
              <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${activeBanner.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.55)"
              }} />
            ) : (
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, #1e1b4b 0%, #311b92 50%, #4c1d95 100%)"
              }} />
            )}

            {/* Gradient Overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(5, 7, 15, 0.92) 0%, rgba(5, 7, 15, 0.65) 55%, rgba(5, 7, 15, 0.3) 100%)"
            }} />

            {/* Content Flex Layout */}
            <div style={{
              position: "relative",
              zIndex: 2,
              padding: "32px 52px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24
            }}>
              {/* Left Column */}
              <div style={{ flex: 1, maxWidth: 680 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{
                    background: "#ef4444",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 900,
                    padding: "3px 10px",
                    borderRadius: 4,
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}>
                    {activeBanner.badge}
                  </span>
                  <span style={{
                    color: "#38bdf8",
                    fontSize: "12px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 1.2
                  }}>
                    {activeBanner.tag}
                  </span>
                </div>

                <h2 style={{
                  color: "#ffffff",
                  fontSize: "26px",
                  fontWeight: 900,
                  margin: "0 0 10px",
                  lineHeight: 1.25,
                  textShadow: "0 4px 12px rgba(0,0,0,0.5)"
                }}>
                  {activeBanner.title}
                </h2>

                <p style={{
                  color: "rgba(255, 255, 255, 0.88)",
                  fontSize: "14px",
                  lineHeight: 1.55,
                  margin: "0 0 20px"
                }}>
                  {activeBanner.subtitle}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("featured-jobs-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                    color: "#ffffff",
                    fontWeight: 900,
                    fontSize: "13.5px",
                    border: "none",
                    borderRadius: "50px",
                    padding: "12px 28px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: "0 6px 20px rgba(239, 68, 68, 0.45)",
                    transition: "all 0.25s ease"
                  }}
                >
                  <span>{activeBanner.buttonText}</span>
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </div>

              {/* Right Column: Featured Image Card */}
              {activeBanner.sideImage && (
                <div style={{
                  width: 240,
                  height: 170,
                  borderRadius: 18,
                  overflow: "hidden",
                  flexShrink: 0,
                  boxShadow: "0 14px 35px rgba(0, 0, 0, 0.6)",
                  border: "2px solid rgba(255, 255, 255, 0.22)",
                  display: "block"
                }} className="banner-side-img-card">
                  <img
                    src={activeBanner.sideImage}
                    alt={activeBanner.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                </div>
              )}
            </div>

            {/* Prev / Next Slider Buttons */}
            <button
              type="button"
              onClick={() => setCurrentSlide(prev => (prev - 1 + FEATURED_BANNERS.length) % FEATURED_BANNERS.length)}
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                fontSize: 15,
                zIndex: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                transition: "all 0.25s ease"
              }}
              title="Slide trước"
            >
              <i className="fa-solid fa-chevron-left" />
            </button>

            <button
              type="button"
              onClick={() => setCurrentSlide(prev => (prev + 1) % FEATURED_BANNERS.length)}
              style={{
                position: "absolute",
                right: 14,
                top: "50%",
                transform: "translateY(-50%)",
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                fontSize: 15,
                zIndex: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                transition: "all 0.25s ease"
              }}
              title="Slide kế tiếp"
            >
              <i className="fa-solid fa-chevron-right" />
            </button>

            {/* Pagination Dots */}
            <div style={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              zIndex: 3
            }}>
              {FEATURED_BANNERS.map((banner, idx) => (
                <button
                  key={banner.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: currentSlide === idx ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: currentSlide === idx ? "#f59e0b" : "rgba(255,255,255,0.4)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                />
              ))}
            </div>
          </div>
        </PageBanner>

        <div className="container" style={{ maxWidth: 1180, marginTop: 44 }}>

          {/* SECTION 1: 🌟 VIỆC LÀM NỔI BẬT (IN DEDICATED GLASS CARD FRAME) */}
          <div id="featured-jobs-section" className="glass-frame-container" style={{
            padding: "36px 32px",
            marginBottom: 44
          }}>
            {/* Header & Tabs */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14, marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 24 }}>🌟</span>
                  <h2 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 800, margin: 0 }}>
                    Việc Làm Nổi Bật
                  </h2>
                </div>

                {/* Category Pills (Việc quản lý | Việc chuyên gia) */}
                <div style={{ display: "flex", gap: 8, background: "rgba(255,255,255,0.05)", padding: 4, borderRadius: "50px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  {[
                    { label: "Tất cả", val: "Tất cả" },
                    { label: "Việc quản lý", val: "Việc quản lý" },
                    { label: "Việc chuyên gia", val: "Việc chuyên gia" }
                  ].map(tab => {
                    const isActive = featuredTab === tab.val;
                    return (
                      <button
                        key={tab.val}
                        type="button"
                        onClick={() => { setFeaturedTab(tab.val); setPageFeatured(1); }}
                        style={{
                          padding: "6px 18px",
                          borderRadius: "50px",
                          border: "none",
                          background: isActive ? "linear-gradient(135deg, #b45309 0%, #78350f 100%)" : "transparent",
                          color: isActive ? "#fef08a" : "rgba(255,255,255,0.7)",
                          fontSize: "12.5px",
                          fontWeight: 800,
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                Hiển thị <strong>{paginatedFeaturedJobs.length}</strong> / <strong>{featuredJobs.length}</strong> việc làm
              </span>
            </div>

            {/* 3x2 Grid (Exact 6 cards per page) */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18
            }}>
              {paginatedFeaturedJobs.map(job => {
                const isFav = favoriteJobs.includes(job.id);
                return (
                  <div
                    key={job.id}
                    style={{
                      background: "rgba(18, 24, 38, 0.85)",
                      backdropFilter: "blur(12px)",
                      borderRadius: 18,
                      border: "1px solid rgba(234, 179, 8, 0.35)",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: 185,
                      transition: "all 0.25s ease",
                      position: "relative"
                    }}
                    className="member-company-card"
                  >
                    <div>
                      {/* Top Row: Logo + Job Title + Heart */}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
                        <div style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: "#ffffff",
                          display: "grid",
                          placeItems: "center",
                          fontSize: 20,
                          flexShrink: 0
                        }}>
                          {job.logo}
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <Link
                            to={`/careers/${job.id}`}
                            style={{
                              color: "#ffffff",
                              fontSize: "14.5px",
                              fontWeight: 800,
                              margin: "0 0 4px",
                              lineHeight: 1.35,
                              textDecoration: "none",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden"
                            }}
                          >
                            {job.title}
                          </Link>
                          <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "12px", display: "block" }}>
                            {job.unit}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleFavorite(job.id)}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: isFav ? "#ef4444" : "rgba(255,255,255,0.3)",
                            fontSize: 16,
                            cursor: "pointer"
                          }}
                        >
                          <i className={`fa-${isFav ? "solid" : "regular"} fa-heart`} />
                        </button>
                      </div>

                      {/* Tags */}
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                        <span style={{
                          background: "rgba(234, 179, 8, 0.15)",
                          color: "#fde047",
                          border: "1px solid rgba(234, 179, 8, 0.3)",
                          fontSize: "11.5px",
                          fontWeight: 700,
                          padding: "3px 10px",
                          borderRadius: "50px"
                        }}>
                          {job.salary}
                        </span>
                        <span style={{
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "11.5px",
                          padding: "3px 10px",
                          borderRadius: "50px"
                        }}>
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                      fontSize: "12px"
                    }}>
                      <span style={{ color: "rgba(255,255,255,0.5)" }}>{job.type}</span>
                      <Link
                        to={`/careers/${job.id}`}
                        style={{ color: "#38bdf8", fontWeight: 700, textDecoration: "none" }}
                      >
                        Ứng tuyển ngay →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {renderPagination(pageFeatured, totalPagesFeatured, setPageFeatured)}
          </div>

          {/* SECTION 2: 🔥 VIỆC LÀM TUYỂN GẤP (IN DEDICATED GLASS CARD FRAME) */}
          <div className="glass-frame-container" style={{
            padding: "36px 32px",
            marginBottom: 44
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14, marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 24 }}>🔥</span>
                <h2 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 800, margin: 0 }}>
                  Việc Làm Tuyển Gấp
                </h2>
              </div>

              {/* Location filter pills */}
              <div style={{ display: "flex", gap: 8 }}>
                {["Tất cả", "Hà Nội", "TP.HCM"].map(loc => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => { setUrgentLoc(loc); setPageUrgent(1); }}
                    style={{
                      padding: "6px 16px",
                      borderRadius: "50px",
                      border: urgentLoc === loc ? "1px solid #38bdf8" : "1px solid rgba(255,255,255,0.12)",
                      background: urgentLoc === loc ? "rgba(56, 189, 248, 0.2)" : "rgba(255,255,255,0.04)",
                      color: urgentLoc === loc ? "#ffffff" : "rgba(255,255,255,0.7)",
                      fontSize: "12.5px",
                      fontWeight: 700,
                      cursor: "pointer"
                    }}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* 3x2 Grid (6 Urgent Job Cards per page) */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18
            }}>
              {paginatedUrgentJobs.map(job => {
                const isFav = favoriteJobs.includes(job.id);
                return (
                  <div
                    key={job.id}
                    style={{
                      background: "rgba(18, 24, 38, 0.85)",
                      backdropFilter: "blur(12px)",
                      borderRadius: 18,
                      border: "1px solid rgba(56, 189, 248, 0.35)",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: 195,
                      height: "100%",
                      transition: "all 0.25s ease",
                      position: "relative"
                    }}
                    className="member-company-card"
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
                        <div style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: "#ffffff",
                          display: "grid",
                          placeItems: "center",
                          fontSize: 20,
                          flexShrink: 0
                        }}>
                          {job.logo}
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <Link
                            to={`/careers/${job.id}`}
                            style={{
                              color: "#ffffff",
                              fontSize: "14.5px",
                              fontWeight: 800,
                              margin: "0 0 4px",
                              lineHeight: 1.35,
                              textDecoration: "none",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden"
                            }}
                          >
                            {job.title}
                          </Link>
                          <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "12px", display: "block" }}>
                            {job.unit}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleFavorite(job.id)}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: isFav ? "#ef4444" : "rgba(255,255,255,0.3)",
                            fontSize: 16,
                            cursor: "pointer"
                          }}
                        >
                          <i className={`fa-${isFav ? "solid" : "regular"} fa-heart`} />
                        </button>
                      </div>

                      <div style={{ marginBottom: 14 }}>
                        <span style={{
                          background: "rgba(56, 189, 248, 0.14)",
                          color: "#38bdf8",
                          border: "1px solid rgba(56, 189, 248, 0.35)",
                          fontSize: "12px",
                          fontWeight: 800,
                          padding: "4px 12px",
                          borderRadius: "50px"
                        }}>
                          💰 {job.salary}
                        </span>
                      </div>
                    </div>

                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 12,
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.6)"
                    }}>
                      <span><i className="fa-solid fa-location-dot" style={{ color: "#38bdf8", marginRight: 4 }} />{job.location}</span>
                      <span style={{ color: "#f59e0b", fontWeight: 700 }}>⏱️ Còn {job.daysLeft} ngày</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {renderPagination(pageUrgent, totalPagesUrgent, setPageUrgent)}
          </div>

          {/* SECTION 3: ⚡ VIỆC ĐI LÀM NGAY (IN DEDICATED GLASS CARD FRAME) */}
          <div className="glass-frame-container" style={{
            padding: "36px 32px",
            marginBottom: 44
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 24 }}>⚡</span>
                <h2 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 800, margin: 0 }}>
                  Việc Đi Làm Ngay
                </h2>
              </div>
            </div>

            {/* 3x2 Grid (6 Fast Start Jobs per page) */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18
            }}>
              {paginatedFastStartJobs.map(job => (
                <div
                  key={job.id}
                  style={{
                    background: "rgba(18, 24, 38, 0.85)",
                    backdropFilter: "blur(12px)",
                    borderRadius: 18,
                    border: "1px solid rgba(16, 185, 129, 0.35)",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 195,
                    height: "100%",
                    transition: "all 0.25s ease"
                  }}
                  className="member-company-card"
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
                      <div style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "#ffffff",
                        display: "grid",
                        placeItems: "center",
                        fontSize: 20,
                        flexShrink: 0
                      }}>
                        {job.logo}
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <Link
                          to={`/careers/${job.id}`}
                          style={{
                            color: "#ffffff",
                            fontSize: "14.5px",
                            fontWeight: 800,
                            margin: "0 0 4px",
                            lineHeight: 1.35,
                            textDecoration: "none",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                          }}
                        >
                          {job.title}
                        </Link>
                        <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "12px", display: "block" }}>
                          {job.unit}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                      <span style={{
                        background: "rgba(56, 189, 248, 0.14)",
                        color: "#38bdf8",
                        border: "1px solid rgba(56, 189, 248, 0.35)",
                        fontSize: "12px",
                        fontWeight: 800,
                        padding: "4px 12px",
                        borderRadius: "50px"
                      }}>
                        💰 {job.salary}
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                      <span style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10b981", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: 4 }}>
                        {job.respondTime}
                      </span>
                      <span style={{ background: "rgba(255, 255, 255, 0.08)", color: "rgba(255,255,255,0.8)", fontSize: "11px", padding: "3px 10px", borderRadius: 4 }}>
                        Không cần CV phức tạp
                      </span>
                    </div>
                  </div>

                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 12,
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.6)"
                  }}>
                    <span><i className="fa-solid fa-location-dot" style={{ color: "#38bdf8", marginRight: 4 }} />{job.location}</span>
                    <span style={{ color: "#f59e0b", fontWeight: 700 }}>⏱️ Còn {job.daysLeft} ngày</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {renderPagination(pageFast, totalPagesFast, setPageFast)}
          </div>

          {/* SECTION 4: 🎗️ CÔNG TY NỔI BẬT (1 HORIZONTAL ROW MATCHING REFERENCE IMAGE) */}
          <div className="glass-frame-container" style={{
            padding: "32px 30px",
            marginBottom: 44
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>🎗️</span>
                <h2 style={{ color: "#ffffff", fontSize: "21px", fontWeight: 800, margin: 0 }}>
                  Công ty nổi bật
                </h2>
              </div>
              <a
                href="#featured-jobs-section"
                style={{
                  color: "#38bdf8",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "opacity 0.2s"
                }}
              >
                <span>Xem thêm</span>
                <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
            </div>

            {/* Exactly 1 Single Horizontal Row of 6 Company Cards */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 14
            }}>
              {FEATURED_COMPANIES.map(company => (
                <div
                  key={company.name}
                  style={{
                    background: "rgba(18, 24, 38, 0.85)",
                    borderRadius: 18,
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    padding: "20px 16px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    transition: "all 0.25s ease"
                  }}
                  className="member-company-card"
                >
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "#ffffff",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 24,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.15)"
                  }}>
                    {company.logo}
                  </div>
                  <div>
                    <h4 style={{ color: "#ffffff", fontSize: "13.5px", fontWeight: 800, margin: "0 0 4px" }}>
                      {company.name}
                    </h4>
                    <span style={{ color: "#38bdf8", fontSize: "11.5px", fontWeight: 700 }}>
                      💼 {company.count} vị trí đang tuyển
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5: 🤖 KHÁM PHÁ CƠ HỘI DÀNH RIÊNG CHO BẠN (IN DEDICATED GLASS CARD FRAME) */}
          <div className="glass-frame-container" style={{
            padding: "36px 32px"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: 24 }}>🤖</span>
              <h2 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 800, margin: 0 }}>
                Khám Phá Cơ Hội Dành Riêng Cho Bạn
              </h2>
            </div>

            {/* 4 Color Discovery Cards */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 18
            }}>
              {[
                {
                  title: "+10 việc làm có lương hấp dẫn nhất",
                  desc: "Danh sách việc làm có mức lương tốt, phù hợp với năng lực!",
                  bg: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 78, 59, 0.6) 100%)",
                  border: "rgba(16, 185, 129, 0.4)",
                  icon: "💸"
                },
                {
                  title: "+10 việc làm gần bạn nhất",
                  desc: "Danh sách việc làm tại địa điểm quan tâm, thuận tiện di chuyển!",
                  bg: "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(88, 28, 135, 0.6) 100%)",
                  border: "rgba(168, 85, 247, 0.4)",
                  icon: "🛵"
                },
                {
                  title: "+10 việc làm liên quan vị trí quan tâm",
                  desc: "Chọn vị trí công việc bạn muốn và hệ thống sẽ gợi ý việc làm phù hợp!",
                  bg: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(30, 58, 138, 0.6) 100%)",
                  border: "rgba(59, 130, 246, 0.4)",
                  icon: "🚀"
                },
                {
                  title: "+10 việc làm có tỷ lệ phản hồi tốt nhất",
                  desc: "Xem danh sách việc làm và sẵn sàng ứng tuyển ngay!",
                  bg: "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(131, 24, 67, 0.6) 100%)",
                  border: "rgba(236, 72, 153, 0.4)",
                  icon: "⚡"
                }
              ].map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    background: card.bg,
                    border: `1px solid ${card.border}`,
                    borderRadius: 20,
                    padding: "24px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 200,
                    backdropFilter: "blur(10px)"
                  }}
                >
                  <div>
                    <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{card.icon}</span>
                    <h4 style={{ color: "#ffffff", fontSize: "15px", fontWeight: 800, margin: "0 0 8px", lineHeight: 1.35 }}>
                      {card.title}
                    </h4>
                    <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "12px", lineHeight: 1.5, margin: 0 }}>
                      {card.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    style={{
                      background: "#ffffff",
                      color: "#0f172a",
                      fontWeight: 800,
                      fontSize: "12px",
                      border: "none",
                      borderRadius: "50px",
                      padding: "8px 18px",
                      cursor: "pointer",
                      marginTop: 18,
                      alignSelf: "flex-start",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6
                    }}
                  >
                    Xem việc làm <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
