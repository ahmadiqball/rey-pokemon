import { Container, Grid2, Typography } from '@mui/material';
import { CoreButton } from '~/components/core/index.component';
import { CoreImage } from '~/components/core/index.component';
const images = [
  '/images/img-pokemon-blue.svg',
  '/images/img-pokemon-green.svg',
  '/images/img-pokemon-red.svg',
];

export function LandingBanner() {
  return (
    <Container>
      <Grid2
        container
        alignItems="center"
        minHeight="calc(100vh - 89px)"
        paddingY={{ xs: '32px', lg: '64px' }}
      >
        <Grid2 size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
          <Typography fontSize={{ xs: 32, lg: 52 }} fontWeight={700}>
            All the Pokémon data you&apos;ll ever need in one place!
          </Typography>
          <Typography fontSize={20} marginTop={2}>
            Thousands of data compiled into one place
          </Typography>

          <CoreButton variant="contained" color="primary">
            Check PokèDex
          </CoreButton>
        </Grid2>

        <Grid2
          size={{ xs: 12, md: 6 }}
          order={{ xs: 1, md: 2 }}
          container
          justifyContent="center"
          marginLeft="-5%"
          marginTop="10%"
        >
          {images.map((image, index) => (
            <Grid2 key={image} size={3} marginLeft={-5}>
              <CoreImage
                src={image}
                width={{ xs: '200%', lg: '300%' }}
                height={{ xs: 150, sm: 352 }}
                alt="blue pokemon illustration"
                marginTop={{
                  xs: `${(index - 1) * 40}%`,
                  lg: `${(index - 1) * 80}%`,
                }}
              />
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </Container>
  );
}
