import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0d10",
        surface: "#12151a",
        surface2: "#171b21",
        hairline: "#232830",
        hairline2: "#2c323c",
        blueprint: {
          DEFAULT: "#6ea8fe",
          dim: "#3d5a8f",
          faint: "rgba(110,168,254,0.08)",
        },
        ignition: {
          DEFAULT: "#ff8a3d",
          dim: "#b35f28",
        },
        steel: {
          DEFAULT: "#9fb0c0",
          dim: "#5c6b78",
        },
        ink: {
          DEFAULT: "#eef1f5",
          muted: "#8b93a1",
          faint: "#545c68",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(110,168,254,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(110,168,254,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "34px 34px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "340px 340px" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        drift: "drift 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
