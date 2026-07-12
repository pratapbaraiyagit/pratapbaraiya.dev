"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Zap, Plug, Monitor, Users } from "lucide-react";
import { whyHireMe } from "@/lib/data";

const ICONS: Record<string, React.ElementType> = { Code2, Layers, Zap, Plug, Monitor, Users };

export function WhyHireMe() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="why-hire-me" style={{ position: "relative", padding: "120px 24px", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -100, bottom: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,.08) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: -80, top: "30%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,.06) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <div className="section-badge" style={{ marginBottom: 16 }}>Value Proposition</div>
          <h2 className="section-title" style={{ fontSize: "clamp(36px,5vw,56px)", marginBottom: 16 }}>
            Why Work <span className="gradient-text">With Me?</span>
          </h2>
          <p style={{ maxWidth: 520, margin: "0 auto", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7 }}>
            I don&apos;t just write code — I build solutions with craftsmanship and a focus on long-term value.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {whyHireMe.map((item, idx) => {
            const Icon = ICONS[item.icon];
            const isHovered = hovered === idx;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  background: "var(--bg-card)",
                  border: `1px solid ${isHovered ? `${item.color}40` : "var(--border)"}`,
                  borderRadius: 20,
                  padding: "28px",
                  overflow: "hidden",
                  transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                  boxShadow: isHovered ? `0 20px 60px ${item.color}18` : "none",
                  transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                  cursor: "default",
                }}
              >
                {/* BG gradient */}
                <div style={{
                  position: "absolute", top: -30, right: -30,
                  width: 120, height: 120, borderRadius: "50%",
                  background: `radial-gradient(circle, ${item.color}${isHovered ? "20" : "0c"} 0%, transparent 70%)`,
                  transition: "background .3s",
                  pointerEvents: "none",
                }} />

                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${item.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20, color: item.color,
                  boxShadow: `0 4px 14px ${item.color}20`,
                  transform: isHovered ? "scale(1.1)" : "scale(1)",
                  transition: "transform .25s ease",
                }}>
                  {Icon && <Icon size={22} />}
                </div>

                <h3 style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 16, fontWeight: 700,
                  color: "var(--text-primary)", marginBottom: 10,
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${item.color}, transparent)`,
                  transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform .3s ease",
                }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
