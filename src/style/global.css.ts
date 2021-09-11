import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html, body", {
  height: "100%",
  width: "100%",
  padding: 0,
  margin: 0,
  fontFamily: "'Helvetica Neue', arial, sans-serif",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

export const vars = createGlobalTheme(":root", {
  colors: {
    good: "#1C815A",
    medium: "#BE4E3A",
    bad: "#d1364e",
    white: "#FFFFFF",
  },
});
