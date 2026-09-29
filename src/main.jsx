import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/enhancements.css";
import "./styles/careers-news.css";
import "./styles/theme.css";
import "./styles/capabilities.css";
import "./styles/audience-paths.css";
import CursorGlow from "./components/CursorGlow.jsx";

const savedTheme = localStorage.getItem("matrix-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
document.documentElement.dataset.theme = savedTheme || preferredTheme;

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <CursorGlow />
  </>
);
