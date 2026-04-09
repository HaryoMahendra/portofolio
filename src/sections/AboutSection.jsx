import { motion } from "framer-motion";
import { SKILLS } from "../data/skills";
import { EXPERIENCES } from "../data/experiences";

export function AboutSection({ t }) {
  return (
    <section
      id="about"
      className="relative z-10 py-28 px-6 md:px-14 max-w-6xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-12" data-aos="fade-up">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">
          About Me
        </span>
        <div
          className="flex-1 h-[1px] max-w-xs"
          style={{ background: t.subtle }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* ================= KIRI (PROFILE + SKILLS) ================= */}
        <div data-aos="fade-right" className="relative">
          {/* 🔥 Background Glow */}
          <div
            className="absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl opacity-30"
            style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)" }}
          />

          <div
            className="absolute bottom-0 right-0 w-60 h-60 rounded-full blur-2xl opacity-20"
            style={{ background: "linear-gradient(135deg,#06B6D4,#3B82F6)" }}
          />

          {/* 🔥 Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Avatar */}
          <div className="flex justify-center mb-10 relative z-10">
            <div
              className="relative w-52 h-52 p-3 rounded-3xl backdrop-blur-xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${t.border}`,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
                  padding: 2,
                }}
              >
                <div
                  className="w-full h-full rounded-3xl"
                  style={{ background: t.bgSurface }}
                />
              </motion.div>

              <div
                className="absolute inset-[3px] rounded-3xl flex flex-col items-center justify-center gap-2"
                style={{ background: t.bgSurface }}
              >
                {/* 🔥 Glow belakang foto */}
                <div
                  className="absolute w-24 h-24 rounded-2xl blur-xl opacity-40"
                  style={{
                    background: "linear-gradient(135deg,#3B82F6,#8B5CF6)",
                  }}
                />

                <img
                  src="/assets/profile3.jpeg"
                  alt="Haryo Mahendra"
                  className="w-35 h-35 rounded-2xl object-cover object-top shadow-lg relative z-10"
                  style={{ border: `2px solid ${t.border}` }}
                />
                
                <p
                  className="text-[13px] font-bold mt-1"
                  style={{ color: t.text }}
                >
                  Haryo Mahendra Jati
                </p>
                <p
                  className="text-[11px] tracking-wide"
                  style={{ color: t.textMuted }}
                >
                  Frontend Dev & UI/UX
                </p>
              </div>

              {/* floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-6 text-[10px] font-medium px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  color: "#93C5FD",
                }}
              >
                React · Next.js
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-6 text-[10px] font-medium px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.25)",
                  color: "#C4B5FD",
                }}
              >
                Figma · UI/UX
              </motion.div>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-4 relative z-10">
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

        {/* ================= KANAN (TEXT + EXPERIENCE) ================= */}
        <div data-aos="fade-left">
          <h2
            className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight mb-5"
            style={{ color: t.text }}
          >
            Saya membuat produk{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              digital yang nyata.
            </span>
          </h2>

          <p
            className="text-[15px] leading-loose mb-4"
            style={{ color: t.textSub }}
          >
            Lulusan Sistem Informasi Bisnis Politeknik Negeri Malang dengan
            fokus di bidang desain, pengembangan, dan testing aplikasi.
            Pengalaman magang di PT INKA (Persero) mengasah kemampuan saya dalam
            menganalisis kebutuhan pengguna, memperbaiki sistem informasi nyata,
            dan merancang antarmuka yang fungsional sekaligus intuitif.
          </p>

          <p
            className="text-[14px] leading-loose"
            style={{ color: t.textMuted }}
          >
            Latar belakang saya memberikan perspektif unik serta mampu
            menjembatani kebutuhan bisnis dengan solusi teknis yang tepat
            sasaran, mulai dari desain UI/UX, implementasi, hingga pengujian
            sistem dan analisis data.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl relative overflow-hidden"
                style={{
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                  style={{
                    background: `linear-gradient(180deg,${exp.color},transparent)`,
                  }}
                />

                <div className="pl-2">
                  <div className="flex justify-between items-start mb-1">
                    <p
                      className="text-[14px] font-bold"
                      style={{ color: t.text }}
                    >
                      {exp.role}
                    </p>

                    <span
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full text-blue-400"
                      style={{
                        background: "rgba(59,130,246,0.1)",
                        border: "1px solid rgba(59,130,246,0.2)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[12px] font-semibold text-blue-500 mb-1.5">
                    {exp.company}
                  </p>

                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: t.textMuted }}
                  >
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
