import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowUpRight, Download } from "lucide-react";

export function HeroSection({ t, scrollTo }) {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-14 max-w-6xl mx-auto pt-24"
    >
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
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
                "IT Support",
                "System Analyst",
                "Business Process Analyst",
                "Frontend Developer",
                "Software Tester",
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
            Mengubah kebutuhan bisnis menjadi solusi digital melalui keahlian di
            bidang IT Support, analisis sistem, desain web, monitoring dan
            evaluasi sistem informasi, serta pengujian sistem dengan fokus pada
            solusi yang andal, efisien, dan berorientasi pada pengguna.
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
              Lihat Projects
              <ArrowUpRight size={16} />
            </button>
            <a
              href="/assets/document/CV_HaryoMJ.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium transition-all duration-300 hover:scale-105"
              style={{
                border: `1px solid ${t.border}`,
                color: t.textSub,
                background: t.bgCard,
              }}
            >
              Download CV
              <Download size={15} />
            </a>
          </div>
        </motion.div>

        {/* Foto — komposisi blob berlapis + orbit ring, foto bebas tanpa bingkai kartu */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex justify-center items-center min-h-[420px]"
        >
          {/* Lapisan blob aurora — 2 warna brand, arah & kecepatan beda supaya terasa hidup */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.08, 1] }}
            transition={{
              rotate: { repeat: Infinity, duration: 22, ease: "linear" },
              scale: { repeat: Infinity, duration: 7, ease: "easeInOut" },
            }}
            className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-[42%_58%_65%_35%/45%_40%_60%_55%] blur-2xl"
            style={{
              background: "linear-gradient(135deg,#3B82F6,#8B5CF6)",
              opacity: 0.55,
            }}
          />
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.1, 1] }}
            transition={{
              rotate: { repeat: Infinity, duration: 28, ease: "linear" },
              scale: {
                repeat: Infinity,
                duration: 9,
                ease: "easeInOut",
                delay: 1,
              },
            }}
            className="absolute w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-[60%_40%_35%_65%/55%_60%_40%_45%] blur-2xl"
            style={{
              background: "linear-gradient(135deg,#06B6D4,#3B82F6)",
              opacity: 0.4,
            }}
          />

          {/* Grid dot halus untuk tekstur, sangat subtle */}
          <div
            className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              borderRadius: "50%",
              maskImage: "radial-gradient(circle, black 55%, transparent 75%)",
            }}
          />

          {/* Orbit ring — cincin putus-putus dengan titik status berjalan */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
            className="absolute w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full"
            style={{ border: `1.5px dashed ${t.border}` }}
          >
            <span
              className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
              style={{
                background: "#22C55E",
                boxShadow: "0 0 10px 2px rgba(34,197,94,0.6)",
              }}
            />
          </motion.div>

          {/* Foto */}
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img
              src="/assets/profilee.png"
              alt="Haryo Mahendra"
              className="w-[260px] md:w-[300px] h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
