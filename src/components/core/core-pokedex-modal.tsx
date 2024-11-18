import { Box, Button, Grid2, Modal, Stack, Typography } from '@mui/material';
import { IconClose } from '../icons/icon-close';
import { Pokemon } from '~/typings/pokemon.entity';
import { CoreImage } from './core-image';
import { CoreTypeBadge } from './core-type-badge';
import { CoreButton } from './core-button';
import Link from 'next/link';

export function CorePokedexModal({
  open,
  pokemon,
  close,
}: {
  open: boolean;
  pokemon: Pokemon;
  close: () => void;
}) {
  return (
    <Modal open={open}>
      <Box
        bgcolor="white"
        padding={5}
        width="80%"
        maxWidth={1162}
        maxHeight="90%"
        borderRadius={6}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          overflowY: 'scroll',
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={close}>
            <IconClose />
          </Button>
        </Box>

        <Grid2 container spacing={3} marginTop={5}>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <CoreImage
              width="100%"
              height={400}
              src={
                pokemon.sprites.other['official-artwork']?.front_default || ''
              }
              alt={`Image of ${pokemon.name}`}
              sx={{ objectFit: 'contain' }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 7 }}>
            <Typography
              fontSize={40}
              fontWeight={700}
              textTransform="capitalize"
            >
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

            <Link href={`/pokemon/${pokemon.name.replaceAll(' ', '-')}`}>
              <CoreButton variant="contained" color="primary">
                More Detail
              </CoreButton>
            </Link>
          </Grid2>
        </Grid2>
      </Box>
    </Modal>
  );
}
