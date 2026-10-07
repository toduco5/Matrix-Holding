import { Link, useParams } from "react-router-dom";
import { FEATURED_NEWS, NEWS_ITEMS } from "../data/news.js";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageMeta from "../components/PageMeta.jsx";

import PageBanner from "../components/PageBanner.jsx";

export default function NewsDetail() {
  const { slug } = useParams();
  const item = [FEATURED_NEWS, ...NEWS_ITEMS].find(story => story.slug === slug);
  if (!item) return <><Header/><main className="not-found"><p className="eyebrow">404 · KHÔNG TÌM THẤY BÀI VIẾT</p><h1>Bài viết này chưa tồn tại.</h1><Link className="btn" to="/news">Về trang tin tức</Link></main><Footer/></>;
  return <><PageMeta title={`${item.title} | Matrix Holding`} description={item.excerpt}/><Header/><main className="news-detail-page">
    <PageBanner
      eyebrow={`${item.category} · ${item.date}`}
      titlePrefix={item.title}
      subtitle={item.excerpt}
    />
    <article className="news-detail-body container"><img src={item.image} alt=""/><div>{item.body.map((paragraph,index)=><p key={index}>{paragraph}</p>)}<aside className="detail-note"><i className="fa-solid fa-circle-info"/> Nội dung mang tính thông tin chung, không phải tư vấn đầu tư, pháp lý hoặc tài chính.</aside><Link className="btn" to="/contact">Trao đổi với Matrix Holding <i className="fa-solid fa-arrow-right"/></Link></div></article>
  </main><Footer/></>;
}
