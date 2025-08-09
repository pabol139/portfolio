/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        background: "var(--background)",
      },
      maxWidth: {
        page: "var(--page-width)",
      },
      boxShadow: {
        box: "0 1px 2px -1px rgb(0 0 0 / 0.5), 0 0px 1px 0px rgb(0 0 0 / 0.5)",
        secondBox: "inset 0 0px 1px 0px rgb(0 0 0 / 1)",
      },
    },
  },
  plugins: [],
};
