import { ProjectCard } from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";
import { useState } from "react";

export function AllProjectsPage({ t, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Design", "Web", "Testing"];

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter(
          (p) =>
            p.category?.toLowerCase() === activeFilter.toLowerCase()
        );

  const getTitle = () => {
    switch (activeFilter) {
      case "Design": return "Proyek Design";
      case "Web": return "Proyek Web";
      case "Testing": return "Proyek Testing";
      default:
        return "Semua Proyek";
    }
  };

  const getSubtitle = () => {
    return activeFilter === "All"
      ? `Menampilkan ${filtered.length} proyek`
      : `Menampilkan ${filtered.length} proyek kategori ${activeFilter}`;
  };

  return (
    <div className="p-6 sm:p-8 md:p-10">
      {/* Header */}
      <div className="mb-8 pr-10">
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-400">
          Projects
        </span>

        <h2
          className="mt-2 mb-2 text-3xl md:text-4xl font-bold tracking-tight transition-all duration-300"
          style={{ color: t?.text }}
        >
          {getTitle()}
        </h2>

        <p className="text-sm" style={{ color: t?.textSub }}>
          {getSubtitle()}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {filters.map((f) => {
          const isActive = activeFilter === f;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              aria-pressed={isActive}
              className="rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: isActive ? "#3B82F6" : t?.bgCard,
                borderColor: isActive ? "#3B82F6" : t?.borderHover,
                color: isActive ? "#fff" : t?.textSub,
                boxShadow: isActive ? "0 6px 18px rgba(59,130,246,0.2)" : "none",
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard
              key={i}
              p={p}
              i={i}
              t={t}
              compact
              onClickDetail={() => onSelectProject?.(p)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-5xl mb-4 animate-bounce">🗂️</div>
          <p className="text-sm" style={{ color: t?.textMuted }}>
            Belum ada project untuk kategori <b>{activeFilter}</b>.
          </p>
        </div>
      )}
    </div>
  );
}