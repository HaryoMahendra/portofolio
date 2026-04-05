import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTheme } from "./hooks/useTheme";
import { useActiveSection } from "./hooks/useActiveSection";

import { Navbar } from "./sections/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";

export default function App() {
  const [dark, setDark] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const t = useTheme(dark);
  const activeSection = useActiveSection();

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60 });
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className="min-h-screen transition-colors duration-500 relative overflow-x-hidden"
      style={{
        background: t.bg,
        color: t.text,
        fontFamily: "'DM Sans','Helvetica Neue',sans-serif",
      }}
    >
      {/* Cursor glow */}
      <div
        className="fixed w-48 h-48 rounded-full blur-3xl pointer-events-none z-50 transition"
        style={{
          top: mouse.y - 96,
          left: mouse.x - 96,
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)" }}
        />
        <div className="absolute top-[50%] right-[-10%] w-[35vw] h-[35vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" }}
        />
        <div className="absolute bottom-[-5%] left-[30%] w-[30vw] h-[30vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)" }}
        />
        {!dark && (
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        )}
      </div>

      <Navbar dark={dark} setDark={setDark} t={t} activeSection={activeSection} scrollTo={scrollTo} />
      <HeroSection t={t} scrollTo={scrollTo} />
      <AboutSection t={t} />
      <ProjectsSection t={t} />
      <ContactSection t={t} dark={dark} />
      <Footer t={t} />
    </div>
  );
}
