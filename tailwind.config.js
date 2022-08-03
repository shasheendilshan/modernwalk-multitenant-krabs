/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        btn_primary_normal: "var(--btn_primary_normal)",
        btn_primary_hover: "var(--btn_primary_hover)",
        btn_primary_active: "var(--btn_primary_active)",
        btn_primary_disabled: "var(--btn_primary_disabled)",
        btn_outlined_hover: "var(--btn_outlined_hover)",
        btn_outlined_active: "var(--btn_outlined_active)",
        btn_outlined_disabled: "var(--btn_outlined_disabled)",
        btn_danger_normal: "var(--btn_danger_normal)",
        btn_danger_hover: "var(--btn_danger_hover)",
        btn_danger_active: "var(--btn_danger_active)",
        btn_danger_outlined_hover: "var(--btn_danger_outlined_hover)",
        btn_danger_outlined_active: "var(--btn_danger_outlined_active)",

        text_main: "var(--text_main)",
        text_active: "var(--text_active)",
        text_inactive: "var(--text_inactive)",
        elephant_gray: "var(--elephant_gray)",
        elephant_contrast: "var(--elephant_contrast)",

        error: "var(--error)",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      boxShadow: {
        normal: "0px 0px 30px rgba(0, 25, 72, 0.15)",
        hover: "0px 10px 40px rgba(0, 25, 72, 0.25)",
        active: " 0px 5px 30px rgba(0, 25, 72, 0.25)",
        btn_hover: "0px 4px 6px rgba(1, 5, 93, 0.15)",
        card: "0px 2px 14px rgba(0, 0, 0, 0.15)",
      },
      padding: {
        text_input: "16px 12px 8px 12px",
      },
    },
  },
  plugins: [],
};
