import { Box } from '@mui/material';
import { POKEMON_COLOR_TYPE } from '~/designs/pokemon-color-type';
import { PokemonType } from '~/typings/pokemon.entity';

interface CoreTypeBadgeProps {
  type: PokemonType;
}

export function CoreTypeBadge({ type }: CoreTypeBadgeProps) {
  return (
    <Box
      bgcolor={POKEMON_COLOR_TYPE[type as keyof typeof POKEMON_COLOR_TYPE]}
      borderRadius="999px"
      padding="7px 25px"
      color="white"
      fontWeight={700}
      fontSize={20}
      textTransform="capitalize"
      lineHeight={1}
    >
      {type}
    </Box>
  );
}
