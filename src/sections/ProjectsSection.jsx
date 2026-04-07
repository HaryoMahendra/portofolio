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
          Projects yang Dikerjakan
        </h2>
        <p
          className="text-[13px] max-w-xs text-right"
          style={{ color: t.textMuted }}
        >
          Karya pilihan dari project yang telah selesai.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((p, i) => (
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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-[90%] max-w-3xl relative animate-[fadeIn_.3s_ease]"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>

            <img
              src={`/assets/proyek/${selectedProject.image}`}
              className="rounded-xl mb-4 w-full object-cover max-h-[400px]"
            />

            <p className="text-gray-400 mb-4">{selectedProject.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech?.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {selectedProject.link !== "#" && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
              >
                Lihat Demo
              </a>
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
              className="sticky top-4 float-right mr-4 z-10 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center transition"
            >
              ✕
            </button>

            <AllProjectsPage
              t={t}
              onSelectProject={(p) => {
                setShowAllProjects(false);
                setSelectedProject(p);
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
