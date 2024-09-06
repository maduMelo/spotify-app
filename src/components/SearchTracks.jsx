import React from 'react';
import { Box, Button, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress, Snackbar } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import spotifyControllers from '../controllers/spotifyController';


export default function SearchTracks({ setPlaylist }) {
  const accessToken = localStorage.getItem('access_token');

  const [query, setQuery] = React.useState('');
  const [tracks, setTracks] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(false);
  const [offset, setOffset] = React.useState(0);
  const limit = 5;

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  const fetchTracks = async () => {
    if (!query) return;
    await spotifyControllers.getTracksByQuery(accessToken, query, offset, limit, setTracks, setHasMore);
    setOffset((prevOffset) => prevOffset + limit);
  };

  const handleSearch = () => {
    setTracks([]);
    setOffset(0);
    setHasMore(true);
    fetchTracks();
  };

  const handleCloseSnackbar = (event, reason) => {reason === 'clickaway' ? null : setOpenSnackbar(false)};

  const addTrackOnPlaylist = (event) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, event.target.id]);

    setOpenSnackbar(true);
    setSnackbarMessage(`${event.target.name} added to playlist`);
  };


  return (
    <>
      <Box mt={4} display="flex" alignItems="center" maxWidth='sm' sx={{ bgcolor: '#282828', borderRadius: '50px', p: 1 }}>
        <IconButton onClick={handleSearch}>
          <SearchIcon sx={{ color: 'white' }} />
        </IconButton>

        <InputBase
          placeholder="Search for artists or albums to find new songs"
          sx={{ ml: 1, flex: 1, color: 'white' }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>

      <InfiniteScroll
          dataLength={tracks.length}
          next={fetchTracks}
          hasMore={hasMore}
          loader={<CircularProgress sx={{ p: 0, m: 2, color: '#1FDF64' }}/>}
      >

        <List sx={{ mt: 2 }}>
          {tracks.map((track, index) => (
            <ListItem key={index}
              sx={{
                bgcolor: '#181818', borderRadius: '8px', mb: 1,
                '&:hover': { bgcolor: 'rgba(255, 231, 231, 0.06)' }
              }}
            >
              <ListItemAvatar>
                <Avatar src={track.album.images[2].url} variant="square" sx={{ borderRadius: 1 }} />
              </ListItemAvatar>

              <ListItemText primary={track.name} secondary={track.artists[0].name} />

              <Button variant="outlined" id={track.id} name={track.name}
                onClick={addTrackOnPlaylist}
                sx={{
                  textTransform: 'none', borderColor: 'white', color: 'white', borderRadius: '50px', width: '120px',
                  '&:hover': { bgcolor: 'rgba(255, 231, 231, 0.06)', transform: 'scale(1.05)' }
                }}
              >
                Add
              </Button>
            </ListItem>
          ))}
        </List>
      </InfiniteScroll>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </>
  );
};
