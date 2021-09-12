import {style} from '@vanilla-extract/css';
import {vars} from './global.css';

export const popup = style({
  position: 'absolute',
  top: 0,
  right: 'calc(5rem + 180px / 3)',
  color: vars.colors.white,
  background: vars.colors.green,
  padding: '0.5rem 0.8rem',
  fontSize: '0.8rem',
  borderRadius: 5,

  ':after': {
    content: "''",
    position: 'absolute',
    display: 'block',
    left: '50%',
    top: 30,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderTop: `5px solid ${vars.colors.green}`,
    transform: 'translateX(-50%)',
  },

  '@media': {
    'screen and (max-width: 768px)': {
      position: 'fixed',
      bottom: '5.5rem',
      top: 'auto',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 66,
    },
  },
});
