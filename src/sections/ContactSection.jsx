// import { a } from "framer-motion/client";
import { motion } from "framer-motion";
import { SocialIcon } from "../components/SocialIcon";

const SOCIAL_LINKS = [
  { name: "Email",    label: "Email",    value: "haryomahendra41@gmail.com",         href: "mailto:haryomahendra41@gmail.com",                                  accent: "#EF4444" },
  { name: "LinkedIn", label: "LinkedIn", value: "linkedin.com/in/haryomahendra",     href: "https://www.linkedin.com/in/haryomahendra/",                        accent: "#0A66C2" },
  { name: "Figma",    label: "Figma",    value: "figma.com/haryomahendra",           href: "https://www.figma.com/files/team/1263742957969981377/all-projects/", accent: "#A259FF" },
  { name: "GitHub",   label: "GitHub",   value: "github.com/HaryoMahendra",          href: "https://github.com/HaryoMahendra",                                  accent: null },
];

const STATS = [
  { val: "< 24h", label: "Respons" },
  { val: "5+",    label: "Proyek"  },
  { val: "100%",  label: "Fokus"   },
];

export function ContactSection({ t, dark }) {
  return (
    <section id="contact" className="relative py-28 px-6 md:px-14 max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6" data-aos="fade-up">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">Contact</span>
        <div className="flex-1 h-[1px] max-w-xs" style={{ background: t.subtle }} />
      </div>

      {/* Hero text — center */}
      <div className="text-center max-w-2xl mx-auto mb-20" data-aos="fade-up">
        <h2
  className="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight mb-4"
  style={{ color: t.text }}
>
  Punya ide?{" "}
  <span style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
    Ngobrol yuk.
  </span>
</h2>
<p className="text-[15px] leading-relaxed" style={{ color: t.textSub }}>
  Selalu senang mendengar cerita dan ide baru — baik soal project,
  kolaborasi, maupun peluang kerja full-time maupun freelance.
</p>
      </div>

      {/* Social Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12" data-aos="fade-up">
        {SOCIAL_LINKS.map(({ name, label, value, href, accent: rawAccent }, i) => {
          const accent = rawAccent ?? (dark ? "#d0d7de" : "#24292F");
          return (
            <motion.a
              key={i}
              href={href}
              target={name !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="flex items-center gap-4 px-5 py-4 rounded-2xl group"
              style={{
                background: t.bgCard,
                border: `1px solid ${t.border}`,
                textDecoration: "none",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
              >
                <SocialIcon name={name} size={22} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.18em] font-semibold mb-0.5" style={{ color: t.textMuted }}>
                  {label}
                </p>
                <p
                  className="text-[13px] font-medium truncate transition-colors duration-200 group-hover:text-blue-400"
                  style={{ color: t.textSub }}
                >
                  {value}
                </p>
              </div>

              {/* Arrow */}
              <motion.div
                animate={{ x: 0, opacity: 0.3 }}
                whileHover={{ x: 3, opacity: 1 }}
                className="shrink-0"
                style={{ color: accent }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </motion.div>
            </motion.a>
          );
        })}
      </div>

      {/* Divider */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="h-[1px] w-full" style={{ background: t.divider }} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto" data-aos="fade-up">
        {STATS.map(({ val, label }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-6 rounded-2xl"
            style={{ background: t.bgCard, border: `1px solid ${t.border}` }}
          >
            <p
              className="text-[22px] font-bold tabular-nums mb-1"
              style={{
                background: "linear-gradient(135deg,#3B82F6,#8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {val}
            </p>
            <p className="text-[11px] uppercase tracking-widest" style={{ color: t.textMuted }}>
              {label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}