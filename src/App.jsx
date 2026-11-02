// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Prompts from "./pages/Prompts";
import Contact from "./pages/Contact";
import PalinodeWorld from "./pages/PalinodeWorld";

import { pageView } from "./analytics";

const ThreeDBackground = lazy(() => import("./components/ThreeDBackground"));

function App() {
  const location = useLocation();

  useEffect(() => {
    pageView(location.pathname);
  }, [location]);

  return (
    <div className="dark portfolio-theme min-h-screen">
      <Suspense fallback={null}>
        <ThreeDBackground />
      </Suspense>
      <Navbar />
      <CustomCursor />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/prompts" element={<Prompts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/worlds/palinode-7" element={<PalinodeWorld />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
