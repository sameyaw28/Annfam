import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "2.5rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        bg: "#F9FAFB",
        surface: "#FFFFFF",
        ink: { DEFAULT: "#111827", muted: "#6B7280" },
        line: "#E5E7EB",
        brand: {
          DEFAULT: "#6C63FF",
          hover: "#5B53E8",
          deep: "#4F46E5",
          soft: "rgba(108, 99, 255, 0.08)",
        },
        accent: {
          DEFAULT: "#F97316",
          hover: "#EA670B",
          soft: "rgba(249, 115, 22, 0.10)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: { display: "-0.03em" },
      lineHeight: { body: "1.7" },
      boxShadow: {
        sm: "0 1px 2px rgba(17,24,39,0.04), 0 1px 3px rgba(17,24,39,0.06)",
        md: "0 4px 6px rgba(17,24,39,0.04), 0 8px 16px rgba(17,24,39,0.06)",
        lg: "0 12px 24px rgba(17,24,39,0.06), 0 20px 40px rgba(108,99,255,0.08)",
        cta: "0 8px 24px rgba(249,115,22,0.30)",
        ring: "0 0 0 4px rgba(108, 99, 255, 0.35)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: { 150: "150ms", 250: "250ms", 400: "400ms", 700: "700ms" },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #6C63FF 0%, #4F46E5 100%)",
        "brand-soft":
          "linear-gradient(135deg, rgba(108,99,255,0.08), rgba(79,70,229,0.04))",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heroIn: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        reveal: "reveal 400ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "hero-in": "heroIn 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
