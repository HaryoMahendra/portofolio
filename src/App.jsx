import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
    desc: "Analytics dashboard dengan data visualisasi real-time dan dark mode premium. Dibangun dengan React, Recharts, dan Tailwind CSS.",
    color: "#3B82F6",
    year: "2025",
    link: "#",
    tech: ["React", "Recharts", "Tailwind"],
    mockupBg: "from-blue-950 to-slate-900",
    mockupAccent: "#3B82F6",
    mockupType: "dashboard",
  },
  {
    num: "02",
    title: "Orion Landing",
    tag: "Marketing · Design",
    desc: "Landing page SaaS dengan animasi scroll yang memukau dan konversi tinggi. Desain modern dengan micro-interaction eksklusif.",
    color: "#8B5CF6",
    year: "2025",
    link: "#",
    tech: ["Next.js", "Framer Motion", "GSAP"],
    mockupBg: "from-violet-950 to-purple-900",
    mockupAccent: "#8B5CF6",
    mockupType: "landing",
  },
  {
    num: "03",
    title: "Lumina Store",
    tag: "E-Commerce · Next.js",
    desc: "Toko online modern dengan UX optimal, cart animasi, dan checkout seamless. Integrasi payment gateway & dashboard admin.",
    color: "#06B6D4",
    year: "2024",
    link: "#",
    tech: ["Next.js", "Prisma", "Stripe"],
    mockupBg: "from-cyan-950 to-teal-900",
    mockupAccent: "#06B6D4",
    mockupType: "ecommerce",
  },
];

const SKILLS = [
  { name: "React / Next.js", level: 92, color: "#3B82F6" },
  { name: "Tailwind CSS", level: 95, color: "#06B6D4" },
  { name: "Figma & UI/UX", level: 88, color: "#8B5CF6" },
  { name: "TypeScript", level: 80, color: "#F59E0B" },
  { name: "Node.js", level: 72, color: "#10B981" },
  { name: "Framer Motion", level: 85, color: "#EC4899" },
];

const EXPERIENCES = [
  {
    role: "Frontend Developer",
    company: "PT Digital Nusantara",
    period: "2023 – Sekarang",
    desc: "Membangun UI/UX untuk 10+ produk SaaS, meningkatkan performa web hingga 40%.",
    color: "#3B82F6",
  },
  {
    role: "UI/UX Designer",
    company: "Freelance",
    period: "2021 – 2023",
    desc: "Merancang 25+ interface untuk startup lokal & internasional menggunakan Figma.",
    color: "#8B5CF6",
  },
];

/* ─────────────────────────────────────────
   PROJECT MOCKUP SVGS
───────────────────────────────────────── */
function MockupDashboard({ accent }) {
  const a = accent;
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* BG */}
      <rect width="320" height="200" fill="#0f172a"/>
      {/* Sidebar */}
      <rect width="52" height="200" fill="#1e293b"/>
      <rect x="10" y="20" width="32" height="6" rx="3" fill={a} opacity="0.8"/>
      {[50,68,86,104,122].map((y,i)=>(
        <rect key={i} x="10" y={y} width={i===0?32:24} height="5" rx="2.5" fill="white" opacity={i===0?0.5:0.2}/>
      ))}
      {/* Top bar */}
      <rect x="52" y="0" width="268" height="28" fill="#1e293b"/>
      <rect x="64" y="10" width="60" height="8" rx="4" fill="white" opacity="0.1"/>
      <circle cx="288" cy="14" r="7" fill={a} opacity="0.7"/>
      <circle cx="270" cy="14" r="5" fill="white" opacity="0.15"/>
      {/* Metric cards */}
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x={64+i*82} y="36" width="76" height="44" rx="8" fill="#1e293b" stroke={a} strokeOpacity={i===0?0.5:0.15} strokeWidth="1"/>
          <rect x={72+i*82} y="45" width="30" height="4" rx="2" fill="white" opacity="0.3"/>
          <rect x={72+i*82} y="55" width={40+i*5} height="7" rx="3" fill={a} opacity={0.6+i*0.1}/>
          <rect x={72+i*82} y="66" width="20" height="3" rx="1.5" fill="#10B981" opacity="0.6"/>
        </g>
      ))}
      {/* Chart area */}
      <rect x="64" y="88" width="168" height="96" rx="10" fill="#1e293b"/>
      <rect x="72" y="96" width="60" height="5" rx="2.5" fill="white" opacity="0.3"/>
      {/* Bar chart */}
      {[30,45,25,55,40,50,35].map((h,i)=>(
        <rect key={i} x={78+i*20} y={160-h} width="12" height={h} rx="3" fill={a} opacity={0.3+i*0.08}/>
      ))}
      {/* Line */}
      <polyline points="78,140 98,125 118,145 138,115 158,130 178,112 198,120" stroke={a} strokeWidth="2" fill="none" opacity="0.8"/>
      {[78,98,118,138,158,178,198].map((x,i)=>{
        const ys=[140,125,145,115,130,112,120];
        return <circle key={i} cx={x} cy={ys[i]} r="3" fill={a}/>;
      })}
      {/* Right panel */}
      <rect x="240" y="88" width="80" height="96" rx="10" fill="#1e293b"/>
      <rect x="248" y="97" width="40" height="4" rx="2" fill="white" opacity="0.3"/>
      {[0,1,2,3].map(i=>(
        <g key={i}>
          <rect x="248" y={110+i*18} width={16+i*8} height="7" rx="3" fill={a} opacity={0.3+i*0.1}/>
          <rect x={270+i*5} y={110+i*18} width={30-i*5} height="7" rx="3" fill="white" opacity="0.08"/>
        </g>
      ))}
    </svg>
  );
}

function MockupLanding({ accent }) {
  const a = accent;
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" fill="#0d0617"/>
      {/* Glow */}
      <ellipse cx="160" cy="80" rx="100" ry="50" fill={a} fillOpacity="0.08"/>
      {/* Nav */}
      <rect width="320" height="28" fill="#1a0a2e" fillOpacity="0.8"/>
      <rect x="16" y="10" width="40" height="8" rx="4" fill={a} opacity="0.7"/>
      {[100,130,160,190].map((x,i)=>(
        <rect key={i} x={x} y="12" width="20" height="4" rx="2" fill="white" opacity="0.25"/>
      ))}
      <rect x="270" y="8" width="40" height="12" rx="6" fill={a}/>
      {/* Hero */}
      <rect x="80" y="44" width="160" height="8" rx="4" fill="white" opacity="0.12"/>
      <rect x="50" y="58" width="220" height="18" rx="6" fill="white" opacity="0.9"/>
      <rect x="70" y="82" width="180" height="10" rx="5" fill="white" opacity="0.55"/>
      <rect x="90" y="100" width="140" height="8" rx="4" fill="white" opacity="0.3"/>
      {/* CTA buttons */}
      <rect x="90" y="118" width="65" height="22" rx="11" fill={a}/>
      <rect x="165" y="118" width="65" height="22" rx="11" fill="transparent" stroke={a} strokeWidth="1.5" strokeOpacity="0.6"/>
      <rect x="98" y="124" width="49" height="10" rx="5" fill="white" opacity="0.8"/>
      <rect x="173" y="124" width="49" height="10" rx="5" fill={a} opacity="0.7"/>
      {/* Cards bottom */}
      {[0,1,2].map(i=>(
        <rect key={i} x={16+i*100} y="152" width="88" height="36" rx="8" fill="#1a0a2e" stroke={a} strokeWidth="0.5" strokeOpacity="0.4"/>
      ))}
      {[0,1,2].map(i=>(
        <rect key={i} x={24+i*100} y="162" width="24" height="5" rx="2.5" fill={a} opacity="0.7"/>
      ))}
      {[0,1,2].map(i=>(
        <rect key={i} x={24+i*100} y="173" width="60" height="4" rx="2" fill="white" opacity="0.2"/>
      ))}
    </svg>
  );
}

function MockupEcommerce({ accent }) {
  const a = accent;
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" fill="#061a1a"/>
      {/* Nav */}
      <rect width="320" height="30" fill="#0a2828"/>
      <rect x="16" y="11" width="50" height="8" rx="4" fill={a} opacity="0.8"/>
      <rect x="100" y="13" width="120" height="5" rx="2.5" fill="white" opacity="0.15"/>
      <rect x="266" y="9" width="40" height="12" rx="6" fill={a} opacity="0.8"/>
      <circle cx="252" cy="15" r="6" fill="white" fillOpacity="0.15"/>
      {/* Hero banner */}
      <rect x="10" y="40" width="200" height="80" rx="10" fill="#0f3333"/>
      <rect x="20" y="52" width="60" height="6" rx="3" fill={a} opacity="0.6"/>
      <rect x="20" y="64" width="120" height="12" rx="4" fill="white" opacity="0.8"/>
      <rect x="20" y="82" width="100" height="7" rx="3" fill="white" opacity="0.35"/>
      <rect x="20" y="100" width="70" height="14" rx="7" fill={a}/>
      {/* Product image area in banner */}
      <ellipse cx="175" cy="80" rx="30" ry="32" fill={a} fillOpacity="0.15"/>
      <rect x="155" y="55" width="40" height="50" rx="8" fill={a} fillOpacity="0.25" stroke={a} strokeWidth="1" strokeOpacity="0.5"/>
      {/* Side cards */}
      <rect x="220" y="40" width="90" height="38" rx="8" fill="#0f3333"/>
      <rect x="228" y="48" width="50" height="5" rx="2.5" fill={a} opacity="0.7"/>
      <rect x="228" y="59" width="40" height="5" rx="2.5" fill="white" opacity="0.5"/>
      <rect x="272" y="58" width="30" height="14" rx="7" fill={a} fillOpacity="0.3" stroke={a} strokeWidth="1" strokeOpacity="0.5"/>
      <rect x="220" y="84" width="90" height="38" rx="8" fill="#0f3333"/>
      <rect x="228" y="92" width="40" height="5" rx="2.5" fill={a} opacity="0.5"/>
      <rect x="228" y="103" width="55" height="5" rx="2.5" fill="white" opacity="0.4"/>
      {/* Product grid */}
      {[0,1,2,3].map(i=>(
        <g key={i}>
          <rect x={10+i*78} y="132" width="70" height="58" rx="8" fill="#0f3333"/>
          <rect x={10+i*78} y="132" width="70" height="32" rx="8" fill={a} fillOpacity={0.1+i*0.04}/>
          <rect x={18+i*78} y="170" width="35" height="5" rx="2.5" fill="white" opacity="0.5"/>
          <rect x={18+i*78} y="180" width="25" height="5" rx="2.5" fill={a} opacity="0.8"/>
        </g>
      ))}
    </svg>
  );
}

function ProjectMockup({ type, accent }) {
  if (type === "dashboard") return <MockupDashboard accent={accent} />;
  if (type === "landing") return <MockupLanding accent={accent} />;
  if (type === "ecommerce") return <MockupEcommerce accent={accent} />;
  return null;
}

/* ─────────────────────────────────────────
   ICONS
───────────────────────────────────────── */
const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

function SiteIcon({ size = 32, rounded = "rounded-lg", className = "" }) {
  const [err, setErr] = useState(false);
  return err ? (
    <div className={`${rounded} flex items-center justify-center font-bold text-white shrink-0 ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.3, background: "linear-gradient(135deg,#3B82F6,#8B5CF6)" }}>
      HJ
    </div>
  ) : (
    <img src="/assets/icon.svg" alt="Logo" onError={() => setErr(true)}
      className={`${rounded} object-contain shrink-0 ${className}`}
      style={{ width: size, height: size }}/>
  );
}

function SocialIcon({ name, size = 22 }) {
  const map = {
    Email:    "/assets/tools/gmail.png",
    LinkedIn: "/assets/tools/linkedin.png",
    Figma:    "/assets/tools/figma.png",
    GitHub:   "/assets/tools/github.png",
  };
  const [err, setErr] = useState(false);
  return err ? (
    <span style={{ fontSize: size * 0.85 }}>🔗</span>
  ) : (
    <img src={map[name] || ""} alt={name} onError={() => setErr(true)}
      style={{ width: size, height: size }} className="object-contain"/>
  );
}

/* ─────────────────────────────────────────
   THEME TOKENS
───────────────────────────────────────── */
function useTheme(dark) {
  return {
    bg:          dark ? "#080808"                      : "#f4f4f0",
    bgSurface:   dark ? "#111111"                      : "#ffffff",
    bgCard:      dark ? "rgba(255,255,255,0.03)"       : "rgba(255,255,255,0.85)",
    bgCardHover: dark ? "rgba(255,255,255,0.055)"      : "rgba(255,255,255,1)",
    border:      dark ? "rgba(255,255,255,0.07)"       : "rgba(0,0,0,0.09)",
    borderHover: dark ? "rgba(255,255,255,0.14)"       : "rgba(0,0,0,0.18)",
    text:        dark ? "#f0f0ee"                      : "#111111",
    textSub:     dark ? "rgba(240,240,238,0.45)"       : "rgba(17,17,17,0.5)",
    textMuted:   dark ? "rgba(240,240,238,0.25)"       : "rgba(17,17,17,0.3)",
    navBg:       dark ? "rgba(8,8,8,0.8)"              : "rgba(244,244,240,0.85)",
    subtle:      dark ? "rgba(255,255,255,0.06)"       : "rgba(0,0,0,0.07)",
    inputBg:     dark ? "rgba(255,255,255,0.04)"       : "rgba(0,0,0,0.04)",
    divider:     dark ? "rgba(255,255,255,0.06)"       : "rgba(0,0,0,0.08)",
  };
}

/* ─────────────────────────────────────────
   PROJECT CARD (expanded)
───────────────────────────────────────── */
function ProjectCard({ p, i, t }) {
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
      {/* Hover glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 20% 40%, ${p.color}12, transparent 65%)` }}
      />

      <div className="flex flex-col lg:flex-row">
        {/* Mockup preview */}
        <div className="relative lg:w-[380px] shrink-0 overflow-hidden"
          style={{ minHeight: 200 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, transparent 55%, ${p.color}20)`,
            }}
          />
          {/* Number badge */}
          <div className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold"
            style={{ background: `${p.color}22`, border: `1px solid ${p.color}40`, color: p.color }}
          >
            {p.num}
          </div>
          {/* Year badge */}
          <div className="absolute top-4 right-4 z-20 text-[11px] font-mono font-medium px-2.5 py-1 rounded-full"
            style={{ background: "rgba(0,0,0,0.4)", color: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)" }}
          >
            {p.year}
          </div>

          {/* Mockup SVG */}
          <motion.div
            animate={{ scale: hovered ? 1.03 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full"
            style={{ minHeight: 200 }}
          >
            <ProjectMockup type={p.mockupType} accent={p.mockupAccent} />
          </motion.div>

          {/* Bottom shine */}
          <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h3 className="text-[20px] font-bold tracking-tight" style={{ color: t.text }}>{p.title}</h3>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}30` }}
              >{p.tag}</span>
            </div>
            <p className="text-[14px] leading-relaxed mb-5" style={{ color: t.textSub }}>{p.desc}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((tech, ti) => (
                <span key={ti} className="text-[11px] font-medium px-2.5 py-1 rounded-lg"
                  style={{ background: t.subtle, color: t.textSub, border: `1px solid ${t.border}` }}
                >{tech}</span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: p.color }} />
              <span className="text-[12px] font-medium" style={{ color: t.textMuted }}>Live Project</span>
            </div>
            <motion.div
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 text-[13px] font-semibold"
              style={{ color: p.color }}
            >
              Lihat Detail
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}
              >→</div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   APP
───────────────────────────────────────── */
export default function App() {
  const [dark, setDark] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const t = useTheme(dark);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60 });
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className="min-h-screen transition-colors duration-500 relative overflow-x-hidden"
      style={{
        background: t.bg,
        color: t.text,
        fontFamily: "'DM Sans','Helvetica Neue',sans-serif",
      }}
    >
      {/* ── CURSOR GLOW ── */}
      <div className="fixed w-48 h-48 rounded-full blur-3xl pointer-events-none z-50 transition"
        style={{ top: mouse.y - 96, left: mouse.x - 96, background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
      />

      {/* ── BG GLOWS ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)" }}/>
        <div className="absolute top-[50%] right-[-10%] w-[35vw] h-[35vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" }}/>
        <div className="absolute bottom-[-5%] left-[30%] w-[30vw] h-[30vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)" }}/>

        {/* Light mode grain texture */}
        {!dark && (
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        )}
      </div>

      {/* ══════════════════════════════
          NAVBAR
      ══════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: t.navBg,
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${t.border}`,
        }}
      >
        <div className="mx-auto px-6 md:px-14 py-3.5 flex justify-between items-center max-w-6xl">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollTo("home")}
          >
            <SiteIcon size={34} rounded="rounded-xl" />
            <span className="font-bold text-[15px] tracking-tight" style={{ color: t.text }}>My Profile</span>
          </motion.div>

          <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex gap-8 text-[13px] font-medium"
            style={{ color: t.textMuted }}
          >
            {["Home", "About", "Projects", "Contact"].map((item, i) => (
              <li key={i}
                className="relative group cursor-pointer transition-colors duration-200 hover:text-blue-500"
                onClick={() => scrollTo(item.toLowerCase())}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"/>
              </li>
            ))}
          </motion.ul>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <button onClick={() => setDark(!dark)} aria-label="Toggle dark mode"
              className="relative w-[52px] h-[28px] rounded-full flex items-center px-[3px] transition-all duration-300"
              style={{
                background: dark ? "rgba(59,130,246,0.2)" : "rgba(0,0,0,0.08)",
                border: dark ? "1px solid rgba(59,130,246,0.35)" : "1px solid rgba(0,0,0,0.12)",
              }}
            >
              <span className="absolute left-1.5 text-yellow-500 transition-opacity duration-200" style={{ opacity: dark ? 0 : 1 }}><SunIcon/></span>
              <span className="absolute right-1.5 text-blue-300 transition-opacity duration-200" style={{ opacity: dark ? 1 : 0 }}><MoonIcon/></span>
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
                    <motion.span key="moon" initial={{ opacity: 0, rotate: -30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 30 }} transition={{ duration: 0.15 }} className="flex text-white"><MoonIcon/></motion.span>
                  ) : (
                    <motion.span key="sun" initial={{ opacity: 0, rotate: 30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -30 }} transition={{ duration: 0.15 }} className="flex text-yellow-500"><SunIcon/></motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </button>

            <button onClick={() => scrollTo("contact")}
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 w-fit px-4 py-1.5 rounded-full"
          style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"/>
          <span className="text-[12px] font-medium text-blue-400 tracking-wide">Open to Work · Freelance & Full-time</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[12px] font-semibold mb-2 tracking-[0.2em] uppercase" style={{ color: t.textMuted }}>Hi, saya</p>
            <h1 className="text-[clamp(2.4rem,5.5vw,4.6rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-3"
              style={{ color: t.text }}>
              Haryo Mahendra Jati
            </h1>
            <h2 className="text-[clamp(1.1rem,2.3vw,1.7rem)] font-semibold mb-6"
              style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              <Typewriter words={["Frontend Developer", "UI/UX Designer", "Digital Product Builder"]} loop cursor cursorStyle="|"/>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-md mb-10" style={{ color: t.textSub }}>
              2+ tahun membangun website modern & produk digital yang memadukan estetika dan performa tinggi — dari desain Figma hingga kode production.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <button onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)", boxShadow: "0 0 24px rgba(59,130,246,0.3)" }}
              >Lihat Portfolio →</button>
              <a href="/public/assets/document/CV_HaryoMJ.pdf" download
                className="flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-300 hover:scale-105"
                style={{ border: `1px solid ${t.border}`, color: t.textSub, background: t.bgCard }}
              >↓ Download CV</a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { icon: "📍", text: "Madiun, Indonesia" },
                { icon: "🎓", text: "D4 Sistem Informasi Bisnis" },
                { icon: "💼", text: "1+ Tahun Pengalaman" },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-sm">{icon}</span>
                  <span className="text-[13px]" style={{ color: t.textMuted }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Avatar card */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="flex justify-center relative"
          >
            <div className="absolute w-72 h-72 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)" }}/>

            <div className="relative z-10 w-64 h-64 rounded-3xl flex flex-col items-center justify-center gap-4"
              style={{
                background: t.bgCard,
                border: `1px solid ${t.border}`,
                backdropFilter: "blur(16px)",
                boxShadow: dark ? "0 8px 40px rgba(0,0,0,0.4)" : "0 8px 40px rgba(0,0,0,0.08)",
              }}
            >
              <SiteIcon size={80} rounded="rounded-2xl"/>
              <div className="text-center">
                <p className="text-[15px] font-bold tracking-tight" style={{ color: t.text }}>Haryo M. Jati</p>
                <p className="text-[11px] mt-0.5 tracking-wide" style={{ color: t.textMuted }}>Frontend Dev & UI/UX</p>
              </div>
              <div className="flex gap-8 pt-3 mt-1 w-full justify-center" style={{ borderTop: `1px solid ${t.divider}` }}>
                {[{ val: "15+", label: "Projects" }, { val: "8+", label: "Clients" }].map(({ val, label }, i) => (
                  <div key={i} className="text-center">
                    <p className="text-[18px] font-bold"
                      style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    >{val}</p>
                    <p className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: t.textMuted }}>{label}</p>
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
          <div className="flex-1 h-[1px] max-w-xs" style={{ background: t.subtle }}/>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div data-aos="fade-right">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight mb-5" style={{ color: t.text }}>
              Saya membuat produk{" "}
              <span style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                digital yang nyata.
              </span>
            </h2>
            <p className="text-[15px] leading-loose mb-4" style={{ color: t.textSub }}>
              Saya adalah Frontend Developer & UI/UX Designer dengan pengalaman 2+ tahun membantu startup dan perusahaan membangun produk digital yang tidak hanya indah secara visual, tapi juga berkinerja tinggi.
            </p>
            <p className="text-[14px] leading-loose" style={{ color: t.textMuted }}>
              Latar belakang saya di desain & development memberikan perspektif unik — saya bisa menjembatani kebutuhan bisnis dengan solusi teknis yang elegan.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="p-5 rounded-2xl relative overflow-hidden"
                  style={{ background: t.bgCard, border: `1px solid ${t.border}` }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                    style={{ background: `linear-gradient(180deg,${exp.color},transparent)` }}/>
                  <div className="pl-2">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-[14px] font-bold" style={{ color: t.text }}>{exp.role}</p>
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full text-blue-400"
                        style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
                      >{exp.period}</span>
                    </div>
                    <p className="text-[12px] font-semibold text-blue-500 mb-1.5">{exp.company}</p>
                    <p className="text-[13px] leading-relaxed" style={{ color: t.textMuted }}>{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left">
            {/* Avatar spinning ring */}
            <div className="flex justify-center mb-10">
              <div className="relative w-52 h-52">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-3xl"
                  style={{ background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)", padding: 2 }}
                >
                  <div className="w-full h-full rounded-3xl" style={{ background: t.bgSurface }}/>
                </motion.div>
                <div className="absolute inset-[3px] rounded-3xl flex flex-col items-center justify-center gap-2"
                  style={{ background: t.bgSurface }}
                >
                  <SiteIcon size={64} rounded="rounded-xl"/>
                  <p className="text-[13px] font-bold mt-1" style={{ color: t.text }}>Haryo M. Jati</p>
                  <p className="text-[11px] tracking-wide" style={{ color: t.textMuted }}>UI Engineer</p>
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

            {/* Skills */}
            <div className="flex flex-col gap-4">
              <p className="text-[11px] uppercase tracking-[0.2em] mb-1 font-semibold" style={{ color: t.textMuted }}>Tech Skills</p>
              {SKILLS.map((s, i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={i * 60}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[13px] font-medium" style={{ color: t.textSub }}>{s.name}</span>
                    <span className="text-[12px] font-mono tabular-nums" style={{ color: t.textMuted }}>{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: t.divider }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg,${s.color},${s.color}99)` }}
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
          <div className="flex-1 h-[1px] max-w-xs" style={{ background: t.subtle }}/>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12" data-aos="fade-up">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight" style={{ color: t.text }}>
            Selected Projects
          </h2>
          <p className="text-[13px] max-w-xs text-right" style={{ color: t.textMuted }}>Karya pilihan dari project yang telah selesai.</p>
        </div>

        <div className="flex flex-col gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} p={p} i={i} t={t}/>
          ))}
        </div>

        <div className="text-center mt-10" data-aos="fade-up">
          <button className="text-[13px] font-medium transition-colors duration-200 inline-flex items-center gap-1.5 hover:text-blue-500"
            style={{ color: t.textMuted }}
          >
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
          <div className="flex-1 h-[1px] max-w-xs" style={{ background: t.subtle }}/>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div data-aos="fade-right">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight mb-5" style={{ color: t.text }}>
              Mari kita buat sesuatu{" "}
              <span style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                bersama.
              </span>
            </h2>
            <p className="text-[15px] leading-loose mb-8" style={{ color: t.textSub }}>
              Terbuka untuk peluang full-time, freelance, maupun kolaborasi. Jangan ragu untuk menghubungi saya!
            </p>

            <div className="flex flex-col gap-3">
              {[
                { name: "Email",    label: "Email",    value: "haryomahendra41@gmail.com",     href: "mailto:haryomahendra41@gmail.com" },
                { name: "LinkedIn", label: "LinkedIn", value: "linkedin.com/in/haryomahendra", href: "https://www.linkedin.com/in/haryomahendra/" },
                { name: "Figma",    label: "Figma",    value: "figma.com/haryomahendra",       href: "https://www.figma.com/files/team/1263742957969981377/all-projects/" },
                { name: "GitHub",   label: "GitHub",   value: "github.com/HaryoMahendra",      href: "https://github.com/HaryoMahendra" },
              ].map(({ name, label, value, href }, i) => (
                <motion.a key={i} href={href} target={name !== "Email" ? "_blank" : undefined} rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer group transition-all duration-200"
                  style={{ background: t.bgCard, border: `1px solid ${t.border}`, textDecoration: "none" }}
                  data-aos="fade-up" data-aos-delay={i * 80}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: t.inputBg, border: `1px solid ${t.border}` }}
                  >
                    <SocialIcon name={name} size={22}/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-widest font-semibold mb-0.5" style={{ color: t.textMuted }}>{label}</p>
                    <p className="text-[13px] font-medium truncate group-hover:text-blue-500 transition-colors" style={{ color: t.textSub }}>{value}</p>
                  </div>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:text-blue-400 transition-all duration-200 shrink-0"
                    style={{ border: `1px solid ${t.border}`, color: t.textMuted }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div data-aos="fade-left">
            <div className="p-8 rounded-3xl" style={{ background: t.bgCard, border: `1px solid ${t.border}` }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6" style={{ color: t.textMuted }}>Kirim Pesan</p>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Nama", type: "text", placeholder: "John Doe" },
                    { label: "Email", type: "email", placeholder: "john@company.com" },
                  ].map(({ label, type, placeholder }, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest" style={{ color: t.textMuted }}>{label}</label>
                      <input type={type} placeholder={placeholder}
                        className="w-full px-4 py-3 rounded-xl text-[13px] outline-none transition-all duration-200"
                        style={{
                          background: t.inputBg,
                          border: `1px solid ${t.border}`,
                          color: t.textSub,
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.45)")}
                        onBlur={(e) => (e.target.style.borderColor = t.border)}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest" style={{ color: t.textMuted }}>Perusahaan / Topik</label>
                  <input type="text" placeholder="PT Contoh / Project Website"
                    className="w-full px-4 py-3 rounded-xl text-[13px] outline-none transition-all duration-200"
                    style={{ background: t.inputBg, border: `1px solid ${t.border}`, color: t.textSub }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.45)")}
                    onBlur={(e) => (e.target.style.borderColor = t.border)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest" style={{ color: t.textMuted }}>Pesan</label>
                  <textarea placeholder="Ceritakan project atau kebutuhan Anda..." rows={4}
                    className="w-full px-4 py-3 rounded-xl text-[13px] outline-none resize-none transition-all duration-200"
                    style={{ background: t.inputBg, border: `1px solid ${t.border}`, color: t.textSub }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.45)")}
                    onBlur={(e) => (e.target.style.borderColor = t.border)}
                  />
                </div>

                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit"
                  className="w-full py-3.5 rounded-xl text-[14px] font-bold text-white tracking-wide"
                  style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)", boxShadow: "0 0 28px rgba(59,130,246,0.25)" }}
                >Kirim Pesan →</motion.button>

                <p className="text-[11px] text-center" style={{ color: t.textMuted }}>Biasanya saya membalas dalam 1–2 hari kerja.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <footer className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 py-8" style={{ borderTop: `1px solid ${t.divider}` }}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[12px]" style={{ color: t.textMuted }}>
          <div className="flex items-center gap-2.5">
            <SiteIcon size={22} rounded="rounded-md"/>
            <span>© 2026 Haryo M. Jati. All rights reserved.</span>
          </div>
          <p>Frontend Developer & UI/UX Designer · Madiun, Indonesia</p>
        </div>
      </footer>
    </div>
  );
}