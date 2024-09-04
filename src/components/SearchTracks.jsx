import React from 'react';
import { Box, Button, Container, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import EditablePlaylist from './EditablePlaylist';

export default function SearchTracks() {
  const songs = [
    { id: 1, title: 'Cruel Summer', artist: 'Taylor Swift', albumCover: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647' },
    { id: 2, title: 'Cruel Summer', artist: 'Taylor Swift', albumCover: 'link_to_image_2' },
    { id: 3, title: 'Cruel Summer', artist: 'Taylor Swift', albumCover: 'link_to_image_3' },
    { id: 4, title: 'Cruel Summer', artist: 'Taylor Swift', albumCover: 'link_to_image_4' },
  ];

  return (
    <Container maxWidth="sm" sx={{ pt: 4 }}>
      <EditablePlaylist />

      <Box mt={4} display="flex" alignItems="center" sx={{ bgcolor: '#282828', borderRadius: '50px', p: 1 }}>
        <IconButton>
          <SearchIcon sx={{ color: 'white' }} />
        </IconButton>
        <InputBase
          placeholder="Search for artists or albums to find new songs"
          sx={{ ml: 1, flex: 1, color: 'white' }}
        />
      </Box>

      <List sx={{ mt: 2 }}>
        {songs.map((song, index) => (
          <ListItem key={index} 
            sx={{ 
              bgcolor: '#181818', borderRadius: '8px', mb: 1,
              '&:hover': {bgcolor: 'rgba(255, 231, 231, 0.06)'}
            }}
          >
            <ListItemAvatar>
              <Avatar src={song.albumCover} variant="square" sx={{ borderRadius: 1 }} />
            </ListItemAvatar>

            <ListItemText primary={song.title} secondary={song.artist} />

            <Button variant="outlined" 
              sx={{ 
                textTransform: 'none', borderColor: 'white', color: 'white', borderRadius: '50px', pr: 5, pl: 5,
                '&:hover': {bgcolor: 'rgba(255, 231, 231, 0.06)', transform: 'scale(1.05)'} 
              }}
            >
              Add
            </Button>
          </ListItem>
        ))}
      </List>

    </Container>
  );
};
