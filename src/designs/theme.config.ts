'use client';

import { Color, createTheme } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    yellow: Partial<Color>;
    blue: Partial<Color>;
    green: Partial<Color>;
    orange: Partial<Color>;
    red: Partial<Color>;
  }
  // allow configuration using `createTheme()`
  interface PaletteOptions {
    yellow?: Partial<Color>;
    blue?: Partial<Color>;
    green?: Partial<Color>;
    orange?: Partial<Color>;
    red?: Partial<Color>;
  }
}

export const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'Poppins, serif',
  },
  palette: {
    common: {
      black: '#42494D',
    },
    grey: {
      '400': '#F7F8F8',
      '600': '#B3B6B8',
      '700': '#7B8082',
    },
    primary: {
      '200': '#FFD86C',
      '300': '#FDCB3C',
      '400': '#FFCB3B',
      'main': '#E6AB09',
    },
    blue: {
      '200': '#0571A6',
      '400': '#3C48CF',
    },
    orange: {
      '400': '#E66D00',
    },
    green: {
      '400': '#01B956',
    },
    red: {
      '400': '#DE2C2C',
    },
  },
});
