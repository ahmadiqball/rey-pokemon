import { Box, Container, Grid2, Typography } from '@mui/material';
import { CorePokedexCard } from '../core/core-pokdex-card';
import { Pokemon } from '~/typings/pokemon.entity';

export function LandingPokedex({ pokemons }: { pokemons: Array<Pokemon> }) {
  return (
    <Box
      paddingY={{ xs: '32px', md: '80px' }}
      bgcolor="primary.300"
      id="landing-pokedex"
    >
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

        <Grid2
          container
          columnSpacing={{ xs: 4, xl: 11.5 }}
          rowSpacing={{ xs: 4, xl: 6 }}
          marginTop={9}
        >
          {pokemons.map((item) => (
            <Grid2 key={item.id} size={{ xs: 12, sm: 6, xl: 4 }}>
              <CorePokedexCard pokemon={item} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
