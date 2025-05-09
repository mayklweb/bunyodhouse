// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': "412px",
        'sm': "640px",
        'md': "768px",
        'lg': "1024px",
        'xl': "1280px",        
      },
    },
  },
  plugins: [],
};
