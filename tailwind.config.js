/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy": "#1E2640",
        "navy-light": "#353C53",
        "link": "#146EB4"
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1A181E",

          "secondary": "#4D4D4D",

          "base-100": "#FAFAFA"
        },
      },
    ]
  },
  plugins: [require("daisyui")],
}

