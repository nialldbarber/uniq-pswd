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
  borderRadius: 5,
  transition:
    'background .125s ease 0s, color .125s ease 0s, box-shadow 0.2s cubic-bezier(0, 0, 0.38, 0.9)',
  userSelect: 'none',

  '@media': {
    'screen and (max-width: 768px)': {
      position: 'fixed',
      fontSize: '0.9rem',
      width: 150,
      top: 'calc(100% - 5rem)',
      left: '50%',
      right: 'auto',
      transform: 'translateX(-50%)',
    },
  },

  ':hover': {
    background: vars.colors.white,
    color: vars.colors.green,
  },

  ':focus': {
    boxShadow: `${vars.colors.focusHovered} 0px 0px 0px 3px`,
  },
});

export const refresh = style({
  position: 'absolute',
  bottom: '3rem',
  right: '5rem',
  cursor: 'pointer',
  opacity: 1,
  transition: '.1s opacity ease',

  ':hover': {
    opacity: 0.8,
  },

  '@media': {
    'screen and (max-width: 768px)': {
      right: '1rem',
      bottom: '1.4rem',
    },
  },
});
