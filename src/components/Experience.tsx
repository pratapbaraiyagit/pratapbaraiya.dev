"use client";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      style={{ position: "relative", padding: "120px 24px", background: "var(--bg-secondary)", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", left: "50%", top: -100, width: 600, height: 600, transform: "translateX(-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,.06) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <div className="section-badge" style={{ marginBottom: 16 }}>Career</div>
          <h2 className="section-title" style={{ fontSize: "clamp(36px,5vw,56px)", marginBottom: 16 }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p style={{ maxWidth: 520, margin: "0 auto", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7 }}>
            A journey through diverse roles that shaped my engineering philosophy.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 28, top: 0, bottom: 0, width: 2,
            background: "var(--border)",
          }} />
          {/* Animated fill */}
          <motion.div
            style={{
              position: "absolute", left: 28, top: 0, width: 2,
              background: "linear-gradient(180deg, #2563eb, #7c3aed, #06b6d4)",
              originY: 0,
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: .1 }}
            transition={{ duration: 2, ease: "easeOut", delay: .2 }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                style={{ display: "flex", gap: 24 }}
              >
                {/* Dot */}
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div style={{
                    width: 58, height: 58, borderRadius: 16,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "var(--shadow-sm)",
                    position: "relative", zIndex: 1,
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: `${exp.color}20`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 14, fontWeight: 800, color: exp.color,
                    }}>
                      {idx + 1}
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div
                  style={{
                    flex: 1,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 20,
                    padding: "24px 28px",
                    marginBottom: 8,
                    transition: "border-color .2s, transform .2s",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}40`;
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  {/* Top accent */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                  }} />

                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                    <div>
                      <h3 style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: 18, fontWeight: 700,
                        color: "var(--text-primary)", marginBottom: 4,
                      }}>
                        {exp.role}
                      </h3>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 15, fontWeight: 700, color: exp.color }}>{exp.company}</span>
                        <span style={{
                          display: "flex", alignItems: "center", gap: 4,
                          fontSize: 12, color: "var(--text-muted)",
                          background: "var(--bg-secondary)", borderRadius: 99,
                          padding: "3px 10px",
                        }}>
                          <MapPin size={10} />
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <span style={{
                      padding: "6px 14px", borderRadius: 99,
                      background: `${exp.color}12`,
                      border: `1px solid ${exp.color}30`,
                      color: exp.color, fontSize: 12, fontWeight: 700,
                      flexShrink: 0,
                    }}>
                      {exp.duration}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul style={{ display: "flex", flexDirection: "column", gap: 8, margin: 0, padding: 0, listStyle: "none" }}>
                    {exp.highlights.map((point, pi) => (
                      <li key={pi} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div style={{
                          width: 6, height: 6, borderRadius: "50%",
                          background: exp.color, flexShrink: 0, marginTop: 7,
                        }} />
                        <span style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65 }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
