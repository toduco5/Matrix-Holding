import { useEffect } from "react";

export default function PageMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title.includes("Matrix Holding") ? title : `${title} | Matrix Holding`;
    document.title = fullTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", fullTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    return () => {
      document.title = "Matrix Holding | Hệ sinh thái cộng đồng kết nối đầu tư";
    };
  }, [title, description]);
  return null;
}
