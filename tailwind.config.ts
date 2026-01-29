import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    // 关键点：这里告诉 Tailwind 去哪里找 class
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 这里可以扩展自定义颜色
      colors: {
        brand: {
          blue: '#0f172a',
          light: '#334155', 
          accent: '#3b82f6',
          green: '#10b981',
        }
      }
    },
  },
  plugins: [typography],
};
export default config;
