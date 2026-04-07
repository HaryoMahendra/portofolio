import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectMockup } from "./mockups/ProjectMockup";

export function ProjectCard({ p, i, t, onClickDetail }) {
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
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
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

      <div className="flex flex-col lg:flex-row">
        {/* Mockup preview */}
        <div
  className="relative lg:w-[380px] shrink-0 overflow-hidden p-4"
  style={{ minHeight: 200 }}
>
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, transparent 55%, ${p.color}20)`,
            }}
          />
          <div
            className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold"
            style={{
              background: `${p.color}22`,
              border: `1px solid ${p.color}40`,
              color: p.color,
            }}
          >
            {p.num}
          </div>
          <div
            className="absolute top-4 right-4 z-20 text-[11px] font-mono font-medium px-2.5 py-1 rounded-full"
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
            className="w-full h-full"
            style={{ minHeight: 200 }}
          >
            {p.image ? (
              <img
  src={`/assets/proyek/${p.image}`}
  alt={p.title}
  className="w-full h-full object-cover rounded-xl"
  style={{ minHeight: 200 }}
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
        <div className="flex-1 p-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h3
                className="text-[20px] font-bold tracking-tight"
                style={{ color: t.text }}
              >
                {p.title}
              </h3>
              <span
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                style={{
                  background: `${p.color}18`,
                  color: p.color,
                  border: `1px solid ${p.color}30`,
                }}
              >
                {p.tag}
              </span>
            </div>
            <p className="text-[14px] leading-relaxed mb-5" style={{ color: t.textSub }}>
  {p.descShort || p.desc}
</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((tech, ti) => (
                <span
                  key={ti}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-lg"
                  style={{
                    background: t.subtle,
                    color: t.textSub,
                    border: `1px solid ${t.border}`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: p.color }}
              />
              <span className="text-[12px] font-medium" style={{ color: t.textMuted }}>
                Live Project
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