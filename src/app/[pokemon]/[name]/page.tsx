import { Box, Container } from '@mui/material';
import { CorePokedexDetail } from '~/components/core/core-pokedex-detail';
import { PokemonSprites } from '~/components/pokemon/pokemon-sprites';
import { PokemonStats } from '~/components/pokemon/pokemon-stats';
import { getPokemon } from '~/utils/get-pokemon';

export default async function PokemonDetail({
  params,
}: {
  params: { name: string };
}) {
  const pokemon = await getPokemon(params.name);

  return (
    <main>
      <Container>
        <Box paddingY={10}>
          <CorePokedexDetail pokemon={pokemon} hideButton />

          <PokemonSprites sprites={pokemon.sprites} />

          <PokemonStats stats={pokemon.stats} />
        </Box>
      </Container>
    </main>
  );
}
