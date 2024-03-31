import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "my-brown": "#261C15",
        "my-green": "#C5D86D",
        "my-white": "#FDFDFD",
        "my-light": "#F5F5F5",
        "my-modal-line": "#8f8a8a",
        "my-grey": "#909090",
        "my-light-grey": "#E9E9E9",
        "my-slider": "rgba(38, 28, 21, 0.2)"
      },
      fontFamily: {
        sans: ['var(--font-kurier)']
      },
      screens: {
        phone: '420px',
        mini: '575px',
        pad: '991px',
        mac: '1504px',
        full: '1920px'
      }
    },
  },
  plugins: [],
};
export default config;
