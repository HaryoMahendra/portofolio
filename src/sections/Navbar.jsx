import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SiteIcon } from "../components/SiteIcon";
import { SunIcon } from "../components/SunIcon";
import { MoonIcon } from "../components/MoonIcon";

const NAV_ITEMS = ["Home", "About", "Projects", "Contact"];

export function Navbar({ dark, setDark, t, activeSection, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (item) => {
    scrollTo(item.toLowerCase());
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: t.navBg,
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${t.border}`,
          boxShadow: "0 8px 30px rgba(59,130,246,0.06), 0 1px 0 rgba(139,92,246,0.08)",
        }}
      >
        <div className="mx-auto px-6 md:px-14 py-3.5 flex justify-between items-center max-w-6xl">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <SiteIcon size={34} rounded="rounded-xl" />
            <span className="font-bold text-[15px] tracking-tight" style={{ color: t.text }}>
              RyoDra
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-1 text-[13px] font-medium"
          >
            {NAV_ITEMS.map((item, i) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <li key={i} className="relative">
                  <motion.button
                    onClick={() => handleNav(item)}
                    className="relative px-4 py-2 rounded-full text-[13px] font-medium transition-colors duration-200 cursor-pointer"
                    style={{ color: isActive ? (dark ? "#f0f0ee" : "#1a1a1a") : t.textMuted }}
                    whileHover={{ color: "#3B82F6" }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item}</span>
                  </motion.button>
                </li>
              );
            })}
          </motion.ul>

          {/* Right — Toggle + Hamburger */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className="relative w-[52px] h-[28px] rounded-full flex items-center px-[3px] transition-all duration-300"
              style={{
                background: dark ? "rgba(59,130,246,0.2)" : "rgba(0,0,0,0.08)",
                border: dark ? "1px solid rgba(59,130,246,0.35)" : "1px solid rgba(0,0,0,0.12)",
              }}
            >
              <span className="absolute left-1.5 text-yellow-500 transition-opacity duration-200" style={{ opacity: dark ? 0 : 1 }}>
                <SunIcon />
              </span>
              <span className="absolute right-1.5 text-blue-300 transition-opacity duration-200" style={{ opacity: dark ? 1 : 0 }}>
                <MoonIcon />
              </span>
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
                    <motion.span key="moon" initial={{ opacity: 0, rotate: -30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 30 }} transition={{ duration: 0.15 }} className="flex text-white">
                      <MoonIcon />
                    </motion.span>
                  ) : (
                    <motion.span key="sun" initial={{ opacity: 0, rotate: 30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -30 }} transition={{ duration: 0.15 }} className="flex text-yellow-500">
                      <SunIcon />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-xl gap-[5px] transition-all duration-200"
              style={{
                background: menuOpen ? "rgba(59,130,246,0.1)" : "transparent",
                border: `1px solid ${menuOpen ? "rgba(59,130,246,0.3)" : t.border}`,
              }}
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                transition={{ duration: 0.2 }}
                className="block w-4 h-[1.5px] rounded-full"
                style={{ background: menuOpen ? "#3B82F6" : t.textMuted }}
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="block w-4 h-[1.5px] rounded-full"
                style={{ background: t.textMuted }}
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                transition={{ duration: 0.2 }}
                className="block w-4 h-[1.5px] rounded-full"
                style={{ background: menuOpen ? "#3B82F6" : t.textMuted }}
              />
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[57px] left-0 right-0 z-40 md:hidden px-4 py-3"
            style={{
              background: t.navBg,
              backdropFilter: "blur(20px)",
              borderBottom: `1px solid ${t.border}`,
              boxShadow: "0 8px 30px rgba(59,130,246,0.08)",
            }}
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleNav(item)}
                      className="w-full text-left px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-200"
                      style={{
                        color: isActive ? "#3B82F6" : t.textSub,
                        background: isActive ? "rgba(59,130,246,0.08)" : "transparent",
                        border: isActive ? "1px solid rgba(59,130,246,0.2)" : "1px solid transparent",
                      }}
                    >
                      {item}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}