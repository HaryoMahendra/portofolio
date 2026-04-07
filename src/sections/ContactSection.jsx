import { motion } from "framer-motion";
import { SocialIcon } from "../components/SocialIcon";
import { TopicChip } from "../components/TopicChip";

const SOCIAL_LINKS = [
  { name: "Email",    label: "Email",    value: "haryomahendra41@gmail.com",  href: "mailto:haryomahendra41@gmail.com",                               accent: "#EF4444" },
  { name: "LinkedIn", label: "LinkedIn", value: "LinkedIn/haryomahendra",     href: "https://www.linkedin.com/in/haryomahendra/",                    accent: "#0A66C2" },
  { name: "Figma",    label: "Figma",    value: "haryomahendra/projects",     href: "https://www.figma.com/files/team/1263742957969981377/all-projects/", accent: "#A259FF" },
  { name: "GitHub",   label: "GitHub",   value: "GitHub/HaryoMahendra",              href: "https://github.com/HaryoMahendra",                              accent: null }, // accent resolved at render
];

const TOPIC_CHIPS = ["UI/UX Design", "Frontend Dev", "Freelance", "Full-time", "Kolaborasi", "Lainnya"];

const STATS = [
  { val: "< 24h", label: "Respons" },
  { val: "10+",   label: "Proyek"  },
  { val: "100%",  label: "Fokus"   },
];

export function ContactSection({ t, dark }) {
  return (
    <section id="contact" className="relative z-10 py-28 px-6 md:px-14 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-6" data-aos="fade-up">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">Contact</span>
        <div className="flex-1 h-[1px] max-w-xs" style={{ background: t.subtle }} />
      </div>

      <div className="mb-16" data-aos="fade-up">
        <h2
          className="text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.1] tracking-tight mb-4"
          style={{ color: t.text }}
        >
          Mari buat sesuatu{" "}
          <span style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            luar biasa.
          </span>
        </h2>
        <p className="text-[14px]" style={{ color: t.textSub }}>
          Terbuka untuk full-time, freelance, maupun kolaborasi kreatif.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6 items-start">
        {/* Left panel */}
        <div className="lg:col-span-2 flex flex-col gap-4" data-aos="fade-right">
          <div className="flex flex-col gap-2.5">
            {SOCIAL_LINKS.map(({ name, label, value, href, accent: rawAccent }, i) => {
              const accent = rawAccent ?? (dark ? "#d0d7de" : "#24292F");
              return (
                <motion.a
                  key={i}
                  href={href}
                  target={name !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl group"
                  style={{ background: t.bgCard, border: `1px solid ${t.border}`, textDecoration: "none" }}
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${accent}12`, border: `1px solid ${accent}25` }}
                  >
                    <SocialIcon name={name} size={19} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.15em] font-semibold mb-0.5" style={{ color: t.textMuted }}>{label}</p>
                    <p className="text-[12.5px] font-medium truncate transition-colors duration-200 group-hover:text-blue-400" style={{ color: t.textSub }}>{value}</p>
                  </div>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200"
                    style={{ background: `${accent}15`, color: accent }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <div className="h-[1px] w-full" style={{ background: t.divider }} />

          <div className="grid grid-cols-3 gap-2.5">
            {STATS.map(({ val, label }, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-4 rounded-xl"
                style={{ background: t.bgCard, border: `1px solid ${t.border}` }}
              >
                <p
                  className="text-[15px] font-bold tabular-nums"
                  style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  {val}
                </p>
                <p className="text-[9.5px] uppercase tracking-widest mt-0.5" style={{ color: t.textMuted }}>{label}</p>
              </div>
            ))}
          </div>

          <p className="text-[12px] leading-relaxed px-1" style={{ color: t.textMuted }}>
            Hubungi ketika ingin melakukan kerjasama. Semua pertanyaan dan ide kolaborasi sangat disambut.
          </p>
        </div>

        {/* Right panel — Form */}
        <div className="lg:col-span-3" data-aos="fade-left">
          <div
            className="relative rounded-3xl overflow-hidden p-7"
            style={{ background: t.bgCard, border: `1px solid ${t.border}` }}
          >
            <div className="absolute top-0 right-0 w-56 h-56 pointer-events-none"
              style={{ background: "radial-gradient(circle at 90% 10%, rgba(59,130,246,0.06) 0%, transparent 60%)" }}
            />
            <div className="absolute bottom-0 left-0 w-44 h-44 pointer-events-none"
              style={{ background: "radial-gradient(circle at 10% 90%, rgba(139,92,246,0.05) 0%, transparent 60%)" }}
            />

            <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] mb-5 relative z-10" style={{ color: t.textMuted }}>
              Kirim Pesan
            </p>

            <form className="flex flex-col gap-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Nama",  type: "text",  placeholder: "John Doe"         },
                  { label: "Email", type: "email", placeholder: "john@company.com" },
                ].map(({ label, type, placeholder }, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <label className="text-[10.5px] font-semibold uppercase tracking-widest" style={{ color: t.textMuted }}>{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="w-full px-3.5 py-2.5 rounded-xl text-[13px] outline-none transition-all duration-200"
                      style={{ background: t.inputBg, border: `1px solid ${t.border}`, color: t.textSub }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(59,130,246,0.45)"; e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.07)"; }}
                      onBlur={(e)  => { e.target.style.borderColor = t.border; e.target.style.boxShadow = "none"; }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10.5px] font-semibold uppercase tracking-widest" style={{ color: t.textMuted }}>Topik</label>
                <div className="flex flex-wrap gap-2">
                  {TOPIC_CHIPS.map((chip) => (
                    <TopicChip key={chip} label={chip} t={t} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10.5px] font-semibold uppercase tracking-widest" style={{ color: t.textMuted }}>Pesan</label>
                <textarea
                  placeholder="Ceritakan project atau kebutuhan Anda..."
                  rows={4}
                  className="w-full px-3.5 py-2.5 rounded-xl text-[13px] outline-none resize-none transition-all duration-200"
                  style={{ background: t.inputBg, border: `1px solid ${t.border}`, color: t.textSub }}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(59,130,246,0.45)"; e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.07)"; }}
                  onBlur={(e)  => { e.target.style.borderColor = t.border; e.target.style.boxShadow = "none"; }}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.012 }}
                whileTap={{ scale: 0.975 }}
                type="submit"
                className="w-full py-3.5 rounded-xl text-[13.5px] font-bold text-white tracking-wide relative overflow-hidden group"
                style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)", boxShadow: "0 4px 22px rgba(59,130,246,0.25)" }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Kirim Pesan
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>→</motion.span>
                </span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)", transform: "skewX(-15deg)" }}
                />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
