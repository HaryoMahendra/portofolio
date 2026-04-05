import { ProjectCard } from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";

export function ProjectsSection({ t }) {
  return (
    <section id="projects" className="relative z-10 py-28 px-6 md:px-14 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-4" data-aos="fade-up">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">Portfolio</span>
        <div className="flex-1 h-[1px] max-w-xs" style={{ background: t.subtle }} />
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
        <p className="text-[13px] max-w-xs text-right" style={{ color: t.textMuted }}>
          Karya pilihan dari project yang telah selesai.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} p={p} i={i} t={t} />
        ))}
      </div>

      <div className="text-center mt-10" data-aos="fade-up">
        <button
          className="text-[13px] font-medium transition-colors duration-200 inline-flex items-center gap-1.5 hover:text-blue-500"
          style={{ color: t.textMuted }}
        >
          Lihat semua project <span className="text-xs">→</span>
        </button>
      </div>
    </section>
  );
}
