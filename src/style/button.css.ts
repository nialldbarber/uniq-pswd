import {style} from '@vanilla-extract/css';
import {vars} from './global.css';

export const button = style({
  position: 'absolute',
  top: '2.5rem',
  right: '5rem',
  background: vars.colors.green,
  color: vars.colors.white,
  border: `2px solid ${vars.colors.white}`,
  padding: '1.125rem 1.375rem',
  fontSize: '1.125rem',
});
