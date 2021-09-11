import { styleVariants, style } from "@vanilla-extract/css";
import { vars } from "./global.css";

export const backgroundVariant = styleVariants({
  good: { background: vars.colors.good },
  medium: { background: vars.colors.medium },
  bad: { background: vars.colors.bad },
});

export const mainBackground = style({
  padding: "2.5rem 5rem",
});
