
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import App from "./app/App.tsx";
import { FeaturedProjects } from "@/app/components/FeaturedProjects";
import { ProjectDetail } from "@/app/components/ProjectDetail";
import "./styles/index.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<FeaturedProjects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  </BrowserRouter>
);