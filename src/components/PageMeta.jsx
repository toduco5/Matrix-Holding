import { useEffect } from "react";

export default function PageMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title.includes("Matrix Holding") ? title : `${title} | Matrix Holding`;
    document.title = fullTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", fullTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = `${window.location.origin}${window.location.pathname}`;
    return () => { document.title = "Matrix Holding | Hệ sinh thái đầu tư đa ngành"; };
  }, [title, description]);
  return null;
}
