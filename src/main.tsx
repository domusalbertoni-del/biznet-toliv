import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root");
if (rootEl) {
  try {
    createRoot(rootEl).render(<App />);
  } catch (e) {
    rootEl.innerHTML = `<div style="padding:40px;font-family:sans-serif;color:#333"><h1>Error loading app</h1><pre>${e}</pre></div>`;
    console.error("Root render error:", e);
  }
}
