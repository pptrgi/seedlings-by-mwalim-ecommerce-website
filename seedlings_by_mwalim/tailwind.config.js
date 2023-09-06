/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ctaColor: "#5267DF",
        bodyColor: "#f7f7f7",
        titleColor: "#242A45",
        textColor: "#9194A2",
        whiteColor: "#fff",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "350px",
        md: "576px",
        lg: "768px",
        iPad: "834px",
        xl: "992px",
        "2xl": "1440px",
      },
    },
    fontSize: {
      bigFontSize: "3.5rem",
      h1FontSize: "2.25rem",
      h2FontSize: "1.5rem",
      h3FontSize: "1.25rem",
      normalFontSize: "1rem",
      smallFontSize: "0.875rem",
      smallerFontSize: "0.813rem",
      tinyFontSize: "0.625rem",
    },
    fontWeight: {
      normalWeight: "400",
      mediumWeight: "500",
      semiBolded: "600",
    },
  },
  plugins: [],
};
