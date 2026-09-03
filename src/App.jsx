import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const Portofolio = lazy(() => import("./Pages/Portofolio"));
const ContactPage = lazy(() => import("./Pages/Contact"));
const ProjectDetails = lazy(() => import("./components/ProjectDetail"));
const WelcomeScreen = lazy(() => import("./Pages/WelcomeScreen"));
const NotFoundPage = lazy(() => import("./Pages/404"));

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <Suspense fallback={null}>
            <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
          </Suspense>
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <a href="#main-content" className="skip-link visually-hidden">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" tabIndex="-1" className="outline-none">
            <Home />
            <About />
            <Suspense fallback={<div className="h-20" />}>
              <Portofolio />
              <ContactPage />
            </Suspense>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <a href="#main-content" className="skip-link visually-hidden">
      Skip to main content
    </a>
    <main id="main-content" tabIndex="-1" className="outline-none">
      <Suspense fallback={<div className="min-h-screen" />}>
        <ProjectDetails />
      </Suspense>
    </main>
    <Footer />
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  // Progressive enhancement fallback for browsers without CSS animation-timeline
  useEffect(() => {
    if (typeof window !== "undefined" && !window.CSS?.supports?.("animation-timeline", "scroll()")) {
      const progressBar = document.getElementById("scroll-progress");
      if (!progressBar) return;

      const handleScroll = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable > 0) {
          const ratio = Math.min(1, Math.max(0, window.scrollY / scrollable));
          progressBar.style.transform = `scaleX(${ratio})`;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <HelmetProvider>
      <div id="scroll-progress" aria-hidden="true" />
      <div className="pointer-events-none" aria-hidden="true">
        <AnimatedBackground />
      </div>
      <BrowserRouter>
        <Routes>
          {/* PUBLIC */}
          <Route
            path="/"
            element={
              <LandingPage
                showWelcome={showWelcome}
                setShowWelcome={setShowWelcome}
              />
            }
          />

          <Route path="/project/:slug" element={<ProjectPageLayout />} />

          {/* AUTH */}
          <Route path="/login" element={<Login />} />

          {/* ADMIN (PROTECTED) */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <Suspense fallback={null}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;