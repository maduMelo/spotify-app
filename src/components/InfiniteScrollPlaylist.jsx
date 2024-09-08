import React from 'react';
import { Box, Typography, CircularProgress, Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import InfiniteScroll from 'react-infinite-scroll-component';
import { UserContext } from '../context/userContext';

import PlaylistCard from './PlaylistCard';

import spotifyControllers from '../controllers/spotifyController';

// Componente da página inicial - "Profile"
// Carrega as playlists do usuário logado (criadas + seguidas) implementando o infinitescroll


export default function FeaturedPlaylists() {
  // Busca o token  de acesso retornado pelo Spotify e as informações do usuário salvas no contexto
  const accessToken = localStorage.getItem('access_token');
  const { user } = React.useContext(UserContext);

  // Estados para armazenar as playlists a serem exibidas e controlar o carregamento infinito
  const [playlists, setPlaylists] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [offset, setOffset] = React.useState(0);
  const limit = 8;

  const fetchPlaylists = async () => {
    if (user) spotifyControllers.getMyPlaylists(accessToken, user.id, offset, limit, setPlaylists, setHasMore);
  };

  const loadMorePlaylists = () => { if (hasMore) setOffset(prevOffset => prevOffset + limit) };

  React.useEffect(() => { fetchPlaylists() }, [offset, user]);

  return (
    <InfiniteScroll
      dataLength={playlists.length}
      next={loadMorePlaylists}
      hasMore={hasMore}
      loader={<CircularProgress sx={{ p: 0, m: 2, color: '#1FDF64' }} />}
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