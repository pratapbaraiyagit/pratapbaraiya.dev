"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#about",      label: "About" },
  { href: "#skills",     label: "Skills" },
  { href: "#projects",   label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [active, setActive]       = useState("");
  const menuRef                   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "all 0.3s ease",
          background: scrolled ? "var(--nav-bg, rgba(255,255,255,0.88))" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

          {/* Logo */}
          <button onClick={() => scrollTo("#hero")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              boxShadow: "0 4px 14px rgba(37,99,235,.4)",
            }}>
              <span style={{ color: "#fff", fontFamily: "var(--font-space-grotesk)", fontWeight: 800, fontSize: 14, letterSpacing: "-0.02em" }}>PB</span>
            </div>
            <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 17, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              Pratap<span style={{ color: "#2563eb" }}>.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
            {NAV.map(({ href, label }) => {
              const isActive = active === href;
              return (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  style={{
                    padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer",
                    fontSize: 14, fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#2563eb" : "var(--text-secondary)",
                    backgroundColor: isActive ? "rgba(37,99,235,.1)" : "transparent",
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <ThemeToggle />
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden-mobile"
              style={{
                padding: "9px 20px", borderRadius: 10, cursor: "pointer", border: "none",
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                color: "#fff", fontWeight: 700, fontSize: 13,
                boxShadow: "0 4px 14px rgba(37,99,235,.35)",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(37,99,235,.5)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(37,99,235,.35)"; }}
            >
              Hire Me
            </button>
            {/* Mobile menu btn */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="show-mobile"
              style={{
                width: 38, height: 38, borderRadius: 9, display: "none", alignItems: "center", justifyContent: "center",
                background: "var(--bg-card)", border: "1px solid var(--border)",
                color: "var(--text-secondary)", cursor: "pointer",
              }}
              aria-label="Toggle menu"
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 40, background: "rgba(0,0,0,.6)",
            backdropFilter: "blur(4px)",
          }}
        />
      )}

      {/* Mobile drawer */}
      <div
        ref={menuRef}
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0, width: 280, zIndex: 55,
          background: "var(--bg-card)",
          borderLeft: "1px solid var(--border)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
          boxShadow: "var(--shadow-xl)",
          padding: 24,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, color: "var(--text-primary)" }}>Menu</span>
          <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer" }}>
            <X size={20} />
          </button>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV.map(({ href, label }, i) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              style={{
                textAlign: "left", padding: "13px 16px", borderRadius: 10, border: "none",
                cursor: "pointer", fontSize: 15, fontWeight: 500,
                color: active === href ? "#2563eb" : "var(--text-secondary)",
                backgroundColor: active === href ? "rgba(37,99,235,.1)" : "transparent",
              }}
            >
              <span style={{ color: "var(--text-muted)", fontSize: 11, marginRight: 12, fontFamily: "monospace" }}>0{i+1}.</span>
              {label}
            </button>
          ))}
        </nav>
        <div style={{ marginTop: "auto", paddingTop: 24 }}>
          <button
            onClick={() => scrollTo("#contact")}
            style={{
              width: "100%", padding: "13px", borderRadius: 12, border: "none", cursor: "pointer",
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              color: "#fff", fontWeight: 700, fontSize: 14,
            }}
          >
            Hire Me
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
