import { useState, useEffect } from "react";

export function useActiveSection(
  sections = ["home", "about", "services", "projects", "contact"]
) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, [sections]);

  return activeSection;
}