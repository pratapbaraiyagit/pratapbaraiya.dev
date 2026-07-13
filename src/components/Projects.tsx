"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projects } from "@/lib/data";

type Project = typeof projects[0];

const CATEGORIES = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      style={{
        position: "relative",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform .25s, box-shadow .25s, border-color .25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow = `0 20px 60px ${project.accentColor}20`;
        el.style.borderColor = `${project.accentColor}50`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "";
        el.style.boxShadow = "";
        el.style.borderColor = "var(--border)";
      }}
    >
      {/* Gradient header */}
      <div style={{
        height: 100,
        background: project.gradient,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}>
        {/* Project number */}
        <span style={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: 52,
          fontWeight: 900,
          color: "rgba(255,255,255,0.15)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          userSelect: "none",
        }}>
          {project.number}
        </span>
        {/* Category + Year badges */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{
            padding: "4px 10px", borderRadius: 99,
            background: "rgba(255,255,255,.2)",
            color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: ".04em",
          }}>
            {project.category}
          </span>
          <span style={{
            padding: "4px 10px", borderRadius: 99,
            background: "rgba(0,0,0,.2)",
            color: "rgba(255,255,255,.85)", fontSize: 11, fontWeight: 600,
          }}>
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: 16, fontWeight: 700,
          color: "var(--text-primary)", marginBottom: 4,
        }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 12, color: project.accentColor, fontWeight: 600, marginBottom: 10 }}>
          {project.subtitle}
        </p>
        <p style={{
          fontSize: 13, color: "var(--text-secondary)",
          lineHeight: 1.65, flex: 1, marginBottom: 14,
        }}>
          {project.description}
        </p>

        {/* Business value */}
        <div style={{
          display: "flex", gap: 8, alignItems: "flex-start",
          padding: "10px 12px", borderRadius: 10,
          background: `${project.accentColor}0d`,
          border: `1px solid ${project.accentColor}20`,
          marginBottom: 14,
        }}>
          <TrendingUp size={13} style={{ color: project.accentColor, flexShrink: 0, marginTop: 1 }} />
          <span style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5 }}>
            {project.businessValue}
          </span>
        </div>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="tech-tag" style={{ fontSize: 10 }}>{t}</span>
          ))}
          {project.tech.length > 5 && (
            <span className="tech-tag" style={{ fontSize: 10, color: project.accentColor }}>
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 8 }}>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                padding: "9px 12px", borderRadius: 10, textDecoration: "none",
                background: project.gradient,
                color: "#fff", fontSize: 12, fontWeight: 700,
                boxShadow: `0 4px 14px ${project.accentColor}30`,
                transition: "opacity .2s, transform .2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          ) : (
            <span style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              padding: "9px 12px", borderRadius: 10,
              border: "1px solid var(--border)",
              background: "var(--bg-secondary)",
              color: "var(--text-muted)", fontSize: 12, fontWeight: 600,
              cursor: "default", userSelect: "none",
            }}>
              🔒 Private / NDA
            </span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                padding: "9px 14px", borderRadius: 10, textDecoration: "none",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)", fontSize: 12, fontWeight: 600,
                transition: "all .2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-secondary)"; (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
            >
              <GithubIcon size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const featured  = filtered.filter((p) => p.featured);
  const others    = filtered.filter((p) => !p.featured);
  const visibleOthers = showAll ? others : others.slice(0, 3);

  return (
    <section id="projects" style={{ position: "relative", padding: "120px 24px", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -100, top: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,.07) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: -80, bottom: "20%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,.06) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <div className="section-badge" style={{ marginBottom: 16 }}>Portfolio</div>
          <h2 className="section-title" style={{ fontSize: "clamp(36px,5vw,56px)", marginBottom: 16 }}>
            {projects.length} Real-World <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ maxWidth: 600, margin: "0 auto", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Production applications serving real users — from hotel kiosks processing 120K+ check-ins and UK event booking platforms to full-stack CMS systems powering PayMore's multi-country retail network.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 48 }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setShowAll(false); }}
              style={{
                padding: "8px 20px", borderRadius: 99, cursor: "pointer",
                border: filter === cat ? "none" : "1px solid var(--border)",
                background: filter === cat ? "linear-gradient(135deg,#2563eb,#7c3aed)" : "var(--bg-card)",
                color: filter === cat ? "#fff" : "var(--text-secondary)",
                fontSize: 13, fontWeight: 600,
                boxShadow: filter === cat ? "0 4px 14px rgba(37,99,235,.35)" : "none",
                transition: "all .2s",
              }}
            >
              {cat}
              <span style={{ marginLeft: 6, fontSize: 11, opacity: .7 }}>
                ({cat === "All" ? projects.length : projects.filter(p => p.category === cat).length})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Featured projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {featured.length > 0 && (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--text-muted)" }}>Featured</span>
                  <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20, marginBottom: others.length > 0 ? 40 : 0 }}>
                  {featured.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
                </div>
              </>
            )}

            {/* Other projects */}
            {others.length > 0 && (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--text-muted)" }}>More Projects</span>
                  <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
                  {visibleOthers.map((p, i) => <ProjectCard key={p.id} project={p} index={featured.length + i} />)}
                </div>

                {others.length > 3 && (
                  <div style={{ textAlign: "center", marginTop: 32 }}>
                    <button
                      onClick={() => setShowAll((v) => !v)}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "12px 28px", borderRadius: 12, cursor: "pointer",
                        border: "1.5px solid var(--border)",
                        background: "transparent",
                        color: "var(--text-secondary)", fontSize: 14, fontWeight: 600,
                        transition: "all .2s",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2563eb"; (e.currentTarget as HTMLElement).style.color = "#2563eb"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                    >
                      {showAll ? <><ChevronUp size={16} /> Show Less</> : <><ChevronDown size={16} /> Show {others.length - 3} More</>}
                    </button>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
