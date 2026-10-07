import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  vi: {
    nav_home: "Trang chủ",
    nav_about: "Về Tập Đoàn",
    nav_ecosystem: "Hệ sinh thái",
    nav_news: "Tin tức",
    nav_careers: "Tuyển dụng",
    nav_community: "THAM GIA CỘNG ĐỒNG",
    nav_sectors_overview: "04 HỆ SINH THÁI THÀNH VIÊN",
    nav_priority_fields: "LĨNH VỰC ƯU TIÊN",
    nav_view_overview: "Xem tổng quan",
    nav_cooperate_prompt: "Bạn có nhu cầu hợp tác?",
    search_title: "Tìm kiếm thông minh Matrix",
    search_placeholder: "Nhập từ khóa tìm kiếm (Tin tức, Tuyển dụng, Dự án, Hệ sinh thái...)",
    search_shortcut_hint: "Bấm ESC để đóng · Nhấn ↑↓ để di chuyển · Enter để chọn",
    search_suggested: "Đề xuất phổ biến",
    search_no_results: "Không tìm thấy kết quả phù hợp cho từ khóa",
    search_quick_links: "Lối truy cập nhanh",
    category_all: "Tất cả",
    category_pages: "Trang web",
    category_news: "Tin tức",
    category_careers: "Tuyển dụng",
    category_ecosystem: "Hệ sinh thái",
    theme_light: "Chuyển sang giao diện sáng",
    theme_dark: "Chuyển sang giao diện tối",
    lang_vi: "Tiếng Việt",
    lang_en: "English",
  },
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_ecosystem: "Ecosystem",
    nav_news: "News & Insights",
    nav_careers: "Careers",
    nav_community: "JOIN COMMUNITY",
    nav_sectors_overview: "04 MEMBER ECOSYSTEMS",
    nav_priority_fields: "PRIORITY SECTORS",
    nav_view_overview: "View Overview",
    nav_cooperate_prompt: "Interested in Partnership?",
    search_title: "Matrix Smart Search",
    search_placeholder: "Type to search (News, Careers, Projects, Ecosystem...)",
    search_shortcut_hint: "Press ESC to close · Use ↑↓ to navigate · Enter to select",
    search_suggested: "Popular Suggestions",
    search_no_results: "No matching results found for",
    search_quick_links: "Quick Links",
    category_all: "All",
    category_pages: "Pages",
    category_news: "News",
    category_careers: "Careers",
    category_ecosystem: "Ecosystem",
    theme_light: "Switch to Light Mode",
    theme_dark: "Switch to Dark Mode",
    lang_vi: "Vietnamese",
    lang_en: "English",
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("matrix_lang") || "vi";
  });

  const toggleLanguage = () => {
    const nextLang = lang === "vi" ? "en" : "vi";
    setLang(nextLang);
    localStorage.setItem("matrix_lang", nextLang);
  };

  const setLanguage = (newLang) => {
    if (newLang === "vi" || newLang === "en") {
      setLang(newLang);
      localStorage.setItem("matrix_lang", newLang);
    }
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations.vi[key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: "vi",
      toggleLanguage: () => {},
      setLanguage: () => {},
      t: (key) => key,
    };
  }
  return context;
}
