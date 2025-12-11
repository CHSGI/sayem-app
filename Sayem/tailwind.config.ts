import { create } from "twrnc";

// tailwind.config.ts
const tw = create({
  theme: {
    extend: {
      colors: {
        primary: "#1b71ab",
        secondary: "#072b3d",
        accent: "#F59E0B",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      fontFamily: {
        Regular: "InterRegular",
        Medium: "InterMedium",
        SemiBold: "InterSemiBold",
        Bold: "InterBold",
      },
    },
  },
});
export default tw;
