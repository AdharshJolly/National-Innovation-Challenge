import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/unbounded";
import "@fontsource-variable/sora";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "../nic.css";
import "./styles/site.css";
import "./styles/problems.css";
import "./styles/ambient.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
