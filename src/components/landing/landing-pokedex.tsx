import { Box, Container, Grid2, Typography } from '@mui/material';
import { CorePokedexCard } from '../core/core-pokdex-card';

export function LandingPokedex() {
  return (
    <Box paddingY={{ xs: '32px', md: '80px' }} bgcolor="primary.300">
      <Container>
        <Box textAlign="center">
          <Typography fontWeight={700} fontSize={40}>
            PokèDex
          </Typography>
          <Typography marginTop={2} fontSize={24}>
            All Generation totaling <br />
            999999 Pokemon
          </Typography>
        </Box>

        <Grid2 container columnSpacing={11.5} rowSpacing={6} marginTop={9}>
          {[...new Array(20)].map((item) => (
            <Grid2 key={item} size={4}>
              <CorePokedexCard />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
