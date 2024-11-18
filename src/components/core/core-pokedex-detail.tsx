import { Grid2, Stack, Typography } from '@mui/material';
import { CoreImage } from './core-image';
import { CoreTypeBadge } from './core-type-badge';
import Link from 'next/link';
import { CoreButton } from './core-button';
import { Pokemon } from '~/typings/pokemon.entity';

export function CorePokedexDetail({
  pokemon,
  hideButton,
}: {
  pokemon: Pokemon;
  hideButton?: boolean;
}) {
  return (
    <Grid2 container spacing={3} marginTop={5}>
      <Grid2 size={{ xs: 12, md: 5 }}>
        <CoreImage
          width="100%"
          height={400}
          src={pokemon.sprites.other['official-artwork']?.front_default || ''}
          alt={`Image of ${pokemon.name}`}
          sx={{ objectFit: 'contain' }}
        />
      </Grid2>

      <Grid2 size={{ xs: 12, md: 7 }}>
        <Typography fontSize={40} fontWeight={700} textTransform="capitalize">
          {pokemon.name}
        </Typography>

        <Grid2 container marginTop={3.25}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Stack direction="row" alignItems="center" gap={2}>
              <Typography fontWeight={700} fontSize={20}>
                Weight:
              </Typography>
              <Typography fontSize={20}>{pokemon.weight}</Typography>
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Stack direction="row" alignItems="center" gap={2}>
              <Typography fontWeight={700} fontSize={20}>
                Height:
              </Typography>
              <Typography fontSize={20}>{pokemon.height}</Typography>
            </Stack>
          </Grid2>
        </Grid2>

        <Stack direction="row" marginTop={2.5} gap={2}>
          <Typography fontWeight={700} fontSize={20}>
            Abilities:
          </Typography>
          <ul>
            {pokemon.abilities.map((item) => (
              <li key={item.slot}>
                <Typography textTransform="capitalize" fontSize={20}>
                  {item.ability.name}
                </Typography>
              </li>
            ))}
          </ul>
        </Stack>

        <Stack direction="row" marginTop={2.5} marginBottom={6} gap={2}>
          <Typography fontWeight={700} fontSize={20}>
            Type:
          </Typography>

          <Stack direction="row" gap={2}>
            {pokemon.types.map((item) => (
              <CoreTypeBadge type={item.type.name} key={item.slot} />
            ))}
          </Stack>
        </Stack>

        {!hideButton ? (
          <Link href={`/pokemon/${pokemon.name.replaceAll(' ', '-')}`}>
            <CoreButton variant="contained" color="primary">
              More Detail
            </CoreButton>
          </Link>
        ) : null}
      </Grid2>
    </Grid2>
  );
}
