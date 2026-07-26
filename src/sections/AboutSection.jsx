import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileImage, GraduationCap } from "lucide-react";
import { SKILLS } from "../data/skills";
import { EXPERIENCES } from "../data/experiences";

// Pendidikan digabung ke timeline yang sama dengan pengalaman kerja
const EDUCATION = {
  title: "D4 Sistem Informasi Bisnis",
  subtitle: "Politeknik Negeri Malang",
  badge: "GPA 3.60",
  desc: "Fokus pada analisis sistem informasi bisnis, pengembangan aplikasi, dan manajemen proyek digital.",
  color: "#8B5CF6",
};

export function AboutSection({ t }) {
  const [selectedExp, setSelectedExp] = useState(null);

  const timeline = [
    { kind: "education", ...EDUCATION },
    ...EXPERIENCES.map((exp) => ({ kind: "experience", ...exp })),
  ];

  return (
    <section
      id="about"
      className="relative z-10 py-20 px-6 md:px-14 max-w-6xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-10" data-aos="fade-up">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">
          About Me
        </span>
        <div
          className="flex-1 h-[1px] max-w-xs"
          style={{ background: t.subtle }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* ================= KIRI (HEADING + DESKRIPSI + TECH SKILLS) ================= */}
        {/* Sticky supaya tidak menyisakan ruang kosong saat kolom kanan (timeline) lebih panjang */}
        <div
          data-aos="fade-right"
          className="relative md:sticky md:top-28 self-start"
        >
          {/* Background glow — satu, lebih tenang */}
          <div
            className="absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl opacity-25 pointer-events-none"
            style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)" }}
          />

          <div className="relative z-10">
            <h2
              className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight mb-5"
              style={{ color: t.text }}
            >
              Dari Bangku Kuliah ke{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ruang Server.
              </span>
            </h2>

            {/* Deskripsi — TIDAK DIUBAH */}
            <p
              className="text-[15px] leading-loose mb-4"
              style={{ color: t.textSub }}
            >
              Lulusan D4 Sistem Informasi Bisnis Politeknik Negeri Malang yang
              saat ini bekerja sebagai Staff IT di Rumah Sakit Assalam Cibinong.
              Memiliki pengalaman magang di PT INKA (Persero) pada bidang analisis
              sistem, proses bisnis, dan pengujian sistem. Berfokus di bidang IT
              Support, pengelolaan sistem informasi, troubleshooting hardware dan
              jaringan, serta pengembangan solusi digital yang berorientasi pada
              kebutuhan pengguna.
            </p>
            <br />

            {/* Tech Skills — TIDAK DIUBAH */}
            <div className="flex flex-col gap-4">
              <p
                className="text-[11px] uppercase tracking-[0.2em] mb-1 font-semibold"
                style={{ color: t.textMuted }}
              >
                Tech Skills
              </p>

              {SKILLS.map((s, i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={i * 60}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span
                      className="text-[13px] font-medium"
                      style={{ color: t.textSub }}
                    >
                      {s.name}
                    </span>
                    <span
                      className="text-[12px] font-mono tabular-nums"
                      style={{ color: t.textMuted }}
                    >
                      {s.level}%
                    </span>
                  </div>

                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: t.divider }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        delay: i * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg,${s.color},${s.color}99)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= KANAN (TIMELINE PENDIDIKAN + PENGALAMAN) ================= */}
        <div data-aos="fade-left">
          <div className="relative pl-6">
            <div
              className="absolute left-[7px] top-1 bottom-1 w-[1.5px]"
              style={{
                background: `linear-gradient(180deg, #8B5CF6, ${t.divider} 90%, transparent)`,
              }}
            />

            <div className="flex flex-col gap-6">
              {timeline.map((item, i) => {
                const clickable = item.kind === "experience";
                return (
                  <motion.div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 70}
                    className="relative"
                  >
                    {/* Node */}
                    <span
                      className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                      style={{
                        background: t.bgSurface,
                        border: `2px solid ${item.color || "#3B82F6"}`,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: item.color || "#3B82F6" }}
                      />
                    </span>

                    <div
                      onClick={() => clickable && setSelectedExp(item)}
                      className={`p-5 rounded-2xl relative overflow-hidden transition-transform duration-200 ${
                        clickable
                          ? "cursor-pointer hover:-translate-y-0.5 hover:scale-[1.01]"
                          : ""
                      }`}
                      style={{
                        background: t.bgCard,
                        border: `1px solid ${t.border}`,
                      }}
                    >
                      <div className="flex justify-between items-start mb-1 gap-2">
                        <p
                          className="text-[14px] font-bold flex items-center gap-1.5"
                          style={{ color: t.text }}
                        >
                          {item.kind === "education" && (
                            <GraduationCap
                              size={14}
                              style={{ color: item.color }}
                            />
                          )}
                          {item.title || item.role}
                          {clickable && item.image && (
                            <FileImage
                              size={13}
                              style={{ color: t.textMuted }}
                              className="opacity-60"
                            />
                          )}
                        </p>

                        <span
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full shrink-0"
                          style={{
                            color: item.color || "#3B82F6",
                            background: `${item.color || "#3B82F6"}1A`,
                            border: `1px solid ${item.color || "#3B82F6"}33`,
                          }}
                        >
                          {item.badge || item.period}
                        </span>
                      </div>

                      <p
                        className="text-[12px] font-semibold mb-1.5"
                        style={{ color: item.color || "#3B82F6" }}
                      >
                        {item.subtitle || item.company}
                      </p>

                      <p
                        className="text-[13px] leading-relaxed"
                        style={{ color: t.textMuted }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL DOKUMENTASI ================= */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExp(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.75)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
              style={{
                background: t.bgSurface,
                border: `1px solid ${t.border}`,
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: `1px solid ${t.border}` }}
              >
                <div>
                  <p className="text-[14px] font-bold" style={{ color: t.text }}>
                    {selectedExp.role}
                  </p>
                  <p className="text-[12px] font-semibold text-blue-500">
                    {selectedExp.company}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedExp(null)}
                  className="p-2 rounded-full transition-colors"
                  style={{ background: t.bgCard }}
                >
                  <X size={16} style={{ color: t.textMuted }} />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 max-h-[70vh] overflow-y-auto">
                {selectedExp.image ? (
                  <img
                    src={selectedExp.image}
                    alt={`Dokumentasi ${selectedExp.role}`}
                    className="w-full rounded-xl object-contain"
                    style={{ border: `1px solid ${t.border}` }}
                  />
                ) : (
                  <div
                    className="flex flex-col items-center justify-center gap-3 py-16 rounded-xl"
                    style={{
                      background: t.bgCard,
                      border: `1px dashed ${t.border}`,
                    }}
                  >
                    <FileImage size={28} style={{ color: t.textMuted }} />
                    <p
                      className="text-[13px]"
                      style={{ color: t.textMuted }}
                    >
                      Belum ada dokumentasi untuk pengalaman ini
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}