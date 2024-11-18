import { Box, Stack, Typography } from '@mui/material';
import { Pokemon } from '~/typings/pokemon.entity';

const STAT_COLOR = {
  'hp': '#DE2C2C',
  'attack': '#E66D00',
  'defense': '#0571A6',
  'special-attack': '#E6AB09',
  'special-defense': '#3C48CF',
  'speed': '#01B956',
};

export function PokemonStats({
  stats,
}: {
  stats: Pick<Pokemon, 'stats'>['stats'];
}) {
  return (
    <Box marginTop={7.5}>
      <Typography fontSize={20} fontWeight={700}>
        Stats:
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        gap={6}
        maxWidth="100%"
        sx={{ overflowX: 'scroll' }}
        paddingY={4}
      >
        {stats.map((item) => (
          <Box
            bgcolor={STAT_COLOR[item.stat.name as keyof typeof STAT_COLOR]}
            key={item.stat.name}
            padding={4}
            borderRadius="50%"
            width={200}
            height={200}
            sx={{ aspectRatio: 1 }}
          >
            <Box
              textAlign="center"
              bgcolor="white"
              borderRadius="50%"
              width="100%"
              height="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography fontSize={50} fontWeight={700} lineHeight={1}>
                {item.base_stat}
              </Typography>
              <Typography
                fontSize={20}
                marginTop={1.25}
                textTransform="capitalize"
                lineHeight={1}
              >
                {item.stat.name.replaceAll('-', ' ')}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
