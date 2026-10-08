import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SECTORS } from "../data/constants.js";
import { ECOSYSTEM_UNITS } from "../data/ecosystem-units.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import SearchModal from "./SearchModal.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");
  const { lang, setLanguage, t } = useLanguage();
  const location = useLocation();

  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const settingsRef = useRef(null);

  const close = () => { 
    setOpen(false); 
    dropdownRef.current?.removeAttribute("open");
    setIsSettingsOpen(false);
  };

  const setThemeMode = (mode) => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem("matrix-theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const outside = event => { 
      if (headerRef.current && !headerRef.current.contains(event.target)) close(); 
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);

  // Global CMD+K / CTRL+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isEcosystemActive = location.pathname.startsWith("/ecosystem") || location.pathname.startsWith("/sectors");

  return (
    <>
      <header 
        ref={headerRef} 
        className={`header ${scrolled ? "is-scrolled" : "is-transparent"}`} 
        onKeyDown={event => { if (event.key === "Escape") close(); }}
      >
        <div className="header-inner container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo with M Icon + Divider + Matrix Holding Title */}
          <Link className="header-logo" to="/" onClick={close} aria-label="Trang chủ Matrix Holding">
            <img 
              src="/assets/matrix-holding-logo.png" 
              alt="Matrix Holding" 
              className="header-logo-img"
              style={{ 
                height: 32, 
                width: "auto",
                display: "block" 
              }} 
            />
            <span className="header-logo-divider">|</span>
            <span className="header-logo-text">Matrix Holding</span>
          </Link>

          <button 
            className="burger" 
            aria-expanded={open} 
            aria-controls="main-nav" 
            aria-label={open ? "Đóng menu" : "Mở menu"} 
            onClick={() => setOpen(!open)}
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
          </button>

          {/* Navigation Menu with Underline Active Indicator */}
          <nav 
            id="main-nav" 
            className={`nav${open ? " nav--open" : ""}`} 
            aria-label="Điều hướng chính" 
            style={{ display: "flex", alignItems: "center", gap: 52, margin: "0 auto" }}
          >
            <NavLink to="/" end onClick={close}>{t("nav_home")}</NavLink>
            <NavLink to="/gioi-thieu" onClick={close}>{t("nav_about")}</NavLink>
            
            <details ref={dropdownRef} className={`nav-dropdown ${isEcosystemActive ? "is-active" : ""}`}>
              <summary>{t("nav_ecosystem")} <i className="fa-solid fa-chevron-down" style={{ fontSize: 9, marginLeft: 4 }} /></summary>
              <div className="dropdown-menu ecosystem-mega" style={{ gridTemplateColumns: "1fr", width: 440, padding: 0 }}>
                <div className="mega-groups" style={{ padding: "20px 22px" }}>
                  <div className="mega-heading" style={{ marginBottom: 14 }}>
                    <span style={{ color: "#38bdf8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>
                      HỆ SINH THÁI THÀNH VIÊN
                    </span>
                    <Link to="/sectors" onClick={close} style={{ color: "#38bdf8", fontSize: "12px", fontWeight: 700 }}>
                      Xem tổng quan <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                  {ECOSYSTEM_UNITS.map(unit => (
                    <Link className="mega-group" key={unit.id} to={`/ecosystem/${unit.id}`} onClick={close}>
                      <b style={{ color: "#38bdf8", fontSize: "13px" }}>{unit.number}</b>
                      <span>
                        <strong style={{ fontSize: "14px", fontWeight: 700 }}>{unit.name}</strong>
                        <small style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.65)" }}>{unit.label}</small>
                      </span>
                      <i className="fa-solid fa-arrow-right" style={{ color: "#38bdf8" }} />
                    </Link>
                  ))}
                </div>
              </div>
            </details>

            <NavLink to="/news" onClick={close}>{t("nav_news")}</NavLink>
            <NavLink to="/tuyen-dung" onClick={close}>{t("nav_careers")}</NavLink>
            <NavLink to="/contact" onClick={close}>Liên hệ</NavLink>
          </nav>

          {/* Right Header Tools: Settings & Utilities Dropdown */}
          <div className="header-right-tools">
            <div className="settings-dropdown-container" ref={settingsRef}>
              <button 
                type="button" 
                className={`settings-icon-btn ${isSettingsOpen ? "is-active" : ""}`}
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                aria-expanded={isSettingsOpen}
                aria-label={lang === "vi" ? "Cài đặt & Tài khoản" : "Settings & Account"}
                title={lang === "vi" ? "Cài đặt & Tài khoản" : "Settings & Account"}
              >
                <i className="fa-solid fa-gear" style={{ fontSize: 15 }} />
              </button>

              {isSettingsOpen && (
                <div className="settings-popover-menu">
                  <div className="settings-popover-header">
                    <span><i className="fa-solid fa-sliders" style={{ marginRight: 6 }} /> Cài đặt & Tài khoản</span>
                    <button type="button" onClick={() => setIsSettingsOpen(false)} aria-label="Đóng">
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>

                  <div className="settings-popover-body">
                    {/* Integrated Account & Login Section */}
                    <div className="settings-group">
                      <span className="settings-group-label">Tài khoản & Đăng nhập</span>
                      <Link
                        to="/login"
                        onClick={() => {
                          setIsSettingsOpen(false);
                          close();
                        }}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "11px 14px",
                          background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                          border: "1px solid rgba(56, 189, 248, 0.4)",
                          borderRadius: "10px",
                          color: "#ffffff",
                          fontSize: "13px",
                          fontWeight: 700,
                          textDecoration: "none",
                          boxShadow: "0 4px 16px rgba(37, 99, 235, 0.4)",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <i className="fa-solid fa-right-to-bracket" style={{ fontSize: 14 }} />
                          <span>Đăng nhập hệ thống</span>
                        </span>
                        <i className="fa-solid fa-chevron-right" style={{ fontSize: 11, opacity: 0.8 }} />
                      </Link>
                    </div>

                    {/* Search Action */}
                    <div className="settings-group">
                      <span className="settings-group-label">Tìm kiếm</span>
                      <button 
                        type="button" 
                        onClick={() => {
                          setIsSettingsOpen(false);
                          setIsSearchOpen(true);
                        }}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px 14px",
                          background: "rgba(41, 151, 255, 0.12)",
                          border: "1px solid rgba(41, 151, 255, 0.35)",
                          borderRadius: "10px",
                          color: "#ffffff",
                          fontSize: "13px",
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <i className="fa-solid fa-magnifying-glass" style={{ color: "#38bdf8" }} />
                          <span>Tìm kiếm thông minh</span>
                        </span>
                        <span style={{ fontSize: "10px", background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px", color: "#e2e8f0" }}>
                          CMD+K
                        </span>
                      </button>
                    </div>

                    {/* Theme Settings */}
                    <div className="settings-group">
                      <span className="settings-group-label">Giao diện (Theme)</span>
                      <div className="settings-btn-grid">
                        <button 
                          type="button" 
                          className={`settings-opt-btn ${theme === "light" ? "is-active" : ""}`}
                          onClick={() => setThemeMode("light")}
                        >
                          <i className="fa-solid fa-sun" style={{ color: "#f59e0b" }} /> Sáng
                        </button>
                        <button 
                          type="button" 
                          className={`settings-opt-btn ${theme === "dark" ? "is-active" : ""}`}
                          onClick={() => setThemeMode("dark")}
                        >
                          <i className="fa-solid fa-moon" style={{ color: "#38bdf8" }} /> Tối
                        </button>
                      </div>
                    </div>

                    {/* Language Settings */}
                    <div className="settings-group" style={{ marginBottom: 0 }}>
                      <span className="settings-group-label">Ngôn ngữ (Language)</span>
                      <div className="settings-btn-grid">
                        <button 
                          type="button" 
                          className={`settings-opt-btn ${lang === "vi" ? "is-active" : ""}`}
                          onClick={() => setLanguage("vi")}
                        >
                          🇻🇳 Tiếng Việt
                        </button>
                        <button 
                          type="button" 
                          className={`settings-opt-btn ${lang === "en" ? "is-active" : ""}`}
                          onClick={() => setLanguage("en")}
                        >
                          🇬🇧 English
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Spotlight Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
