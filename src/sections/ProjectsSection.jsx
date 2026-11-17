// import { a } from "framer-motion/client";
import { ProjectCard } from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";
import { AllProjectsPage } from "../pages/AllProjectsPage";
import { useState, useEffect } from "react";

export function ProjectsSection({ t }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    if (selectedProject || showAllProjects) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject, showAllProjects]);

  return (
    <section
      id="projects"
      className="relative z-10 py-28 px-6 md:px-14 max-w-6xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-4" data-aos="fade-up">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">
          Projects
        </span>
        <div
          className="flex-1 h-[1px] max-w-xs"
          style={{ background: t.subtle }}
        />
      </div>

      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        data-aos="fade-up"
      >
        <h2
  className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight"
  style={{ color: t.text }}
>
  Projects yang{" "}
  <span style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
    Dikerjakan
  </span>
</h2>
        <p
          className="text-[13px] max-w-xs text-right"
          style={{ color: t.textMuted }}
        >
          Project pilihan yang sudah diselesaikan.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {PROJECTS.filter((p) => p.featured)
          .slice(0, 2)
          .map((p, i) => (
            <ProjectCard
              key={i}
              p={p}
              i={i}
              t={t}
              onClickDetail={() => setSelectedProject(p)}
            />
          ))}
      </div>

      {/* MODAL DETAIL PROJECT */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Detail proyek ${selectedProject.title}`}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border p-5 sm:p-7 animate-[fadeIn_.3s_ease,zoomIn_.3s_ease_forwards]"
            style={{
              background: t.bgSurface,
              color: t.text,
              borderColor: t.border,
              boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Tutup detail proyek"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border transition hover:text-blue-500"
              style={{
                background: t.bgSurface,
                borderColor: t.border,
                color: t.textSub,
              }}
            >
              ✕
            </button>

            <div className="relative mb-6">
              <img
                src={`/assets/proyek/${selectedProject.detailImage || selectedProject.image}`}
                alt={`${selectedProject.title} project preview`}
                className="h-[240px] w-full rounded-2xl object-cover sm:h-[280px] md:h-[340px]"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Title di atas gambar */}
              <div className="absolute bottom-4 left-5 right-5">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h2>
                <p className="mt-1 text-xs text-white/80">
                  {selectedProject.tag}
                </p>
              </div>
            </div>

            <p className="mb-5 leading-relaxed" style={{ color: t.textSub }}>
              {selectedProject.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech?.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border px-3 py-1 text-xs"
                  style={{
                    background: t.subtle,
                    borderColor: t.border,
                    color: t.textSub,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Live Project Badge */}
            {selectedProject.link && selectedProject.link !== "#" ? (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition hover:opacity-80"
                style={{
                  background: (selectedProject.color || "#3b82f6") + "18",
                  border: "1px solid " + (selectedProject.color || "#3b82f6") + "40",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: selectedProject.color || "#3b82f6" }}
                />
                <span
                  className="text-[13px] font-semibold"
                  style={{ color: selectedProject.color || "#3b82f6" }}
                >
                  Live Project
                </span>
              </a>
            ) : (
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: t.subtle,
                  border: `1px solid ${t.border}`,
                }}
              >
                <div className="w-2 h-2 rounded-full bg-gray-500" />
                <span className="text-[13px] font-medium" style={{ color: t.textMuted }}>
                  Coming Soon
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {showAllProjects && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setShowAllProjects(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Semua proyek"
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border animate-[fadeIn_.3s_ease]"
            style={{
              background: t.bgSurface,
              color: t.text,
              borderColor: t.border,
              boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
            }}
          >
            <button
              onClick={() => setShowAllProjects(false)}
              aria-label="Tutup daftar proyek"
              className="sticky top-4 z-10 float-right mr-4 flex h-9 w-9 items-center justify-center rounded-full border transition hover:text-blue-500"
              style={{
                background: t.bgSurface,
                borderColor: t.border,
                color: t.textSub,
              }}
            >
              ✕
            </button>

            <AllProjectsPage
              t={t}
              onSelectProject={(p) => {
                setShowAllProjects(false);
                setTimeout(() => setSelectedProject(p), 50);
              }}
            />
          </div>
        </div>
      )}

      <div className="text-center mt-10" data-aos="fade-up">
        <button
          onClick={() => setShowAllProjects(true)}
          className="text-[13px] font-medium transition-colors duration-200 inline-flex items-center gap-1.5 hover:text-blue-500"
          style={{ color: t.textMuted }}
        >
          Lihat semua project <span className="text-xs">→</span>
        </button>
      </div>
    </section>
  );
}