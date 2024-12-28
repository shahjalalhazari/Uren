/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffc400",
          secondary: "#e52e06",
          dark: "#000",
          blue: "#0886cf",
          yellow: "#ffc400",
          heading: "#333",
          border: "#e5e5e5",
          "body-text": "#999",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
};
