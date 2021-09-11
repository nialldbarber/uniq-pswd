import { style } from "@vanilla-extract/css";
import { vars } from "./global.css";

export const heading = style({
  margin: 0,
  color: vars.colors.white,
  fontSize: "2rem",
});

export const subheader = style({
  margin: 0,
  color: vars.colors.white,
  fontSize: "1rem",
});

export const label = style({
  color: vars.colors.white,
  fontSize: "0.9rem",
});
