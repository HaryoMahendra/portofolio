import { useState } from "react";

export function TopicChip({ label, t }) {
  const [active, setActive] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setActive(!active)}
      className="text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all duration-200"
      style={{
        background: active ? "rgba(59,130,246,0.15)" : t.inputBg,
        border: active ? "1px solid rgba(59,130,246,0.45)" : `1px solid ${t.border}`,
        color: active ? "#60A5FA" : t.textMuted,
      }}
    >
      {label}
    </button>
  );
}
