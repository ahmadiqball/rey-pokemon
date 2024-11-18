'use client';

import { GlobalStyles } from '@mui/material';
import { theme } from './theme.config';

export function GlobalStyling() {
  return (
    <GlobalStyles
      styles={{
        '*': {
          color: theme.palette.common.black,
          fontFamily: 'Poppins, serif',
          textDecoration: 'none',
          boxSizing: 'border-box',
          margin: 0,
        },
      }}
    />
  );
}
