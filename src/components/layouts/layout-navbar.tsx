'use client';

import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CoreImage } from '~/components/core/core-image';

const menu = [
  { label: 'Home', href: '/' },
  { label: 'Pokemon Type', href: '/type' },
];

export function LayoutNavbar() {
  const route = usePathname();

  return (
    <Container
      sx={{ position: 'fixed', top: 0, left: '50%', translate: '-50%' }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          paddingY: '15px',
        }}
      >
        <Link href="/">
          <CoreImage
            sx={(theme) => ({
              width: '120px',
              [theme.breakpoints.up('md')]: {
                width: '167px',
              },
            })}
            src="/images/img-logo-pokemon.svg"
            width={167}
            height={59}
            alt="pokemon dex main logo"
          />
        </Link>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {menu.map((item) => (
            <Link href={item.href} key={item.href}>
              <Typography
                sx={{
                  'color': route === item.href ? 'yellow.400' : null,
                  'fontWeight': route === item.href ? 700 : null,
                  ':hover': {
                    color: 'yellow.400',
                  },
                  'transition': 'linear 100ms',
                }}
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
