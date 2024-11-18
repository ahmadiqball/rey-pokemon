import { Box, BoxProps } from '@mui/material';
import Image from 'next/image';

interface CoreImage extends BoxProps {
  src: string;
  alt: string;
}

export function CoreImage({ src, alt, ...props }: CoreImage) {
  return (
    <Box {...props} position="relative">
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </Box>
  );
}
