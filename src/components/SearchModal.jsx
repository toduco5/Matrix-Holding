import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { NEWS_ITEMS } from "../data/news.js";
import { CAREER_JOBS } from "../data/careers.js";
import { ECOSYSTEM_UNITS } from "../data/ecosystem-units.js";
import { SECTORS } from "../data/constants.js";

export default function SearchModal({ isOpen, onClose }) {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Build master searchable index of everything on the website
  const searchIndex = [
    // 1. Core Pages
    {
      id: "page-home",
      type: "pages",
      title: lang === "vi" ? "Trang Chủ Matrix Holding" : "Matrix Holding Home",
      desc: lang === "vi" ? "Hệ sinh thái kết nối đầu tư & phát triển công nghệ tiên phong" : "Pioneering technology & investment ecosystem",
      url: "/",
      icon: "fa-solid fa-house",
      badge: lang === "vi" ? "Trang web" : "Page"
    },
    {
      id: "page-about",
      type: "pages",
      title: lang === "vi" ? "Về Tập Đoàn (Giới thiệu Matrix)" : "About Matrix Holding",
      desc: lang === "vi" ? "Tầm nhìn, sứ mệnh và cơ cấu lãnh đạo tập đoàn" : "Vision, mission and executive leadership structure",
      url: "/gioi-thieu",
      icon: "fa-solid fa-building-columns",
      badge: lang === "vi" ? "Trang web" : "Page"
    },
    {
      id: "page-ecosystem",
      type: "pages",
      title: lang === "vi" ? "Tổng quan 04 Hệ sinh thái" : "04 Member Ecosystems",
      desc: lang === "vi" ? "Tech & Cloud, Capital, FinTech, PropTech" : "Tech & Cloud, Capital, FinTech, PropTech Overview",
      url: "/sectors",
      icon: "fa-solid fa-cubes-stacked",
      badge: lang === "vi" ? "Trang web" : "Page"
    },
    {
      id: "page-news",
      type: "pages",
      title: lang === "vi" ? "Tin tức & Góc nhìn Thị trường" : "News & Market Insights",
      desc: lang === "vi" ? "Cập nhật báo cáo tài chính, sự kiện VIP & thông cáo báo chí" : "Financial reports, VIP events & press releases",
      url: "/news",
      icon: "fa-solid fa-newspaper",
      badge: lang === "vi" ? "Trang web" : "Page"
    },
    {
      id: "page-careers",
      type: "pages",
      title: lang === "vi" ? "Tuyển dụng & Cơ hội Nghề nghiệp" : "Careers & Talent Opportunities",
      desc: lang === "vi" ? "Gia nhập đội ngũ nhân sự xuất sắc tại Matrix Holding" : "Join the high-caliber team at Matrix Holding",
      url: "/tuyen-dung",
      icon: "fa-solid fa-briefcase",
      badge: lang === "vi" ? "Trang web" : "Page"
    },
    {
      id: "page-contact",
      type: "pages",
      title: lang === "vi" ? "Liên hệ & Hợp tác Đầu tư" : "Contact & Investment Inquiry",
      desc: lang === "vi" ? "Gửi thông tin tư vấn và kết nối trực tiếp với tập đoàn" : "Send investment inquiries and direct corporate connection",
      url: "/contact",
      icon: "fa-solid fa-envelope-open-text",
      badge: lang === "vi" ? "Trang web" : "Page"
    },
    {
      id: "page-community",
      type: "pages",
      title: lang === "vi" ? "Cộng đồng Nhà đầu tư VIP" : "VIP Investor Community",
      desc: lang === "vi" ? "Mạng lưới đối tác chiến lược và câu lạc bộ đầu tư" : "Strategic partner network and investment club",
      url: "/community",
      icon: "fa-solid fa-users",
      badge: lang === "vi" ? "Trang web" : "Page"
    },

    // 2. Ecosystem Units
    ...ECOSYSTEM_UNITS.map(unit => ({
      id: `unit-${unit.id}`,
      type: "ecosystem",
      title: unit.name,
      desc: `${unit.label} — ${unit.desc || "Đơn vị chiến lược trực thuộc tập đoàn Matrix"}`,
      url: `/ecosystem/${unit.id}`,
      icon: "fa-solid fa-layer-group",
      badge: lang === "vi" ? "Hệ sinh thái" : "Ecosystem"
    })),

    // 3. Priority Sectors
    ...SECTORS.map(sec => ({
      id: `sec-${sec.id}`,
      type: "ecosystem",
      title: sec.name,
      desc: sec.desc,
      url: `/ecosystem/${sec.slug}`,
      icon: "fa-solid fa-chart-line",
      badge: lang === "vi" ? "Lĩnh vực" : "Sector"
    })),

    // 4. News Articles
    ...NEWS_ITEMS.map(art => ({
      id: `art-${art.id}`,
      type: "news",
      title: art.title,
      desc: `${art.category || "Tin tức"} · ${art.excerpt || art.date || ""}`,
      url: `/news/${art.slug}`,
      icon: "fa-solid fa-file-lines",
      badge: lang === "vi" ? "Tin tức" : "News"
    })),

    // 5. Job Openings
    ...CAREER_JOBS.map(job => ({
      id: `job-${job.id}`,
      type: "careers",
      title: job.title,
      desc: `${job.department || "Nhân sự"} · ${job.location || "TP. Hồ Chí Minh"} (${job.type || "Full-time"})`,
      url: `/careers/${job.id}`,
      icon: "fa-solid fa-user-plus",
      badge: lang === "vi" ? "Tuyển dụng" : "Job"
    }))
  ];

  // Filter items based on active category and query string
  const filteredItems = searchIndex.filter(item => {
    const matchesCategory = activeCategory === "all" || item.type === activeCategory;
    if (!matchesCategory) return false;
    if (!query.trim()) return true;

    const q = query.toLowerCase().trim();
    return (
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q)
    );
  });

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Reset selected index when query or category changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, activeCategory]);

  // Keyboard Navigation inside Modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === "Enter" && filteredItems.length > 0) {
        e.preventDefault();
        const selected = filteredItems[selectedIndex];
        if (selected) {
          navigate(selected.url);
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, navigate, onClose]);

  if (!isOpen) return null;

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal-container" onClick={e => e.stopPropagation()}>
        {/* Header Search Input */}
        <div className="search-modal-header">
          <i className="fa-solid fa-magnifying-glass search-modal-icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder={t("search_placeholder")}
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button type="button" className="search-modal-clear" onClick={() => setQuery("")}>
              <i className="fa-solid fa-xmark" />
            </button>
          )}
          <span className="search-modal-esc">ESC</span>
        </div>

        {/* Category Filters */}
        <div className="search-modal-categories">
          {[
            { id: "all", label: t("category_all") },
            { id: "pages", label: t("category_pages") },
            { id: "news", label: t("category_news") },
            { id: "careers", label: t("category_careers") },
            { id: "ecosystem", label: t("category_ecosystem") },
          ].map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`search-cat-btn ${activeCategory === cat.id ? "is-active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="search-modal-results">
          {!query && (
            <div className="search-modal-subtitle">
              <span><i className="fa-solid fa-wand-magic-sparkles" /> {t("search_suggested")} ({filteredItems.length})</span>
            </div>
          )}

          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className={`search-result-item ${idx === selectedIndex ? "is-selected" : ""}`}
                onClick={() => {
                  navigate(item.url);
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="search-result-icon">
                  <i className={item.icon} />
                </div>
                <div className="search-result-content">
                  <div className="search-result-title">
                    <span>{item.title}</span>
                    <span className="search-result-badge">{item.badge}</span>
                  </div>
                  <div className="search-result-desc">{item.desc}</div>
                </div>
                <div className="search-result-arrow">
                  <i className="fa-solid fa-arrow-right" />
                </div>
              </div>
            ))
          ) : (
            <div className="search-no-results">
              <i className="fa-solid fa-folder-open" />
              <p>{t("search_no_results")} "{query}"</p>
              <small>{lang === "vi" ? "Thử từ khóa khác như 'Tuyển dụng', 'Tin tức', 'FinTech'..." : "Try another keyword like 'Careers', 'News', 'Capital'..."}</small>
            </div>
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="search-modal-footer">
          <span><i className="fa-solid fa-keyboard" /> {t("search_shortcut_hint")}</span>
        </div>
      </div>
    </div>
  );
}
