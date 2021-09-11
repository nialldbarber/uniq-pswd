import {styleVariants, style} from '@vanilla-extract/css';
import {vars} from './global.css';
import {formattedFont} from './typography.css';

export const backgroundVariant = styleVariants({
  good: {background: vars.colors.good},
  medium: {background: vars.colors.medium},
  bad: {background: vars.colors.bad},
});

export const mainBackground = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100vh',
  padding: '2.5rem 5rem',
});

export const buttonBackground = style({
  display: 'flex',
  ...formattedFont,
});
