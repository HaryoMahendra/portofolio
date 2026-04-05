import { useState } from "react";

const ICON_MAP = {
  Email:    "/assets/tools/gmail.png",
  LinkedIn: "/assets/tools/linkedin.png",
  Figma:    "/assets/tools/figma.png",
  GitHub:   "/assets/tools/github.png",
};

export function SocialIcon({ name, size = 22 }) {
  const [err, setErr] = useState(false);
  return err ? (
    <span style={{ fontSize: size * 0.85 }}>🔗</span>
  ) : (
    <img
      src={ICON_MAP[name] || ""}
      alt={name}
      onError={() => setErr(true)}
      style={{ width: size, height: size }}
      className="object-contain"
    />
  );
}
