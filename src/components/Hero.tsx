"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, Download, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

const TITLES = ["React.js Developer", "Frontend Developer", "MERN Stack Developer", "Next.js Engineer"];

function useTypewriter(words: string[], speed = 75, pause = 2200) {
  const [text, setText] = useState(words[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const ref = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    const delay = deleting ? speed / 1.5 : speed;
    ref.current = setTimeout(() => {
      if (!deleting && text === current) {
        ref.current = setTimeout(() => setDeleting(true), pause);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, delay);
    return () => { if (ref.current) clearTimeout(ref.current); };
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(TITLES);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* ── Animated Gradient Orbs ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} aria-hidden>
        {/* Blue orb */}
        <div
          className="animate-float1"
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Purple orb */}
        <div
          className="animate-float2"
          style={{
            position: "absolute",
            bottom: "5%",
            right: "-5%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Cyan orb */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "55%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 24px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 64,
            flexWrap: "wrap",
          }}
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ flex: "1 1 480px", minWidth: 0 }}
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{ marginBottom: 28 }}
            >
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "7px 16px", borderRadius: 999,
                border: "1px solid rgba(16,185,129,.3)",
                background: "rgba(16,185,129,.08)",
                fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase",
                color: "#10b981",
              }}>
                <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
                  <span style={{
                    position: "absolute", inset: 0, borderRadius: "50%",
                    background: "#10b981", opacity: 0.7,
                    animation: "pulse-ring 2s ease-in-out infinite",
                  }} />
                  <span style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: "#10b981", display: "block",
                  }} />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(42px, 6vw, 76px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: "var(--text-primary)",
                marginBottom: 16,
              }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Pratap</span>
              <br />
              <span style={{ color: "var(--text-primary)" }}>Baraiya</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                display: "flex", alignItems: "center", gap: 0,
                marginBottom: 24, minHeight: 44,
              }}
            >
              <span style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(18px, 2.5vw, 26px)",
                fontWeight: 600,
                color: "var(--text-secondary)",
                letterSpacing: "-0.02em",
              }}>
                {typed}
                <span style={{
                  display: "inline-block",
                  width: 3,
                  height: "1em",
                  background: "#2563eb",
                  verticalAlign: "middle",
                  marginLeft: 2,
                  borderRadius: 2,
                  animation: "blink 1s step-end infinite",
                }} />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                maxWidth: 520,
                marginBottom: 36,
              }}
            >
              Passionate software developer with{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>~5 years of experience</strong>{" "}
              crafting scalable, performant web applications. I turn complex ideas into clean, elegant code.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}
            >
              <button onClick={() => scrollTo("#contact")} className="btn-primary" style={{ fontSize: 15, padding: "14px 32px" }}>
                <Sparkles size={16} />
                <span>Hire Me</span>
              </button>
              <a href={personalInfo.resumeUrl} download className="btn-secondary" style={{ fontSize: 15, padding: "13px 28px" }}>
                <Download size={16} />
                <span>Resume</span>
              </a>
              <button onClick={() => scrollTo("#projects")} className="btn-secondary" style={{ fontSize: 15, padding: "13px 24px" }}>
                <span>Projects</span>
                <ArrowRight size={15} />
              </button>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--text-muted)", fontWeight: 600 }}>
                Connect
              </span>
              <div style={{ width: 32, height: 1, background: "var(--border-strong)" }} />
              {[
                { icon: GithubIcon,   href: personalInfo.github,              label: "GitHub" },
                { icon: LinkedinIcon, href: personalInfo.linkedin,             label: "LinkedIn" },
                { icon: Mail,         href: `mailto:${personalInfo.email}`,    label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-muted)",
                    transition: "all .2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#2563eb";
                    (e.currentTarget as HTMLElement).style.color = "#2563eb";
                    (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,.08)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            style={{ position: "relative", flexShrink: 0 }}
          >
            {/* Glow blob behind photo */}
            <div style={{
              position: "absolute",
              inset: -40,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(37,99,235,.25) 0%, rgba(124,58,237,.15) 50%, transparent 70%)",
              filter: "blur(30px)",
            }} />

            {/* Spinning ring */}
            <div
              className="animate-spin-slow"
              style={{
                position: "absolute",
                inset: -20,
                borderRadius: "50%",
                border: "1px dashed rgba(37,99,235,.25)",
              }}
            >
              <div style={{
                position: "absolute", top: -5, left: "50%", transform: "translateX(-50%)",
                width: 10, height: 10, borderRadius: "50%",
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                boxShadow: "0 0 10px rgba(37,99,235,.8)",
              }} />
            </div>

            {/* Photo */}
            <div style={{
              position: "relative",
              width: 300,
              height: 300,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(37,99,235,.3)",
              boxShadow: "0 0 60px rgba(37,99,235,.25), 0 24px 64px rgba(0,0,0,.5)",
            }}>
              <Image
                src="/avatar.png"
                alt="Pratap Baraiya — React.js Developer"
                fill
                priority
                className="object-cover object-top"
                sizes="300px"
              />
            </div>

            {/* Floating badge: 5 yrs */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute", bottom: 10, left: -30,
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "10px 16px",
                display: "flex", alignItems: "center", gap: 10,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Sparkles size={16} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }}>5 Years</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Experience</div>
              </div>
            </motion.div>

            {/* Floating badge: projects */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{
                position: "absolute", top: 10, right: -30,
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "10px 16px",
                display: "flex", alignItems: "center", gap: 10,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "linear-gradient(135deg, #06b6d4, #7c3aed)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 800, fontSize: 13, color: "#fff",
              }}>
                30+
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }}>Projects</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Delivered</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          }}
        >
          <span style={{ fontSize: 10, letterSpacing: ".15em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 600 }}>Scroll</span>
          <ArrowDown size={14} style={{ color: "var(--text-muted)" }} className="animate-bounce-y" />
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: .7; }
          70%  { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        @media (max-width: 900px) {
          #hero > div > div { justify-content: center !important; }
        }
        @media (max-width: 600px) {
          #hero > div > div > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
