import { styleVariants } from "@vanilla-extract/css";
import { vars } from "./global.css";

export const backgroundVariant = styleVariants({
	good: { background: vars.colors.good },
	medium: { background: vars.colors.medium },
	bad: { background: vars.colors.bad },
});
