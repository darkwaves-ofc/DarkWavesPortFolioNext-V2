import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "var(--color-dark)",
        light: "var(--color-light)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        cropCircle: 'cropCircle 26s linear infinite',
      },
      keyframes: {
        cropCircle: {
          '0%, 50%, 100%': { clipPath: 'polygon(67% 13%, 100% 34%, 92% 85%, 36% 100%, 10% 68%, 0 0)' },
          '10%, 60%, 90%': { clipPath: 'polygon(50% 15%, 97% 14%, 84% 92%, 49% 98%, 6% 81%, 0 7%)' },
          '20%, 70%': { clipPath: 'polygon(67% 13%, 100% 21%, 88% 74%, 36% 100%, 8% 75%, 17% 18%)' },
          '40%, 80%': { clipPath: 'polygon(63% 2%, 100% 31%, 76% 88%, 49% 98%, 4% 59%, 21% 13%)' },
        },
      },
      // Custom clip-path
      clipPath: {
        customShape: 'polygon(67% 13%, 100% 34%, 92% 85%, 36% 100%, 10% 68%, 0 0)',
      },
      // You might need to add backgroundColor here
      backgroundColor: {
        'dark-white': 'var(--color-dark-white)',
      }
    },
  },
  plugins: [],
};
export default config;
