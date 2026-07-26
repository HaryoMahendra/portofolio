import { motion } from "framer-motion";
import { Wrench, Code2, Database, Network } from "lucide-react";

const SERVICES = [
  {
    id: "IT-01",
    status: "Aktif",
    statusColor: "#22C55E",
    icon: Wrench,
    color: "#3B82F6",
    title: "IT Support & Troubleshooting",
    desc: "Menangani gangguan hardware, jaringan, dan sistem operasional rumah sakit secara harian, dari perangkat end-user hingga server.",
    tools: ["Windows Server", "Hardware", "Ticketing System"],
  },
  {
    id: "IT-02",
    status: "Aktif",
    statusColor: "#22C55E",
    icon: Code2,
    color: "#8B5CF6",
    title: "Pengembangan Aplikasi Internal",
    desc: "Membangun tools web internal — dari sistem helpdesk hingga scanner inventaris — untuk menyederhanakan proses kerja tim.",
    tools: ["Laravel", "React", "Tailwind CSS"],
  },
  {
    id: "IT-03",
    status: "Aktif",
    statusColor: "#22C55E",
    icon: Database,
    color: "#06B6D4",
    title: "Administrasi SIMRS & Database",
    desc: "Mengelola dan mengintegrasikan SIMRS Khanza, termasuk konektivitas BPJS/V-Claim dan pemeliharaan data operasional.",
    tools: ["SIMRS Khanza", "MySQL", "V-Claim API"],
  },
  {
    id: "IT-04",
    status: "Aktif",
    statusColor: "#22C55E",
    icon: Network,
    color: "#3B82F6",
    title: "Jaringan & Infrastruktur IT",
    desc: "Instalasi, konfigurasi, dan pemeliharaan jaringan serta perangkat IT agar operasional rumah sakit berjalan tanpa hambatan.",
    tools: ["Mikrotik", "LAN/WAN", "Server"],
  },
];

export function ServicesSection({ t }) {
  return (
    <section
      id="services"
      className="relative z-10 py-20 px-6 md:px-14 max-w-6xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-3" data-aos="fade-up">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">
          Services
        </span>
        <div
          className="flex-1 h-[1px] max-w-xs"
          style={{ background: t.subtle }}
        />
      </div>

      <h2
        data-aos="fade-up"
        className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight mb-4"
        style={{ color: t.text }}
      >
        Yang Bisa{" "}
        <span
          style={{
            background: "linear-gradient(90deg,#3B82F6,#8B5CF6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Saya Bantu.
        </span>
      </h2>

      <p
        data-aos="fade-up"
        className="text-[15px] leading-loose mb-12 max-w-2xl"
        style={{ color: t.textSub }}
      >
        Setiap hari saya menangani puluhan tiket — mulai dari gangguan
        perangkat, kebutuhan sistem, sampai jaringan. Berikut kategori
        layanan yang paling sering saya tangani.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.id}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{ background: t.bgCard, border: `1px solid ${t.border}` }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{
                  background: `linear-gradient(180deg,${s.color},transparent)`,
                }}
              />

              {/* Ticket header strip */}
              <div
                className="flex items-center justify-between px-5 py-2.5"
                style={{ borderBottom: `1px solid ${t.divider}` }}
              >
                <span
                  className="text-[11px] font-mono tracking-wider"
                  style={{ color: t.textMuted }}
                >
                  #{s.id}
                </span>
                <span
                  className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: s.statusColor }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: s.statusColor }}
                  />
                  {s.status}
                </span>
              </div>

              <div className="p-5 pl-6">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${s.color}1A`,
                    border: `1px solid ${s.color}33`,
                  }}
                >
                  <Icon size={18} style={{ color: s.color }} />
                </div>

                <p
                  className="text-[15px] font-bold mb-1.5"
                  style={{ color: t.text }}
                >
                  {s.title}
                </p>

                <p
                  className="text-[13px] leading-relaxed mb-4"
                  style={{ color: t.textMuted }}
                >
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {s.tools.map((tool, ti) => (
                    <span
                      key={ti}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                      style={{
                        color: t.textSub,
                        background: t.bgSurface,
                        border: `1px solid ${t.border}`,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}