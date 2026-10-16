import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/enhancements.css";
import "./styles/careers-news.css";
import "./styles/theme.css";
import "./styles/capabilities.css";
import "./styles/audience-paths.css";
import "./styles/matrix-expansion.css";
import "./styles/vivid-theme.css";
import "./styles/contact-widget.css";
import "./styles/brand-refresh.css";
import "./styles/gold-labels.css";
import "./styles/home-news.css";
import "./styles/ecosystem-brand.css";
import "./styles/about-typography.css";
import "./styles/partner-cta-theme.css";
import "./styles/about-page-theme.css";
import "./styles/hero-buttons.css";
import "./styles/news-page-theme.css";
import "./styles/navigation-gold.css";
import "./styles/amber-buttons.css";
import "./styles/footer-theme.css";
import "./styles/site-layout.css";
import "./styles/strategic-partners.css";
import "./styles/hero-architecture.css";
import "./styles/home-typography.css";
import CursorGlow from "./components/CursorGlow.jsx";

import { LanguageProvider } from "./context/LanguageContext.jsx";

const savedTheme = localStorage.getItem("matrix-theme");
// Light is the default for first-time visitors; saved user preference takes priority.
const preferredTheme = "light";
document.documentElement.dataset.theme = savedTheme || preferredTheme;

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
    <CursorGlow />
  </LanguageProvider>
);
