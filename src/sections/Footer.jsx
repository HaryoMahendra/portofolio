import { SiteIcon } from "../components/SiteIcon";

export function Footer({ t }) {
  return (
    <footer
      className="relative z-10 w-full"
      style={{
        borderTop: `1px solid ${t.divider}`,
        boxShadow: "0 -8px 30px rgba(59,130,246,0.06), 0 -1px 0 rgba(139,92,246,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-14 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Kiri — Brand */}
          <div className="flex items-center gap-3">
            <SiteIcon size={28} rounded="rounded-lg" />
            <div>
              <p className="text-[13px] font-semibold" style={{ color: t.text }}>
                Haryo Mahendra
              </p>
              <p className="text-[11px]" style={{ color: t.textMuted }}>
                Design · Development · Testing
              </p>
            </div>
          </div>

          {/* Tengah — Tagline */}
          <p className="text-[12px] text-center" style={{ color: t.textMuted }}>
            Membangun produk digital yang fungsional dan bermakna.
          </p>

          {/* Kanan — Copyright */}
          <p className="text-[11px]" style={{ color: t.textMuted }}>
            © 2026 Haryo Mahendra. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}