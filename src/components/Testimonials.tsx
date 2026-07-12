"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ position: "relative", padding: "120px 24px", background: "var(--bg-secondary)", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", left: -60, top: "30%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,.07) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <div className="section-badge" style={{ marginBottom: 16 }}>Testimonials</div>
          <h2 className="section-title" style={{ fontSize: "clamp(36px,5vw,56px)", marginBottom: 16 }}>
            What People <span className="gradient-text">Say</span>
          </h2>
          <p style={{ maxWidth: 480, margin: "0 auto", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Feedback from colleagues, managers, and clients I&apos;ve had the privilege of working with.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 24,
                padding: "32px",
                display: "flex", flexDirection: "column",
                position: "relative", overflow: "hidden",
                transition: "transform .25s ease, box-shadow .25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              {/* Bg quote */}
              <Quote
                size={80}
                style={{
                  position: "absolute", top: 20, right: 20,
                  color: "var(--border)", opacity: .4,
                }}
              />

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote style={{
                fontSize: 15, color: "var(--text-secondary)",
                lineHeight: 1.8, fontStyle: "italic",
                flex: 1, marginBottom: 24, position: "relative", zIndex: 1,
              }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Person */}
              <div style={{
                display: "flex", alignItems: "center", gap: 14,
                paddingTop: 20, borderTop: "1px solid var(--border)",
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}99)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 800, fontSize: 15,
                  boxShadow: `0 4px 12px ${t.avatarColor}40`,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
