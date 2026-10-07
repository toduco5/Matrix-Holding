import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Community from "./pages/Community.jsx";
import Careers from "./pages/Careers.jsx";
import News from "./pages/News.jsx";
import Sectors from "./pages/Sectors.jsx";
import EcosystemDetail from "./pages/EcosystemDetail.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import NewsDetail from "./pages/NewsDetail.jsx";
import CareerDetail from "./pages/CareerDetail.jsx";
import Login from "./pages/Login.jsx";
import { Link } from "react-router-dom";
import "./styles/tokens.css";
import { initScrollAnimations } from "./utils/behavior.js";
import ProgressScroll from "./components/ProgressScroll.jsx";
import Skills from "./components/Skills.jsx";
import DesignGallery from "./components/DesignGallery.jsx";
import ContactWidget from "./components/ContactWidget.jsx";

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    let cleanup = () => {};
    const frame = requestAnimationFrame(() => { cleanup = initScrollAnimations(); });
    return () => {
      cancelAnimationFrame(frame);
      cleanup();
    };
  }, [pathname]);

  return null;
}

function PageTransition({ children }) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setFading(false);
    setVisible(false);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => { setVisible(true); setFading(true); });
    });
    const timer = setTimeout(() => setFading(false), 500);
    return () => { cancelAnimationFrame(frame); clearTimeout(timer); };
  }, [pathname]);

  return (
    <div className={visible ? "page-visible" : "page-enter"} style={{ transition: fading ? "opacity .4s cubic-bezier(.2,.7,.2,1)" : "none" }}>
      {children}
    </div>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button className="scroll-top-btn visible" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Về đầu trang">
      <i className="fa-solid fa-chevron-up" />
    </button>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ProgressScroll />
      <PageTransition>
        <RouteEffects />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tuyen-dung" element={<Careers />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<CareerDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/ecosystem/:slug" element={<EcosystemDetail />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<main className="not-found"><p className="eyebrow">404 · KHÔNG TÌM THẤY TRANG</p><h1>Trang bạn tìm không tồn tại.</h1><Link className="btn" to="/">Về trang chủ</Link></main>} />
        </Routes>
      </PageTransition>
      <ScrollToTop />
      <ContactWidget />
    </BrowserRouter>
  );
}
