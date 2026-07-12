"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={className}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      style={{
        width: 38, height: 38, borderRadius: 9, border: "1px solid var(--border)",
        background: "var(--bg-card)", color: "var(--text-secondary)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", transition: "all .2s ease",
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#2563eb";
        (e.currentTarget as HTMLElement).style.color = "#2563eb";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
      }}
    >
      <span style={{
        position: "absolute",
        opacity: theme === "dark" ? 1 : 0,
        transform: theme === "dark" ? "scale(1) rotate(0deg)" : "scale(.4) rotate(90deg)",
        transition: "all .3s",
      }}>
        <Moon size={15} />
      </span>
      <span style={{
        position: "absolute",
        opacity: theme === "light" ? 1 : 0,
        transform: theme === "light" ? "scale(1) rotate(0deg)" : "scale(.4) rotate(-90deg)",
        transition: "all .3s",
      }}>
        <Sun size={15} />
      </span>
    </button>
  );
}
