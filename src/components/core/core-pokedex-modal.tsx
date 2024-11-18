import { Box, Button, Modal } from '@mui/material';
import { IconClose } from '../icons/icon-close';
import { Pokemon } from '~/typings/pokemon.entity';
import { CorePokedexDetail } from './core-pokedex-detail';

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

        <CorePokedexDetail pokemon={pokemon} />
      </Box>
    </Modal>
  );
}
