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
    content: '',
    position: 'absolute',
    display: 'block',
    left: 18,
    top: 50,
    width: 10,
    height: 10,
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    borderTop: '20px solid #000',
  },
});
