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
