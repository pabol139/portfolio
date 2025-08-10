/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        gray100: "var(--gray100)",
        gray200: "var(--gray200)",
      },
      backgroundImage: {
        orangeGradient:
          "conic-gradient(from 90deg, #D6330E 0%, #D6330E 12%, #BF2400 14%, #BF2400 25%, #BF2400 35%, #FD7252 39%, #FD7252 62%, #ED4E29 64%, #ED4E29 85%, #D6330E 87%, #D6330E 100%)",
        orangeCapGradient:
          "linear-gradient(90deg, #FF603C 0%, #FD7252 10%, #FD7252 100%)",
      },
      backgroundColor: {
        background: "var(--background)",
        accent: "var(--accent)",
      },
      maxWidth: {
        page: "var(--page-width)",
      },
      boxShadow: {
        box: "0 1px 2px -1px rgb(0 0 0 / 0.5), 0 0px 1px 0px rgb(0 0 0 / 0.5)",
        secondBox: "inset 0 0px 1px 0px rgb(0 0 0 / 1)",
        innerKey: "inset 0 0px 2px 0 rgb(0 0 0 / .7)",
        outerKey: "1 1px 1px 0 rgb(0 0 0 / .25)",
        orange: {
          orangeInnerCap:
            "0 0px 1px 0 rgb(255 255 255 / .8), inset 0 0px 2px 0 rgb(255 147 122 / .25)",
        },
        gray: {},
      },
    },
  },
  plugins: [],
};
