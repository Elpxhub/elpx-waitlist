import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster position="top-center" />
  </StrictMode>
);
