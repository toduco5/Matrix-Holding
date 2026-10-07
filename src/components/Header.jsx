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
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");
  const { lang, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const headerRef = useRef(null);
  const dropdownRef = useRef(null);

  const close = () => { 
    setOpen(false); 
    dropdownRef.current?.removeAttribute("open"); 
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("matrix-theme", next);
    setTheme(next);
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
            <img src="/assets/matrix-holding-logo.png" alt="Matrix Holding" style={{ height: 32, width: "auto" }} />
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
            style={{ display: "flex", alignItems: "center", gap: 28 }}
          >
            <NavLink to="/" end onClick={close}>{t("nav_home")}</NavLink>
            <NavLink to="/gioi-thieu" onClick={close}>{t("nav_about")}</NavLink>
            
            <details ref={dropdownRef} className={`nav-dropdown ${isEcosystemActive ? "is-active" : ""}`}>
              <summary>{t("nav_ecosystem")} <i className="fa-solid fa-chevron-down" style={{ fontSize: 9, marginLeft: 4 }} /></summary>
              <div className="dropdown-menu ecosystem-mega">
                <div className="mega-groups">
                  <div className="mega-heading">
                    <span>{t("nav_sectors_overview")}</span>
                    <Link to="/sectors" onClick={close}>{t("nav_view_overview")} <i className="fa-solid fa-arrow-right" /></Link>
                  </div>
                  {ECOSYSTEM_UNITS.map(unit => (
                    <Link className="mega-group" key={unit.id} to={`/ecosystem/${unit.id}`} onClick={close}>
                      <b>{unit.number}</b>
                      <span><strong>{unit.name}</strong><small>{unit.label}</small></span>
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  ))}
                </div>
                <div className="dropdown-projects">
                  <p>{t("nav_priority_fields")}</p>
                  {SECTORS.slice(0,3).map(sector => (
                    <Link className="dropdown-project" key={sector.id} to={`/ecosystem/${sector.slug}`} onClick={close}>
                      <span>{sector.name}</span>
                      <small>{sector.desc}</small>
                    </Link>
                  ))}
                  <Link className="mega-contact" to="/contact" onClick={close}>
                    {t("nav_cooperate_prompt")} <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </details>

            <NavLink to="/news" onClick={close}>{t("nav_news")}</NavLink>
            <NavLink to="/tuyen-dung" onClick={close}>{t("nav_careers")}</NavLink>
            <NavLink to="/contact" onClick={close}>Liên hệ</NavLink>
          </nav>

          {/* Right Header Tools & Blue Login Button */}
          <div className="header-right-tools">
            {/* Search CMD+K */}
            <button 
              type="button" 
              className="nav-pill-tool"
              onClick={() => setIsSearchOpen(true)}
              title={lang === "vi" ? "Mở tìm kiếm nhanh (Ctrl+K)" : "Open quick search (Ctrl+K)"}
            >
              <i className="fa-solid fa-magnifying-glass" />
              <span>CMD+K</span>
            </button>

            {/* Language Switcher */}
            <button 
              type="button" 
              className="lang-toggle-btn"
              onClick={toggleLanguage}
              title={lang === "vi" ? "Chuyển sang Tiếng Anh (English)" : "Chuyển sang Tiếng Việt"}
            >
              <i className="fa-solid fa-globe" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button 
              type="button" 
              className="theme-toggle-vivid" 
              onClick={toggleTheme} 
              aria-label={theme === "dark" ? t("theme_light") : t("theme_dark")}
              title={theme === "dark" ? t("theme_light") : t("theme_dark")}
            >
              <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`} style={{ color: theme === "dark" ? "#f59e0b" : "#38bdf8" }} />
            </button>

            {/* Electric Blue Login Button (exact match with user image) */}
            <Link className="header-login-btn" to="/contact" onClick={close}>
              <i className="fa-solid fa-right-to-bracket" style={{ fontSize: 13 }} /> Đăng nhập
            </Link>
          </div>
        </div>
      </header>

      {/* Spotlight Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
