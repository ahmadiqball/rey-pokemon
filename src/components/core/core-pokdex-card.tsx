import { Box, Typography } from '@mui/material';
import { CoreTypeBadge } from './core-type-badge';
import { Pokemon } from '~/typings/pokemon.entity';
import { CoreImage } from './core-image';

export function CorePokedexCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Box
      bgcolor="white"
      width="100%"
      padding="45px 25px"
      borderRadius={6}
      sx={{
        'transition': 'ease 280ms',
        ':hover': {
          cursor: 'pointer',
          boxShadow: '5px 10px 25px 0 rgba(0,0,0,.3)',
        },
      }}
    >
      <CoreImage
        width="100%"
        height={275}
        src={pokemon.sprites.other['official-artwork']?.front_default || ''}
        alt={`Image of ${pokemon.name}`}
        sx={{ objectFit: 'contain' }}
      />
      <Box>
        <Typography
          fontSize={20}
          fontWeight={700}
          color="grey.600"
          marginTop={1.25}
        >
          {`#${pokemon.id.toString().padStart(4, '0')}`}
        </Typography>
        <Typography
          fontSize={40}
          fontWeight={700}
          marginTop={1.25}
          textTransform="capitalize"
        >
          {pokemon.name}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        rowGap={1.25}
        columnGap={2.5}
        marginTop={1.25}
      >
        {pokemon.types.map((type) => (
          <CoreTypeBadge key={type.slot} type={type.type.name} />
        ))}
      </Box>
    </Box>
  );
}
