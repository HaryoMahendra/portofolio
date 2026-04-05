export function useTheme(dark) {
  return {
    bg:          dark ? "#080808"                      : "#f7f6f2",
    bgSurface:   dark ? "#111111"                      : "#ffffff",
    bgCard:      dark ? "rgba(255,255,255,0.03)"       : "rgba(255,255,255,0.75)",
    bgCardHover: dark ? "rgba(255,255,255,0.055)"      : "rgba(255,255,255,0.95)",
    border:      dark ? "rgba(255,255,255,0.07)"       : "rgba(0,0,0,0.07)",
    borderHover: dark ? "rgba(255,255,255,0.14)"       : "rgba(0,0,0,0.13)",
    text:        dark ? "#f0f0ee"                      : "#1a1a1a",
    textSub:     dark ? "rgba(240,240,238,0.45)"       : "rgba(30,30,30,0.55)",
    textMuted:   dark ? "rgba(240,240,238,0.25)"       : "rgba(30,30,30,0.38)",
    navBg:       dark ? "rgba(8,8,8,0.8)"              : "rgba(247,246,242,0.88)",
    subtle:      dark ? "rgba(255,255,255,0.06)"       : "rgba(0,0,0,0.05)",
    inputBg:     dark ? "rgba(255,255,255,0.04)"       : "rgba(0,0,0,0.03)",
    divider:     dark ? "rgba(255,255,255,0.06)"       : "rgba(0,0,0,0.06)",
  };
}
