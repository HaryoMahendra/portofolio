import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export function HeroSection({ t, scrollTo }) {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-14 max-w-6xl mx-auto pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 mb-8 w-fit px-4 py-1.5 rounded-full"
        style={{
          background: "rgba(59,130,246,0.08)",
          border: "1px solid rgba(59,130,246,0.2)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-[12px] font-medium text-blue-400 tracking-wide">
          Open to Work · Freelance & Full-time
        </span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-[12px] font-semibold mb-2 tracking-[0.2em] uppercase"
            style={{ color: t.textMuted }}
          >
            Hi, saya
          </p>
          <h1
            className="text-[clamp(2.4rem,5.5vw,4.6rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-3"
            style={{ color: t.text }}
          >
            Haryo Mahendra Jati
          </h1>
          <h2
            className="text-[clamp(1.1rem,2.3vw,1.7rem)] font-semibold mb-6"
            style={{
              background: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <Typewriter
              words={[
                "UI/UX Designer",
                "Frontend Developer",
                "Testing System",
                "Business Process Analyst",
              ]}
              loop
              cursor
              cursorStyle="|"
            />
          </h2>
          <p
            className="text-[15px] leading-relaxed max-w-md mb-10"
            style={{ color: t.textSub }}
          >
            Fresh graduate Sistem Informasi Bisnis yang membangun produk digital
            dari desain Figma hingga implementasi — didukung pengalaman magang
            dan proyek nyata.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => scrollTo("projects")}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg,#3B82F6,#8B5CF6)",
                boxShadow: "0 0 24px rgba(59,130,246,0.3)",
              }}
            >
              Lihat Portfolio →
            </button>
            <a
              href="/public/assets/document/CV_HaryoMJ.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-300 hover:scale-105"
              style={{
                border: `1px solid ${t.border}`,
                color: t.textSub,
                background: t.bgCard,
              }}
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
                <span className="text-[13px]" style={{ color: t.textMuted }}>
                  {text}
                </span>
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
          <div
            className="absolute w-72 h-72 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            }}
          />
          <div
            className="relative z-10 w-72 h-80 rounded-3xl flex flex-col items-center justify-center gap-4"
            style={{
              background: t.bgCard,
              border: `1px solid ${t.border}`,
              backdropFilter: "blur(16px)",
              boxShadow:
                t.text === "#f0f0ee"
                  ? "0 8px 40px rgba(0,0,0,0.4)"
                  : "0 8px 40px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="/assets/profile2.jpeg"
              alt="Haryo Mahendra"
              className="w-40 h-40 rounded-2xl object-cover object-top"
              style={{ border: `2px solid ${t.border}` }}
            />
            <div className="text-center">
              <p
                className="text-[15px] font-bold tracking-tight"
                style={{ color: t.text }}
              >
                Haryo Mahendra
              </p>
              <p
                className="text-[11px] mt-0.5 tracking-wide"
                style={{ color: t.textMuted }}
              >
                Frontend Dev & UI/UX
              </p>
            </div>
            <div
              className="flex gap-8 pt-3 mt-1 w-full justify-center"
              style={{ borderTop: `1px solid ${t.divider}` }}
            >
              {[{ val: "5+", label: "Projects" }].map(({ val, label }, i) => (
                <div key={i} className="text-center">
                  <p
                    className="text-[18px] font-bold"
                    style={{
                      background: "linear-gradient(135deg,#3B82F6,#8B5CF6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {val}
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-widest mt-0.5"
                    style={{ color: t.textMuted }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-0 right-0 text-[11px] font-medium px-3 py-1.5 rounded-full backdrop-blur-sm"
            style={{
              background: "rgba(59,130,246,0.12)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#93C5FD",
            }}
          >
            React · Next.js
          </motion.div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute bottom-2 left-0 text-[11px] font-medium px-3 py-1.5 rounded-full backdrop-blur-sm"
            style={{
              background: "rgba(139,92,246,0.12)",
              border: "1px solid rgba(139,92,246,0.25)",
              color: "#C4B5FD",
            }}
          >
            Figma · UI/UX
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
