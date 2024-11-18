import { Box } from '@mui/material';
import Image from 'next/image';

export function LayoutNavbar() {
  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0 }}>
      <Image
        src="/images/img-logo-pokemon.svg"
        width={167}
        height={59}
        alt="pokemon dex main logo"
      />
    </Box>
  );
}
