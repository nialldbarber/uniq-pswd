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
  marginBottom: '0.5rem',
});

export const subheader = style({
  ...formattedFont,
  fontSize: '1rem',
  marginBottom: '0.8rem',
});

export const label = style({
  ...formattedFont,
  fontSize: '0.9rem',
  marginTop: '0.5rem',
});

export const labelText = style({
  display: 'inline-block',
  marginLeft: '0.5rem',
});

export const buttonText = style({
  ...formattedFont,
  fontSize: '1.2rem',
  marginRight: '0.7rem',
  cursor: 'pointer',
});
