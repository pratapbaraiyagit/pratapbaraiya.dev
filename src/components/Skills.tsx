"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillGroups } from "@/lib/data";

const SKILL_ICONS: Record<string, string> = {
  "React.js": "⚛️", "Next.js": "▲", "JavaScript": "JS", "TypeScript": "TS",
  "HTML5": "🌐", "CSS3": "🎨", "Tailwind CSS": "💨", "Bootstrap": "🅱️", "Material UI": "🎭",
  "Node.js": "🟢", "Express.js": "🚂", "MongoDB": "🍃", "Firebase": "🔥",
  "Redux": "🔮", "Redux Toolkit": "⚡", "React Router": "🗺️",
  "Git & GitHub": "🐙", "Postman": "📮", "Swagger": "📋", "Vercel": "▲",
};

export function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active) ?? skillGroups[0];

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        padding: "120px 24px",
        background: "var(--bg-secondary)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", left: -80, bottom: -80, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,.08) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div className="section-badge" style={{ marginBottom: 16 }}>Skills & Expertise</div>
          <h2 className="section-title" style={{ fontSize: "clamp(36px,5vw,56px)", marginBottom: 16 }}>
            My <span className="gradient-text">Technical</span> Stack
          </h2>
          <p style={{ maxWidth: 520, margin: "0 auto", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7 }}>
            5 years of mastering the tools that build great web experiences.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 40 }}
        >
          {skillGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              style={{
                padding: "10px 22px",
                borderRadius: 10,
                border: active === g.id ? "none" : "1px solid var(--border)",
                background: active === g.id ? g.color : "var(--bg-card)",
                color: active === g.id ? "#fff" : "var(--text-secondary)",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                transition: "all .2s ease",
                boxShadow: active === g.id ? `0 4px 20px ${g.color}50` : "none",
              }}
            >
              {g.label}
              <span style={{ marginLeft: 8, fontSize: 11, opacity: .75 }}>({g.skills.length})</span>
            </button>
          ))}
        </motion.div>

        {/* Skill cards panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 24,
              padding: "40px",
              boxShadow: "var(--shadow-md)",
            }}
          >
            {/* Group header */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: group.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 800, fontSize: 16,
                boxShadow: `0 4px 14px ${group.color}50`,
              }}>
                {group.skills.length}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>
                  {group.label}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{group.skills.length} technologies</div>
              </div>
            </div>

            {/* Skills grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
              {group.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: .92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    padding: "16px 18px",
                    cursor: "default",
                    transition: "all .2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = group.color;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${group.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  {/* Skill icon */}
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${group.color}15`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 10, fontSize: 18,
                  }}>
                    {SKILL_ICONS[skill.name] || "💻"}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)", marginBottom: 8 }}>
                    {skill.name}
                  </div>
                  {/* Level bar */}
                  <div style={{ height: 4, borderRadius: 99, background: `${group.color}20`, overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                      style={{ height: "100%", borderRadius: 99, background: group.color }}
                    />
                  </div>
                  <div style={{ fontSize: 11, color: group.color, fontWeight: 700, marginTop: 6, textAlign: "right" }}>
                    {skill.level}%
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All tech cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ marginTop: 48, textAlign: "center" }}
        >
          <p style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 600, marginBottom: 20 }}>
            Full technology list
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
            {skillGroups.flatMap((g) =>
              g.skills.map((s) => (
                <span
                  key={`${g.id}-${s.name}`}
                  className="tech-tag"
                  style={{ cursor: "default" }}
                >
                  {s.name}
                </span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
