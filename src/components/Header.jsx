import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SECTORS } from "../data/constants.js";

const featuredProjects = [
  { name:"Năng lượng mặt trời cho trường học", meta:"Giáo dục & năng lượng · Minh họa", to:"/projects/solar-school" },
  { name:"Không gian học tập cộng đồng", meta:"Giáo dục · Minh họa", to:"/projects/community-learning" },
  { name:"Chợ xanh kết nối nông sản", meta:"Nông nghiệp & thương mại · Minh họa", to:"/projects/green-market" },
];

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

  return <header ref={headerRef} className="header" onKeyDown={event => { if (event.key === "Escape") close(); }}>
    <div className="header-inner container">
      <Link className="logo" to="/" onClick={close} aria-label="Trang chủ Matrix Holding"><img src="/assets/matrix-holding-logo.png" alt="Matrix Holding" /><span>MATRIX<span className="logo-light">HOLDING</span></span></Link>
      <button className="burger" aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Đóng menu" : "Mở menu"} onClick={() => setOpen(!open)}><i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} /></button>
      <nav id="main-nav" className={`nav${open ? " nav--open" : ""}`} aria-label="Điều hướng chính">
        <NavLink to="/" end onClick={close}>Trang chủ</NavLink>
        <NavLink to="/about" onClick={close}>Giới thiệu</NavLink>
        <details ref={dropdownRef} className="nav-dropdown"><summary>Hệ sinh thái <i className="fa-solid fa-chevron-down" /></summary><div className="dropdown-menu ecosystem-mega"><div className="mega-groups"><div className="mega-heading"><span>05 LĨNH VỰC ĐẦU TƯ</span><Link to="/sectors" onClick={close}>Xem tổng quan <i className="fa-solid fa-arrow-right" /></Link></div>{SECTORS.map((sector, index) => <Link className="mega-group" key={sector.id} to={`/ecosystem/${sector.slug}`} onClick={close}><b>0{index + 1}</b><span><strong>{sector.name}</strong><small>{sector.desc}</small></span><i className="fa-solid fa-arrow-right" /></Link>)}</div><div className="dropdown-projects"><p>DỰ ÁN MINH HỌA</p>{featuredProjects.map(project => <Link className="dropdown-project" key={project.name} to={project.to} onClick={close}><span>{project.name}</span><small>{project.meta}</small></Link>)}<Link className="mega-contact" to="/contact" onClick={close}>Bạn có dự án cần kết nối? <i className="fa-solid fa-arrow-right" /></Link></div></div></details>
        <NavLink to="/news" onClick={close}>Tin tức</NavLink>
        <NavLink to="/tuyen-dung" onClick={close}>Tuyển dụng</NavLink>
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={theme === "dark" ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"}><i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`} /><span>{theme === "dark" ? "Sáng" : "Tối"}</span></button>
        <Link className="nav-cta" to="/contact" onClick={close}>Kết nối ngay <i className="fa-solid fa-arrow-right" /></Link>
      </nav>
    </div>
  </header>;
}
