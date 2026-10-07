import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Hackathons } from "./components/Hackathons";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { GeometricScene } from "./components/ui/GeometricScene";
import { Loader } from "./components/ui/Loader";
import { useTheme } from "./components/ui/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(t);
  }, []);

  // Lock scroll briefly during boot for an app-like feel
  useEffect(() => {
    if (!loading) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [loading]);

  return (
    <>
      <Loader show={loading} />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="bg-scene" aria-hidden="true" />
      <GeometricScene />
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Hackathons />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
