import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Typography, CircularProgress, Skeleton } from '@mui/material';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

import spotifyControllers from '../controllers/spotifyController';
import { UserContext } from '../context/userContext';
import PlaylistCard from './PlaylistCard';

const FeaturedPlaylists = () => {
  const accessToken = localStorage.getItem('access_token');
  const { user } = React.useContext(UserContext);

  const [playlists, setPlaylists] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(3);
  const limit = 8;

  const fetchPlaylists = async () => {
    if (user) {
      spotifyControllers.getMyPlaylists(accessToken, user.id, offset, limit, setPlaylists, setHasMore);
    };

  };

  useEffect(() => {
    fetchPlaylists();
  }, [offset, user]);

  const loadMorePlaylists = () => {
    if (hasMore) setOffset(prevOffset => prevOffset + limit);
  };

  return (
    <InfiniteScroll
      dataLength={playlists.length}
      next={loadMorePlaylists}
      hasMore={hasMore}
      loader={<CircularProgress sx={{ p: 0, m: 2, color: '#1FDF64' }} />}
      endMessage={<Typography variant="h6">No more playlists</Typography>}
    >
      {
        playlists.length > 0 ? (
          <Box sx={{ display: 'center', alignItems: 'center', justifyContent: 'center' }} m={4}>
            <Box maxWidth='lg' sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 20 }}>
                {playlists.slice(8).map((playlist, index) => (
                  <Grid key={index} size={{ xs: 2, sm: 4, md: 5 }} >
                    <PlaylistCard playlist={playlist} index={index} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: 'center', alignItems: 'center', justifyContent: 'center' }} m={4}>
            <Box maxWidth='lg' sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 20 }}>
                {[...Array(8)].map((_, index) => (
                  <Grid key={index} size={{ xs: 2, sm: 4, md: 5 }} >
                    <Skeleton variant="rectangular" width={240} height={220}
                      sx={{ borderRadius: '12px', bgcolor: '#1F1F1F' }}

                    />
                    <Skeleton variant="text" width={160} sx={{ fontSize: '18px', bgcolor: '#1F1F1F' }} />
                    <Skeleton variant="text" width={245} sx={{ fontSize: '12px', bgcolor: '#1F1F1F' }} />
                    <Skeleton variant="text" width={190} sx={{ fontSize: '12px', bgcolor: '#1F1F1F' }} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        )
      }

    </InfiniteScroll>
  );
};

export default FeaturedPlaylists;
