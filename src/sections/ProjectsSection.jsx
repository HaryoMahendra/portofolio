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
          Portfolio
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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-[90%] max-w-3xl relative scale-95 animate-[fadeIn_.3s_ease,zoomIn_.3s_ease_forwards] overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>

            {/* <img
              src={`/assets/proyek/${selectedProject.image}`}
              className="rounded-xl mb-4 w-full object-cover max-h-[400px]"
            /> */}

            <div className="relative mb-6">
              <img
                src={`/assets/proyek/${selectedProject.detailImage || selectedProject.image}`}
                className="w-full h-[260px] md:h-[340px] object-cover rounded-2xl"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Title di atas gambar */}
              <div className="absolute bottom-4 left-5">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h2>
                <p className="text-xs text-gray-300 mt-1">
                  {selectedProject.tag}
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-5 leading-relaxed">
              {selectedProject.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech?.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
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
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-gray-500" />
                <span className="text-[13px] font-medium text-gray-500">
                  Coming Soon
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL SEMUA PROJECT */}
      {showAllProjects && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowAllProjects(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-950 animate-[fadeIn_.3s_ease]"
          >
            <button
              onClick={() => setShowAllProjects(false)}
              className="sticky top-10 float-right mr-4 z-10 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center transition"
            >
              ✕
            </button>

           <AllProjectsPage
  t={t}
  onSelectProject={(p) => {
    setShowAllProjects(false);
    setTimeout(() => setSelectedProject(p), 50); // ← tambah delay kecil
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