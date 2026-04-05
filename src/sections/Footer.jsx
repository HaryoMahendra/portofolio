import { SiteIcon } from "../components/SiteIcon";

export function Footer({ t }) {
  return (
    <footer
      className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 py-8"
      style={{ borderTop: `1px solid ${t.divider}` }}
    >
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-3 text-[12px]"
        style={{ color: t.textMuted }}
      >
        <div className="flex items-center gap-2.5">
          <SiteIcon size={22} rounded="rounded-md" />
          <span>© 2026 Haryo Mahendra. All rights reserved.</span>
        </div>
        <p>Frontend Developer & UI/UX Designer · Madiun, Indonesia</p>
      </div>
    </footer>
  );
}
