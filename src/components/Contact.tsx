"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const CONTACTS = [
  { icon: Mail,          label: "Email",     value: personalInfo.email,      href: `mailto:${personalInfo.email}`, color: "#2563eb" },
  { icon: Phone,         label: "Phone",     value: personalInfo.phone,       href: `tel:${personalInfo.phone}`,    color: "#10b981" },
  { icon: LinkedinIcon,  label: "LinkedIn",  value: "linkedin.com/in/pratapbaraiya", href: personalInfo.linkedin,  color: "#0077b5" },
  { icon: GithubIcon,    label: "GitHub",    value: "github.com/pratapbaraiya",      href: personalInfo.github,    color: "#7c3aed" },
  { icon: Globe,         label: "Portfolio", value: "pratapbaraiya.dev",      href: personalInfo.portfolio,        color: "#06b6d4" },
];

type State = "idle" | "sending" | "success" | "error";

const inputStyle = {
  width: "100%", padding: "13px 16px", borderRadius: 12,
  border: "1.5px solid var(--border)",
  background: "var(--bg-secondary)",
  color: "var(--text-primary)",
  fontSize: 14,
  outline: "none",
  transition: "border-color .2s, box-shadow .2s",
  fontFamily: "inherit",
};

export function Contact() {
  const [state, setState] = useState<State>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setState("success");
    formRef.current?.reset();
    setTimeout(() => setState("idle"), 5000);
  };

  const focusStyle = (el: HTMLElement) => {
    el.style.borderColor = "#2563eb";
    el.style.boxShadow = "0 0 0 3px rgba(37,99,235,.15)";
    el.style.background = "var(--bg-card)";
  };
  const blurStyle = (el: HTMLElement) => {
    el.style.borderColor = "var(--border)";
    el.style.boxShadow = "";
    el.style.background = "var(--bg-secondary)";
  };

  return (
    <section id="contact" style={{ position: "relative", padding: "120px 24px", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -80, bottom: -80, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,.1) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: -80, top: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,.08) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <div className="section-badge" style={{ marginBottom: 16 }}>Get in Touch</div>
          <h2 className="section-title" style={{ fontSize: "clamp(36px,5vw,56px)", marginBottom: 16 }}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ maxWidth: 480, margin: "0 auto", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Have a project in mind or want to discuss an opportunity? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 32, alignItems: "start" }}>

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {/* Info card */}
            <div style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 24,
              padding: "28px",
              marginBottom: 4,
            }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }}>
                Contact Details
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {CONTACTS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "12px 12px", borderRadius: 12,
                      textDecoration: "none", transition: "background .2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-secondary)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >
                    <div style={{
                      width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                      background: `${c.color}15`, color: c.color,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "transform .2s",
                    }}>
                      <c.icon size={16} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--text-muted)", fontWeight: 700 }}>{c.label}</div>
                      <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div style={{
              borderRadius: 24, padding: "28px",
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              color: "#fff", textAlign: "center",
            }}>

              <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                Open to Opportunities
              </h3>
              <p style={{ fontSize: 14, opacity: .85, lineHeight: 1.6 }}>
                Available for full-time roles, contracts, and freelance projects.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 24,
              padding: "36px",
              boxShadow: "var(--shadow-md)",
            }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", marginBottom: 28, fontFamily: "var(--font-space-grotesk)" }}>
                Send a Message
              </h3>

              {state === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: .95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "48px 0", textAlign: "center" }}
                >
                  <CheckCircle2 size={48} style={{ color: "#10b981" }} />
                  <h4 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)", fontFamily: "var(--font-space-grotesk)" }}>Message Sent!</h4>
                  <p style={{ fontSize: 15, color: "var(--text-secondary)" }}>Thanks for reaching out. I&apos;ll reply within 24 hours.</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {[
                      { id: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                      { id: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
                    ].map((f) => (
                      <div key={f.id}>
                        <label htmlFor={`contact-${f.id}`} style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--text-secondary)", marginBottom: 8, letterSpacing: ".02em" }}>
                          {f.label} *
                        </label>
                        <input
                          id={`contact-${f.id}`} name={f.id} type={f.type} required
                          placeholder={f.placeholder}
                          style={inputStyle}
                          onFocus={(e) => focusStyle(e.currentTarget)}
                          onBlur={(e) => blurStyle(e.currentTarget)}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="contact-subject" style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--text-secondary)", marginBottom: 8 }}>Subject *</label>
                    <input
                      id="contact-subject" name="subject" type="text" required
                      placeholder="Job Opportunity / Freelance Project / Collaboration"
                      style={inputStyle}
                      onFocus={(e) => focusStyle(e.currentTarget)}
                      onBlur={(e) => blurStyle(e.currentTarget)}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--text-secondary)", marginBottom: 8 }}>Message *</label>
                    <textarea
                      id="contact-message" name="message" required rows={5}
                      placeholder="Tell me about your project, timeline, and budget..."
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => focusStyle(e.currentTarget)}
                      onBlur={(e) => blurStyle(e.currentTarget)}
                    />
                  </div>

                  {state === "error" && (
                    <div style={{
                      display: "flex", alignItems: "center", gap: 8,
                      padding: "12px 16px", borderRadius: 10,
                      background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.25)",
                      color: "#ef4444", fontSize: 13,
                    }}>
                      <AlertCircle size={14} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state === "sending"}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                      padding: "14px 28px", borderRadius: 12, border: "none",
                      background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                      color: "#fff", fontWeight: 700, fontSize: 15,
                      cursor: state === "sending" ? "not-allowed" : "pointer",
                      opacity: state === "sending" ? .75 : 1,
                      boxShadow: "0 4px 20px rgba(37,99,235,.4)",
                      transition: "transform .2s, box-shadow .2s",
                    }}
                    onMouseEnter={(e) => { if (state !== "sending") { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(37,99,235,.55)"; } }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,99,235,.4)"; }}
                  >
                    {state === "sending" ? (
                      <>
                        <div style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid rgba(255,255,255,.3)", borderTopColor: "#fff", animation: "spin-slow 0.7s linear infinite" }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #contact > div > div:last-child > div:last-child > div > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
