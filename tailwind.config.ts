import type { Config } from "tailwindcss";

// Design tokens live here so every component draws from one source.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F7FB",   // page background
        ink: "#14213D",     // text + dark surfaces
        mist: "#5B6785",    // secondary text (AA on paper)
        line: "#DDE1EC",    // borders
        cobalt: { DEFAULT: "#2F5BFF", dark: "#1F3FCC" }, // primary action
        signal: "#FFC93C",  // playhead / highlight, used sparingly
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        sweep: { "0%": { left: "0%" }, "100%": { left: "100%" } },
      },
      animation: { sweep: "sweep 6s linear infinite" },
    },
  },
  plugins: [],
};
export default config;
