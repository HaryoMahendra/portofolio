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

  // 🎯 Dynamic Title
  const getTitle = () => {
    switch (activeFilter) {
      case "Design":
        return "Design Project";
      case "Web":
        return "Web Project";
      case "Testing":
        return "Testing Project";
      default:
        return "All Project";
    }
  };

  const getSubtitle = () => {
    return `Menampilkan ${filtered.length} project dalam kategori ${activeFilter}`;
  };

  return (
    <div className="p-6 md:p-10">

      {/* Header */}
      <div className="mb-10">
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-400">
          Portfolio
        </span>

        <h2
          className="text-3xl md:text-4xl font-bold mt-2 mb-2 transition-all duration-300"
          style={{ color: t?.text }}
        >
          {getTitle()}
        </h2>

        <p className="text-sm" style={{ color: t?.textMuted }}>
          {getSubtitle()}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map((f) => {
          const isActive = activeFilter === f;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 border backdrop-blur-md
              ${
                isActive
                  ? "bg-blue-500 text-white border-blue-500 shadow-lg scale-105"
                  : "border-gray-600 text-gray-400 hover:border-blue-400 hover:text-blue-400 hover:scale-105"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={i}
              className="transition-transform duration-300 hover:scale-[1.03]"
            >
              <ProjectCard
                p={p}
                i={i}
                t={t}
                onClickDetail={() => onSelectProject?.(p)}
              />
            </div>
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