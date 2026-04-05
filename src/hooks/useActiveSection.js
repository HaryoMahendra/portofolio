import { useState, useEffect } from "react";

export function useActiveSection(sections = ["home", "about", "projects", "contact"]) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return activeSection;
}
