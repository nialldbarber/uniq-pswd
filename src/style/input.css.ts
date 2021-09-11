import {style} from '@vanilla-extract/css';

export const input = style({
  alignSelf: 'center',
  appearance: 'none',
  width: '100%',
  borderRadius: 8,
  height: 8,
  background:
    'linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.4) 0%)',
  cursor: 'pointer',

  selectors: {
    '&[type=range]::-webkit-slider-thumb': {
      appearance: 'none',
      height: 35,
      width: 35,
      borderRadius: '50%',
      background: '#ffffff',
      cursor: 'pointer',
    },
  },
});
