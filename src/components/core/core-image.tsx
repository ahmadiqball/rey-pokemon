import { Box, BoxProps, styled } from '@mui/material';
import Image from 'next/image';

interface CoreImage extends BoxProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export function CoreImage({ src, alt, width, height, ...props }: CoreImage) {
  return (
    <Box {...props}>
      <StyledImage src={src} alt={alt} width={width} height={height} />
    </Box>
  );
}
