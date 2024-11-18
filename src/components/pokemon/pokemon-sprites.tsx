import { Box, Stack, Typography } from '@mui/material';
import { Pokemon } from '~/typings/pokemon.entity';
import { CoreImage } from '../core/core-image';

const SPRITES_KEY = [
  'back_default',
  'back_female',
  'back_shiny',
  'back_shiny_female',
  'front_default',
  'front_female',
  'front_shiny',
  'front_shiny_female',
];

export function PokemonSprites({ sprites }: Pick<Pokemon, 'sprites'>) {
  const baseSpritesUrl = SPRITES_KEY.map(
    (key) => sprites[key as keyof typeof sprites] as string | null
  );

  const spritesUrl = [
    sprites.other.dream_world.front_default,
    sprites.other.dream_world.front_female,
    sprites.other['official-artwork'].front_default,
    sprites.other['official-artwork'].front_shiny,
  ]
    .concat(baseSpritesUrl)
    .filter((url) => url !== null);

  return (
    <Box marginTop={7.5}>
      <Typography fontSize={20} fontWeight={700}>
        Other Images:
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        gap={6}
        maxWidth="100%"
        sx={{ overflowX: 'scroll' }}
        paddingY={4}
      >
        {spritesUrl.map((item) => (
          <CoreImage
            src={item}
            key={item}
            alt="pokemon sprites collection"
            width={170}
            height={170}
            minWidth={170}
          />
        ))}
      </Stack>
    </Box>
  );
}
