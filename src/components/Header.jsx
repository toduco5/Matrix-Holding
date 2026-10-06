import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SECTORS } from "../data/constants.js";
import { ECOSYSTEM_UNITS } from "../data/ecosystem-units.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "light");
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const close = () => { setOpen(false); dropdownRef.current?.removeAttribute("open"); };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("matrix-theme", next);
    setTheme(next);
  };

  useEffect(() => {
    const outside = event => { if (headerRef.current && !headerRef.current.contains(event.target)) close(); };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);

  return (
    <header ref={headerRef} className="header" onKeyDown={event => { if (event.key === "Escape") close(); }}>
      <div className="header-inner container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link className="logo" to="/" onClick={close} aria-label="Trang chủ Matrix Holding">
          <img src="/assets/matrix-holding-logo.png" alt="Matrix Holding" style={{ height: 34, width: "auto" }} />
        </Link>

        <button className="burger" aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Đóng menu" : "Mở menu"} onClick={() => setOpen(!open)}>
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>

        <nav id="main-nav" className={`nav${open ? " nav--open" : ""}`} aria-label="Điều hướng chính" style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <NavLink to="/" end onClick={close}>Trang chủ</NavLink>
          <NavLink to="/gioi-thieu" onClick={close}>Về Tập Đoàn</NavLink>
          <details ref={dropdownRef} className="nav-dropdown">
            <summary>Hệ sinh thái <i className="fa-solid fa-chevron-down" style={{ fontSize: 9, marginLeft: 4 }} /></summary>
            <div className="dropdown-menu ecosystem-mega">
              <div className="mega-groups">
                <div className="mega-heading">
                  <span>04 HỆ SINH THÁI THÀNH VIÊN</span>
                  <Link to="/sectors" onClick={close}>Xem tổng quan <i className="fa-solid fa-arrow-right" /></Link>
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
                <p>LĨNH VỰC ƯU TIÊN</p>
                {SECTORS.slice(0,3).map(sector => (
                  <Link className="dropdown-project" key={sector.id} to={`/ecosystem/${sector.slug}`} onClick={close}>
                    <span>{sector.name}</span>
                    <small>{sector.desc}</small>
                  </Link>
                ))}
                <Link className="mega-contact" to="/contact" onClick={close}>
                  Bạn có nhu cầu hợp tác? <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </details>
          <NavLink to="/news" onClick={close}>Tin tức</NavLink>
          <NavLink to="/tuyen-dung" onClick={close}>Tuyển dụng</NavLink>
        </nav>

        <div className="header-right-tools" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button type="button" className="nav-pill-tool" style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.7)", borderRadius: "50px", padding: "6px 14px",
            fontSize: "11px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer",
          }}>
            <i className="fa-solid fa-magnifying-glass" style={{ fontSize: 10 }} />
            <span style={{ fontSize: 9, letterSpacing: "0.08em", opacity: 0.7 }}>CMD+K</span>
          </button>

          <button type="button" className="nav-pill-tool" style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.7)", borderRadius: "50px", padding: "6px 12px",
            fontSize: "11px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 5, cursor: "pointer",
          }}>
            <i className="fa-solid fa-globe" style={{ fontSize: 11 }} />
            <span style={{ fontSize: 10 }}>VI</span>
          </button>

          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={theme === "dark" ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"} style={{
            width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.8)", display: "grid", placeItems: "center", cursor: "pointer", padding: 0
          }}>
            <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`} style={{ fontSize: 12 }} />
          </button>

          <Link className="nav-cta-contact" to="/contact" onClick={close} style={{
            background: "#ffffff", color: "#000000", borderRadius: "50px",
            fontSize: "11px", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase",
            padding: "8px 18px", display: "inline-flex", alignItems: "center", gap: 8,
            boxShadow: "0 0 20px rgba(255,255,255,0.2)", whiteSpace: "nowrap"
          }}>
            <i className="fa-solid fa-users" style={{ fontSize: 11 }} /> THAM GIA CỘNG ĐỒNG
          </Link>
        </div>
      </div>
    </header>
  );
}
