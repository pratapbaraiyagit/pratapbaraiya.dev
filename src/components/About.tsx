"use client";
import { motion } from "framer-motion";
import { Code2, Heart, Rocket, Target } from "lucide-react";
import { stats } from "@/lib/data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp = (delay = 0): Record<string, any> => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay },
});

const highlights = [
  { icon: Rocket,  title: "~5 Years Professional Experience",    desc: "Production-grade web apps across startups, agencies, and US product companies.", color: "#2563eb" },
  { icon: Code2,   title: "4+ Years React.js & Next.js",         desc: "Deep expertise in the React ecosystem — hooks, SSR, performance patterns.", color: "#7c3aed" },
  { icon: Target,  title: "1 Year Full-Stack MERN",              desc: "End-to-end development: Node.js, Express.js, MongoDB, Firebase.", color: "#06b6d4" },
  { icon: Heart,   title: "Passionate About Quality",            desc: "Agile developer focused on performance, clean code, and great UX.", color: "#10b981" },
];

const tags = ["React.js","Next.js","TypeScript","Node.js","MongoDB","Redux","Tailwind CSS","REST APIs","Agile","Performance","Accessibility","CI/CD"];

export function About() {
  return (
    <section id="about" style={{ position: "relative", padding: "120px 24px", overflow: "hidden" }}>
      {/* Orb */}
      <div style={{ position: "absolute", right: -100, top: "20%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,.1) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div {...fadeUp()} style={{ textAlign: "center", marginBottom: 72 }}>
          <div className="section-badge" style={{ marginBottom: 16 }}>About Me</div>
          <h2 className="section-title" style={{ fontSize: "clamp(36px,5vw,56px)", marginBottom: 16 }}>
            The Developer Behind{" "}
            <span className="gradient-text">the Code</span>
          </h2>
          <p style={{ maxWidth: 560, margin: "0 auto", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7 }}>
            I build web applications that are fast, beautiful, and built to last.
          </p>
        </motion.div>

        {/* Two column */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 60, alignItems: "start" }}>
          {/* Left bio */}
          <motion.div {...fadeUp(0.1)}>
            <div style={{ width: 48, height: 3, borderRadius: 99, background: "linear-gradient(90deg,#2563eb,#7c3aed)", marginBottom: 28 }} />
            {[
              <>With nearly <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>5 years of professional experience</strong>, I&apos;ve built everything from startup MVPs to enterprise SaaS platforms across multiple industries.</>,
              <>I&apos;ve spent <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>4+ years specialising in React.js and Next.js</strong> — building component libraries, optimising Core Web Vitals, and shipping pixel-perfect UIs at scale.</>,
              <>More recently, I expanded into <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>full-stack MERN development</strong> — architecting REST APIs, integrating databases, and deploying to cloud infrastructure.</>,
              <>I thrive in Agile teams, love mentoring, and always bring a craftsman&apos;s attention to detail. Whether a simple landing page or a complex SaaS — I care about doing it right.</>,
            ].map((text, i) => (
              <p key={i} style={{ fontSize: 16, lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: 20 }}>{text}</p>
            ))}

            {/* Tag cloud */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
              {tags.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Right stats + highlights */}
          <motion.div {...fadeUp(0.2)}>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    padding: "24px 20px",
                    textAlign: "center",
                    transition: "transform .2s, box-shadow .2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                >
                  <div className="gradient-text" style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 40, fontWeight: 800, lineHeight: 1, marginBottom: 8 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, letterSpacing: ".04em" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.55 }}
                style={{
                  display: "flex", gap: 14,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "16px",
                  marginBottom: 10,
                  transition: "border-color .2s, transform .2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${item.color}40`; (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = ""; }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: `${item.color}18`, color: item.color,
                }}>
                  <item.icon size={17} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 3 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
