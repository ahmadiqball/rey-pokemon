import { Box, Typography } from '@mui/material';
import { CoreTypeBadge } from './core-type-badge';

export function CorePokedexCard() {
  return (
    <Box
      bgcolor="white"
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
      <Box />
      <Box>
        <Typography
          fontSize={20}
          fontWeight={700}
          color="grey.600"
          marginTop={1.25}
        >
          #001
        </Typography>
        <Typography fontSize={40} fontWeight={700} marginTop={1.25}>
          Poke Name
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        rowGap={1.25}
        columnGap={2.5}
        marginTop={1.25}
      >
        {[...new Array(4)].map((item) => (
          <CoreTypeBadge key={item} type="bug" />
        ))}
      </Box>
    </Box>
  );
}
