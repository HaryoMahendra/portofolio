import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const PROJECTS = [
  {
    num: "01",
    title: "NexaUI Dashboard",
    tag: "UI/UX · Web App",
    desc: "Analytics dashboard dengan data visualisasi real-time dan dark mode premium.",
    color: "#3B82F6",
    year: "2025",
    link: "#",
  },
  {
    num: "02",
    title: "Orion Landing",
    tag: "Marketing · Design",
    desc: "Landing page SaaS dengan animasi scroll yang memukau dan konversi tinggi.",
    color: "#8B5CF6",
    year: "2025",
    link: "#",
  },
  {
    num: "03",
    title: "Lumina Store",
    tag: "E-Commerce · Next.js",
    desc: "Toko online modern dengan UX optimal, cart animasi, dan checkout seamless.",
    color: "#06B6D4",
    year: "2024",
    link: "#",
  },
];

const SKILLS = [
  { name: "React / Next.js", level: 92 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Figma & UI/UX", level: 88 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 72 },
  { name: "Framer Motion", level: 85 },
];

const EXPERIENCES = [
  {
    role: "Frontend Developer",
    company: "PT Digital Nusantara",
    period: "2023 – Sekarang",
    desc: "Membangun UI/UX untuk 10+ produk SaaS, meningkatkan performa web hingga 40%.",
  },
  {
    role: "UI/UX Designer",
    company: "Freelance",
    period: "2021 – 2023",
    desc: "Merancang 25+ interface untuk startup lokal & internasional menggunakan Figma.",
  },
];

/* ─────────────────────────────────────────
   ICON COMPONENTS
───────────────────────────────────────── */
const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

/* Logo / Avatar — gunakan icon.svg, fallback ke inisial */
function SiteIcon({ size = 32, rounded = "rounded-lg", className = "" }) {
  const [err, setErr] = useState(false);
  return err ? (
    <div
      className={`${rounded} flex items-center justify-center font-bold text-white shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.3,
        background: "linear-gradient(135deg,#3B82F6,#8B5CF6)",
      }}
    >
      HJ
    </div>
  ) : (
    <img
      src="/assets/icon.svg"
      alt="Logo"
      onError={() => setErr(true)}
      className={`${rounded} object-contain shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

/* Social icon — ambil dari /assets/, fallback emoji */
function SocialIcon({ name, size = 22 }) {
  const map = {
    Email:    { file: "/assets/tools/gmail.png",   },
    LinkedIn: { file: "/assets/tools/linkedin.png",},
    Figma:    { file: "/assets/tools/figma.png",},
    GitHub:   { file: "/assets/tools/github.png",},
  };
  const [err, setErr] = useState(false);
  const info = map[name] ?? { file: "", fallback: "🔗" };

  return err || !info.file ? (
    <span style={{ fontSize: size * 0.85 }}>{info.fallback}</span>
  ) : (
    <img
      src={info.file}
      alt={name}
      onError={() => setErr(true)}
      style={{ width: size, height: size }}
      className="object-contain"
    />
  );
}

/* ─────────────────────────────────────────
   APP
───────────────────────────────────────── */
export default function App() {
  const [dark, setDark] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60 });
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const subtle     = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)";
  const cardBg     = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.025)";
  const cardBorder = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  return (
    <div className={dark ? "dark" : ""}>
      <div
        className="min-h-screen transition-colors duration-500 bg-[#f8f8f8] dark:bg-[#080808] text-black dark:text-white relative overflow-x-hidden"
        style={{ fontFamily: "'DM Sans','Helvetica Neue',sans-serif" }}
      >

        {/* ── CURSOR GLOW ── */}
        <div
          className="fixed w-48 h-48 rounded-full blur-3xl pointer-events-none z-50 transition"
          style={{
            top: mouse.y - 96, left: mouse.x - 96,
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          }}
        />

        {/* ── BG GLOWS ── */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
          <div className="absolute top-[50%] right-[-10%] w-[35vw] h-[35vw] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />
          <div className="absolute bottom-[-5%] left-[30%] w-[30vw] h-[30vw] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)" }} />
        </div>

        {/* ══════════════════════════════
            NAVBAR
        ══════════════════════════════ */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
          style={{
            background: dark ? "rgba(8,8,8,0.75)" : "rgba(248,248,248,0.85)",
            backdropFilter: "blur(20px)",
            borderBottom: `1px solid ${subtle}`,
          }}
        >
          <div className="mx-auto px-6 md:px-14 py-3.5 flex justify-between items-center max-w-6xl">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => scrollTo("home")}
            >
              <SiteIcon size={34} rounded="rounded-xl" />
              <div>
                <span className="font-bold text-[15px] tracking-tight block leading-tight">My Profile</span>
              </div>
            </motion.div>

            {/* Nav links */}
            <motion.ul
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex gap-8 text-[13px] font-medium text-black/45 dark:text-white/40"
            >
              {["Home", "About", "Projects", "Contact"].map((item, i) => (
                <li key={i}
                  className="relative group cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => scrollTo(item.toLowerCase())}
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </motion.ul>

            {/* Right actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              {/* Toggle */}
              <button
                onClick={() => setDark(!dark)}
                aria-label="Toggle dark mode"
                className="relative w-[52px] h-[28px] rounded-full flex items-center px-[3px] transition-all duration-300"
                style={{
                  background: dark ? "rgba(59,130,246,0.2)" : "rgba(0,0,0,0.08)",
                  border: dark ? "1px solid rgba(59,130,246,0.35)" : "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <span className="absolute left-1.5 transition-opacity duration-200 text-yellow-400" style={{ opacity: dark ? 0 : 1 }}><SunIcon /></span>
                <span className="absolute right-1.5 transition-opacity duration-200 text-blue-300" style={{ opacity: dark ? 1 : 0 }}><MoonIcon /></span>
                <motion.div
                  animate={{ x: dark ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 600, damping: 32 }}
                  className="w-[22px] h-[22px] rounded-full flex items-center justify-center z-10"
                  style={{
                    background: dark ? "linear-gradient(135deg,#3B82F6,#8B5CF6)" : "#fff",
                    boxShadow: dark ? "0 0 10px rgba(59,130,246,0.5)" : "0 1px 4px rgba(0,0,0,0.18)",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {dark ? (
                      <motion.span key="moon" initial={{ opacity: 0, rotate: -30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 30 }} transition={{ duration: 0.15 }} className="text-white flex"><MoonIcon /></motion.span>
                    ) : (
                      <motion.span key="sun" initial={{ opacity: 0, rotate: 30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -30 }} transition={{ duration: 0.15 }} className="text-yellow-500 flex"><SunIcon /></motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </button>

              {/* Hire Me */}
              <button
                onClick={() => scrollTo("contact")}
                className="hidden md:inline-flex items-center gap-2 text-[13px] font-semibold px-5 py-2 rounded-full text-white transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)", boxShadow: "0 0 20px rgba(59,130,246,0.3)" }}
              >
                Hire Me ✦
              </button>
            </motion.div>
          </div>
        </nav>

        {/* ══════════════════════════════
            HERO
        ══════════════════════════════ */}
        <section id="home" className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-14 max-w-6xl mx-auto pt-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8 w-fit px-4 py-1.5 rounded-full"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[12px] font-medium text-blue-400 tracking-wide">Open to Work · Freelance & Full-time</span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-[12px] font-semibold text-black/35 dark:text-white/35 mb-2 tracking-[0.2em] uppercase">Hi, saya</p>
              <h1 className="text-[clamp(2.4rem,5.5vw,4.6rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-3">
                Haryo Mahendra Jati
              </h1>
              <h2 className="text-[clamp(1.1rem,2.3vw,1.7rem)] font-semibold mb-6"
                style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                <Typewriter words={["Frontend Developer", "UI/UX Designer", "Digital Product Builder"]} loop cursor cursorStyle="|" />
              </h2>
              <p className="text-black/50 dark:text-white/40 text-[15px] leading-relaxed max-w-md mb-10">
                2+ tahun membangun website modern & produk digital yang memadukan estetika dan performa tinggi — dari desain Figma hingga kode production.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <button onClick={() => scrollTo("projects")}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)", boxShadow: "0 0 24px rgba(59,130,246,0.3)" }}
                >
                  Lihat Portfolio →
                </button>
                <a href="/public/assets/document/CV_HaryoMJ.pdf" download
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white transition-all duration-300"
                  style={{ border: `1px solid ${cardBorder}` }}
                >
                  ↓ Download CV
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { icon: "📍", text: "Madiun, Indonesia" },
                  { icon: "🎓", text: "D4 Sistem Informasi Bisnis" },
                  { icon: "💼", text: "1+ Tahun Pengalaman" },
                ].map(({ icon, text }, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-sm">{icon}</span>
                    <span className="text-[13px] text-black/45 dark:text-white/40">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — avatar card */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="flex justify-center relative"
            >
              <div className="absolute w-72 h-72 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)" }} />

              <div className="relative z-10 w-64 h-64 rounded-3xl flex flex-col items-center justify-center gap-4"
                style={{
                  background: dark
                    ? "linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))"
                    : "linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,255,255,0.7))",
                  border: `1px solid ${cardBorder}`,
                  backdropFilter: "blur(16px)",
                  boxShadow: dark ? "0 8px 40px rgba(0,0,0,0.4)" : "0 8px 40px rgba(0,0,0,0.06)",
                }}
              >
                <SiteIcon size={80} rounded="rounded-2xl" />

                <div className="text-center">
                  <p className="text-[15px] font-bold tracking-tight">Haryo M. Jati</p>
                  <p className="text-[11px] text-black/35 dark:text-white/30 mt-0.5 tracking-wide">Frontend Dev & UI/UX</p>
                </div>

                <div className="flex gap-8 pt-3 mt-1 w-full justify-center" style={{ borderTop: `1px solid ${subtle}` }}>
                  {[{ val: "15+", label: "Projects" }, { val: "8+", label: "Clients" }].map(({ val, label }, i) => (
                    <div key={i} className="text-center">
                      <p className="text-[18px] font-bold"
                        style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                      >{val}</p>
                      <p className="text-[10px] text-black/30 dark:text-white/25 uppercase tracking-widest mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 right-0 text-[11px] font-medium px-3 py-1.5 rounded-full backdrop-blur-sm"
                style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)", color: "#93C5FD" }}
              >React · Next.js</motion.div>
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-2 left-0 text-[11px] font-medium px-3 py-1.5 rounded-full backdrop-blur-sm"
                style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)", color: "#C4B5FD" }}
              >Figma · UI/UX</motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════
            ABOUT
        ══════════════════════════════ */}
        <section id="about" className="relative z-10 py-28 px-6 md:px-14 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12" data-aos="fade-up">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">About Me</span>
            <div className="flex-1 h-[1px] max-w-xs" style={{ background: subtle }} />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div data-aos="fade-right">
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight mb-5">
                Saya membuat produk{" "}
                <span style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  digital yang nyata.
                </span>
              </h2>
              <p className="text-black/50 dark:text-white/40 text-[15px] leading-loose mb-4">
                Saya adalah Frontend Developer & UI/UX Designer dengan pengalaman 2+ tahun membantu startup dan perusahaan membangun produk digital yang tidak hanya indah secara visual, tapi juga berkinerja tinggi.
              </p>
              <p className="text-black/35 dark:text-white/30 text-[14px] leading-loose">
                Latar belakang saya di desain & development memberikan perspektif unik — saya bisa menjembatani kebutuhan bisnis dengan solusi teknis yang elegan.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {EXPERIENCES.map((exp, i) => (
                  <div key={i} className="p-5 rounded-2xl relative overflow-hidden"
                    style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                      style={{ background: "linear-gradient(180deg,#3B82F6,#8B5CF6)" }} />
                    <div className="pl-2">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-[14px] font-bold">{exp.role}</p>
                        <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full text-blue-400"
                          style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
                        >{exp.period}</span>
                      </div>
                      <p className="text-[12px] font-semibold text-blue-500 dark:text-blue-400 mb-1.5">{exp.company}</p>
                      <p className="text-[13px] text-black/40 dark:text-white/35 leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="flex justify-center mb-10">
                <div className="relative w-52 h-52">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-3xl"
                    style={{ background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)", padding: 2 }}
                  >
                    <div className="w-full h-full rounded-3xl" style={{ background: dark ? "#0d0d0d" : "#f0f0f0" }} />
                  </motion.div>

                  <div className="absolute inset-[3px] rounded-3xl flex flex-col items-center justify-center gap-2"
                    style={{ background: dark ? "linear-gradient(135deg,#111,#0a0a0a)" : "linear-gradient(135deg,#fafafa,#efefef)" }}
                  >
                    <SiteIcon size={64} rounded="rounded-xl" />
                    <p className="text-[13px] font-bold mt-1">Haryo M. Jati</p>
                    <p className="text-[11px] text-black/30 dark:text-white/25 tracking-wide">UI Engineer</p>
                  </div>

                  <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-6 text-[10px] font-medium px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)", color: "#93C5FD" }}
                  >React · Next.js</motion.div>
                  <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity }}
                    className="absolute -bottom-4 -left-6 text-[10px] font-medium px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)", color: "#C4B5FD" }}
                  >Figma · UI/UX</motion.div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black/30 dark:text-white/25 mb-1 font-semibold">Tech Skills</p>
                {SKILLS.map((s, i) => (
                  <div key={i} data-aos="fade-up" data-aos-delay={i * 60}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[13px] font-medium text-black/65 dark:text-white/65">{s.name}</span>
                      <span className="text-[12px] text-black/30 dark:text-white/25 font-mono tabular-nums">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            PROJECTS
        ══════════════════════════════ */}
        <section id="projects" className="relative z-10 py-28 px-6 md:px-14 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4" data-aos="fade-up">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">Portfolio</span>
            <div className="flex-1 h-[1px] max-w-xs" style={{ background: subtle }} />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12" data-aos="fade-up">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">Selected Projects</h2>
            <p className="text-black/30 dark:text-white/25 text-[13px] max-w-xs text-right">Karya pilihan dari project yang telah selesai.</p>
          </div>

          <div className="flex flex-col gap-3">
            {PROJECTS.map((p, i) => (
              <motion.div key={i} whileHover={{ scale: 1.008 }}
                className="group relative rounded-2xl cursor-pointer overflow-hidden"
                style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
                data-aos="fade-up" data-aos-delay={i * 80}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 15% 50%, ${p.color}10, transparent 65%)` }} />

                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="hidden md:block w-1 self-stretch rounded-l-2xl shrink-0"
                    style={{ background: `linear-gradient(180deg,${p.color}90,transparent)` }} />

                  <div className="flex-1 p-7 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
                    <span className="text-[11px] font-mono text-black/18 dark:text-white/18 shrink-0 select-none">{p.num}</span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-[18px] md:text-[20px] font-bold tracking-tight">{p.title}</h3>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                          style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}
                        >{p.tag}</span>
                        <span className="text-[11px] text-black/20 dark:text-white/18 font-mono">{p.year}</span>
                      </div>
                      <p className="text-black/40 dark:text-white/35 text-[14px] max-w-lg leading-relaxed">{p.desc}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[12px] text-black/25 dark:text-white/25 group-hover:text-black/55 dark:group-hover:text-white/55 transition-colors">Lihat Detail</span>
                      <motion.div whileHover={{ scale: 1.15, x: 3 }}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-black/25 dark:text-white/25 group-hover:text-black dark:group-hover:text-white transition-all duration-300"
                        style={{ border: `1px solid ${cardBorder}` }}
                      >→</motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10" data-aos="fade-up">
            <button className="text-[13px] font-medium text-black/35 dark:text-white/35 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center gap-1.5">
              Lihat semua project <span className="text-xs">→</span>
            </button>
          </div>
        </section>

        {/* ══════════════════════════════
            CONTACT
        ══════════════════════════════ */}
        <section id="contact" className="relative z-10 py-28 px-6 md:px-14 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12" data-aos="fade-up">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">Contact</span>
            <div className="flex-1 h-[1px] max-w-xs" style={{ background: subtle }} />
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* Left */}
            <div data-aos="fade-right">
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight mb-5">
                Mari kita buat sesuatu{" "}
                <span style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  bersama.
                </span>
              </h2>
              <p className="text-black/40 dark:text-white/35 text-[15px] leading-loose mb-8">
                Terbuka untuk peluang full-time, freelance, maupun kolaborasi. Jangan ragu untuk menghubungi saya!
              </p>

              {/* Social cards */}
              <div className="flex flex-col gap-3">
                {[
                  { name: "Email",    label: "Email",    value: "haryomahendra41@gmail.com",          href: "mailto:haryomahendra41@gmail.com" },
                  { name: "LinkedIn", label: "LinkedIn", value: "linkedin.com/in/haryomahendra",      href: "https://www.linkedin.com/in/haryomahendra/" },
                  { name: "Figma", label: "Figma", value: "figma.com/haryomahendra",                  href: "https://www.figma.com/files/team/1263742957969981377/all-projects/" },
                  { name: "GitHub",   label: "GitHub",   value: "github.com/HaryoMahendra",           href: "https://github.com/HaryoMahendra" },
                ].map(({ name, label, value, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target={name !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer group transition-all duration-200"
                    style={{ background: cardBg, border: `1px solid ${cardBorder}`, textDecoration: "none" }}
                    data-aos="fade-up" data-aos-delay={i * 80}
                  >
                    {/* Icon box */}
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", border: `1px solid ${cardBorder}` }}
                    >
                      <SocialIcon name={name} size={22} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-black/30 dark:text-white/25 uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                      <p className="text-[13px] font-medium text-black/65 dark:text-white/65 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors truncate">{value}</p>
                    </div>

                    {/* Arrow */}
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-black/20 dark:text-white/20 group-hover:text-blue-400 transition-all duration-200 shrink-0"
                      style={{ border: `1px solid ${cardBorder}` }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div data-aos="fade-left">
              <div className="p-8 rounded-3xl" style={{ background: cardBg, border: `1px solid ${cardBorder}` }}>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 dark:text-white/25 mb-6">Kirim Pesan</p>
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Nama", type: "text", placeholder: "John Doe" },
                      { label: "Email", type: "email", placeholder: "john@company.com" },
                    ].map(({ label, type, placeholder }, i) => (
                      <div key={i} className="flex flex-col gap-1.5">
                        <label className="text-[11px] text-black/30 dark:text-white/28 font-bold uppercase tracking-widest">{label}</label>
                        <input type={type} placeholder={placeholder}
                          className="w-full px-4 py-3 rounded-xl text-[13px] text-black/70 dark:text-white/65 outline-none transition-all duration-200 placeholder:text-black/22 dark:placeholder:text-white/18"
                          style={{ background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", border: `1px solid ${cardBorder}` }}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.45)")}
                          onBlur={(e) => (e.target.style.borderColor = cardBorder)}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] text-black/30 dark:text-white/28 font-bold uppercase tracking-widest">Perusahaan / Topik</label>
                    <input type="text" placeholder="PT Contoh / Project Website"
                      className="w-full px-4 py-3 rounded-xl text-[13px] text-black/70 dark:text-white/65 outline-none transition-all duration-200 placeholder:text-black/22 dark:placeholder:text-white/18"
                      style={{ background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", border: `1px solid ${cardBorder}` }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.45)")}
                      onBlur={(e) => (e.target.style.borderColor = cardBorder)}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] text-black/30 dark:text-white/28 font-bold uppercase tracking-widest">Pesan</label>
                    <textarea placeholder="Ceritakan project atau kebutuhan Anda..." rows={4}
                      className="w-full px-4 py-3 rounded-xl text-[13px] text-black/70 dark:text-white/65 outline-none resize-none transition-all duration-200 placeholder:text-black/22 dark:placeholder:text-white/18"
                      style={{ background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", border: `1px solid ${cardBorder}` }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.45)")}
                      onBlur={(e) => (e.target.style.borderColor = cardBorder)}
                    />
                  </div>

                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit"
                    className="w-full py-3.5 rounded-xl text-[14px] font-bold text-white tracking-wide"
                    style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)", boxShadow: "0 0 28px rgba(59,130,246,0.25)" }}
                  >
                    Kirim Pesan →
                  </motion.button>

                  <p className="text-[11px] text-black/18 dark:text-white/18 text-center">Biasanya saya membalas dalam 1–2 hari kerja.</p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            FOOTER
        ══════════════════════════════ */}
        <footer className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 py-8" style={{ borderTop: `1px solid ${subtle}` }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-black/25 dark:text-white/20 text-[12px]">
            <div className="flex items-center gap-2.5">
              <SiteIcon size={22} rounded="rounded-md" />
              <span>© 2026 Haryo M. Jati. All rights reserved.</span>
            </div>
            <p>Frontend Developer & UI/UX Designer · Madiun, Indonesia</p>
          </div>
        </footer>

      </div>
    </div>
  );
}