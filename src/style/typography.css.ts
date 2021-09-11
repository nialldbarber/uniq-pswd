import {style} from '@vanilla-extract/css';
import {vars} from './global.css';

export const formattedFont = {
  margin: 0,
  color: vars.colors.white,
};

export const heading = style({
  ...formattedFont,
  fontSize: '3rem',
  fontWeight: 500,
  lineHeight: 1.3,
});

export const subheader = style({
  ...formattedFont,
  fontSize: '1rem',
});

export const label = style({
  ...formattedFont,
  fontSize: '0.9rem',
});
