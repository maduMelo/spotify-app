import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

import PlaylistDialog from './PlaylistDialog';

// Componente da página "Create playlist"
// Representa a playlist que o usuário está criando (nome, privacidade e imagem)
// Ao ser clicado, abre um modal para edição da playlist


export default function EditablePlaylist({ playlistInfo, setPlaylistInfo }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Avatar variant="square" onClick={handleClickOpen}
            sx={{ width: 180, height: 180, bgcolor: '#2d2d2d', borderRadius: 1.5, cursor: 'pointer' }}
          >
            <MusicNoteIcon sx={{ fontSize: 80, color: '#787878' }} />
          </Avatar>

          <Box ml={2}>
            <Typography variant="subtitle1">{playlistInfo.public ? 'Public' : 'Private'} playlist</Typography>
            <Typography variant="h4" fontWeight="bold" onClick={handleClickOpen}
              sx={{ cursor: 'pointer' }}
            >
              {playlistInfo.name}
            </Typography>
          </Box>
        </Box>
      </Box>

      <PlaylistDialog open={open} setOpen={setOpen} playlistInfo={playlistInfo} setPlaylistInfo={setPlaylistInfo} />
    </>
  );
};