import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FEATURED_NEWS, NEWS_CATEGORIES, NEWS_ITEMS } from "../data/news.js";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

const imageUrl = image => `https://images.unsplash.com/${image}`;

export default function News() {
  const [category, setCategory] = useState("Tất cả");
  const [query, setQuery] = useState("");
  const stories = useMemo(() => NEWS_ITEMS.filter(item => {
    return (category === "Tất cả" || item.category.includes(category.replace("Matrix ", "").toUpperCase())) && `${item.title} ${item.excerpt}`.toLowerCase().includes(query.toLowerCase());
  }), [category, query]);

  return <>
    <PageMeta title="Tin tức & Góc nhìn | Matrix Holding" description="Câu chuyện, hoạt động và góc nhìn phát triển từ hệ sinh thái Matrix Holding." />
    <TopBar /><Header />
    <main className="insights-page">
      <section className="insights-heading section"><div className="container"><p className="eyebrow">MATRIX HOLDING · INSIGHTS</p><h1>Tin tức & Góc nhìn</h1><p>Những câu chuyện, hoạt động và góc nhìn phát triển từ hệ sinh thái Matrix Holding.</p><div className="insights-crumb">Trang chủ <i className="fa-solid fa-chevron-right" /> Tin tức</div></div></section>
      <section className="insights-content"><div className="container">
        <div className="insights-toolbar"><div className="insights-categories">{NEWS_CATEGORIES.map(item => <button className={category === item ? "is-active" : ""} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div><label><i className="fa-solid fa-magnifying-glass" /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Tìm trong chuyên mục" /></label></div>
        <div className="insights-grid">
          <article className="insights-featured" style={{ backgroundImage:`linear-gradient(0deg,#061b49f2 0%,#061b4960 56%,transparent),url(${imageUrl(FEATURED_NEWS.image)})` }}><div><span>{FEATURED_NEWS.category} · {FEATURED_NEWS.date}</span><h2>{FEATURED_NEWS.title}</h2><p>{FEATURED_NEWS.excerpt}</p><Link to="/contact">Đọc chi tiết <i className="fa-solid fa-arrow-right" /></Link></div></article>
          <aside className="insights-latest"><div className="insights-latest__heading"><h2>Mới nhất</h2><span>CẬP NHẬT</span></div>{NEWS_ITEMS.slice(0, 3).map(item => <article key={item.id}><small>{item.category} · {item.date}</small><h3>{item.title}</h3><p>{item.excerpt}</p></article>)}</aside>
        </div>
        <div className="insights-list-heading"><div><span>TIN ĐỌC TIẾP</span><h2>Câu chuyện từ Matrix</h2></div><span>{stories.length} bài viết</span></div>
        <div className="insights-cards">{stories.map(item => <article key={item.id}><img src={imageUrl(item.image)} alt="" /><small>{item.category} · {item.date}</small><h2>{item.title}</h2><p>{item.excerpt}</p><Link to="/contact">Xem chi tiết <i className="fa-solid fa-arrow-right" /></Link></article>)}</div>
      </div></section>
    </main>
    <Footer />
  </>;
}
