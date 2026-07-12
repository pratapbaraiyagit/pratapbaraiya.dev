"use client";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      background: "var(--bg-secondary)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 32px" }}>
        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 14px rgba(37,99,235,.3)",
              }}>
                <span style={{ color: "#fff", fontFamily: "var(--font-space-grotesk)", fontWeight: 800, fontSize: 14 }}>PB</span>
              </div>
              <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 17, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                Pratap<span style={{ color: "#2563eb" }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 300, marginBottom: 20 }}>
              React.js & MERN Stack Developer building scalable, performant web experiences with clean code and modern design.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { icon: GithubIcon,   href: personalInfo.github,   label: "GitHub" },
                { icon: LinkedinIcon, href: personalInfo.linkedin,  label: "LinkedIn" },
                { icon: Mail,         href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  style={{
                    width: 38, height: 38, borderRadius: 9,
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-muted)", textDecoration: "none",
                    transition: "all .2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#2563eb";
                    (e.currentTarget as HTMLElement).style.color = "#2563eb";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--text-muted)", fontWeight: 700, marginBottom: 18 }}>
              Navigation
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  style={{
                    textAlign: "left", background: "none", border: "none",
                    fontSize: 14, color: "var(--text-secondary)", cursor: "pointer",
                    padding: 0, transition: "color .2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#2563eb"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--text-muted)", fontWeight: 700, marginBottom: 18 }}>
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>{personalInfo.email}</p>
              <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>{personalInfo.phone}</p>
              <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          paddingTop: 24, borderTop: "1px solid var(--border)",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
            © {new Date().getFullYear()} Pratap Baraiya. Built with
            <Heart size={12} style={{ fill: "#ef4444", color: "#ef4444", margin: "0 2px" }} />
            using Next.js & Tailwind CSS.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "none", border: "none", cursor: "pointer",
              fontSize: 13, color: "var(--text-muted)", transition: "color .2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#2563eb"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
          >
            Back to top
            <span style={{
              width: 28, height: 28, borderRadius: 8,
              border: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
