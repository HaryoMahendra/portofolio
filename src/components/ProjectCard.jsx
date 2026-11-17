import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectMockup } from "./mockups/ProjectMockup";

export function ProjectCard({ p, i, t, onClickDetail, compact = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: i * 0.12 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClickDetail}
      className={`group relative overflow-hidden rounded-3xl cursor-pointer ${compact ? "h-full" : ""}`}
      style={{
        background: t.bgCard,
        border: `1px solid ${hovered ? t.borderHover : t.border}`,
        boxShadow: hovered
          ? `0 20px 60px ${p.color}18, 0 0 0 1px ${p.color}25`
          : "none",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 20% 40%, ${p.color}12, transparent 65%)`,
        }}
      />

      <div className={`flex ${compact ? "h-full flex-col" : "flex-col lg:flex-row"}`}>
        {/* Mockup preview */}
        <div
          className={`relative shrink-0 overflow-hidden ${compact ? "h-[190px] w-full p-3" : "p-4 lg:w-[380px]"}`}
          style={{ minHeight: compact ? undefined : 200 }}
        >
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, transparent 55%, ${p.color}20)`,
            }}
          />
          <div
            className={`absolute z-20 rounded-full px-2.5 py-1 text-[11px] font-mono font-medium ${compact ? "top-3 right-3" : "top-4 right-4"}`}
            style={{
              background: "rgba(0,0,0,0.4)",
              color: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(8px)",
            }}
          >
            {p.year}
          </div>

          <motion.div
            animate={{ scale: hovered ? 1.03 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full w-full"
            style={{ minHeight: compact ? undefined : 200 }}
          >
            {p.image ? (
              <img
                src={`/assets/proyek/${p.image}`}
                alt={p.title}
                className="h-full w-full rounded-xl object-cover"
                style={{ minHeight: compact ? undefined : 200 }}
              />
            ) : (
              <ProjectMockup type={p.mockupType} accent={p.mockupAccent} />
            )}
          </motion.div>

          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
            }}
          />
        </div>

        {/* Content */}
        <div className={`flex flex-1 flex-col ${compact ? "p-5" : "justify-between p-7"}`}>
          <div>
            <div className={`mb-3 flex ${compact ? "flex-col items-start gap-2" : "flex-wrap items-center gap-2"}`}>
              <h3
                className={`${compact ? "line-clamp-2 min-h-14 text-[18px]" : "text-[20px]"} font-bold tracking-tight`}
                style={{ color: t.text }}
              >
                {p.title}
              </h3>
              <span
                className={`max-w-full rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${compact ? "truncate" : ""}`}
                style={{
                  background: `${p.color}18`,
                  color: p.color,
                  border: `1px solid ${p.color}30`,
                }}
              >
                {p.tag}
              </span>
            </div>
            <p
              className={`${compact ? "mb-4 min-h-[4.5rem] line-clamp-3 text-[13px]" : "mb-5 text-[14px]"} leading-relaxed`}
              style={{ color: t.textSub }}
            >
              {p.descShort || p.desc}
            </p>
            <div className={`${compact ? "mb-4" : "mb-6"} flex flex-wrap items-center gap-2`}>
              {p.tech.map((tech, ti) => (
                <span
                  key={ti}
                  className={`inline-flex items-center gap-1.5 border font-medium ${
                    compact
                      ? "whitespace-nowrap rounded-full px-2.5 py-1 text-[10px]"
                      : "rounded-lg px-2.5 py-1 text-[11px]"
                  }`}
                  style={{
                    background: compact ? `${p.color}12` : t.subtle,
                    color: t.textSub,
                    borderColor: compact ? `${p.color}35` : t.border,
                  }}
                >
                  {compact && (
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: p.color }}
                    />
                  )}
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-medium" style={{ color: t.textMuted }}>
                {p.tech.length} framework digunakan
              </span>
            </div>

            <motion.div
              onClick={(e) => {
                e.stopPropagation();
                onClickDetail?.();
              }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 text-[13px] font-semibold cursor-pointer"
              style={{ color: p.color }}
            >
              Lihat Detail
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: `${p.color}15`,
                  border: `1px solid ${p.color}30`,
                }}
              >
                →
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}