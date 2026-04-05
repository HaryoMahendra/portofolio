import { useState } from "react";

export function SiteIcon({ size = 32, rounded = "rounded-lg", className = "" }) {
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
