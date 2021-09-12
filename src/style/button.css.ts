import {style} from '@vanilla-extract/css';
import {vars} from './global.css';

export const button = style({
  position: 'absolute',
  top: '2.5rem',
  right: '5rem',
  width: 180,
  background: vars.colors.green,
  color: vars.colors.white,
  border: `2px solid ${vars.colors.white}`,
  padding: '1.125rem 1rem',
  fontSize: '1.125rem',
  transition: 'background .125s ease 0s, color .125s ease 0s',
  userSelect: 'none',

  ':hover': {
    background: vars.colors.white,
    color: vars.colors.green,
  },
});

export const refresh = style({
  position: 'absolute',
  bottom: '3rem',
  right: '5rem',
  cursor: 'pointer',
  opacity: 1,
  transition: '.1s all ease',

  ':hover': {
    opacity: 0.8,
  },
});
