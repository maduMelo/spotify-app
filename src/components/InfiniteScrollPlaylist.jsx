import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Typography, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';

import spotifyControllers from '../controllers/spotifyController';
import { UserContext } from '../context/userContext';

const FeaturedPlaylists = () => {
    const accessToken = localStorage.getItem('access_token');
    const { user } = React.useContext(UserContext);

    const [playlists, setPlaylists] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(3);
    const limit = 3;

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
            loader={<CircularProgress sx={{ p: 0, m: 2 }}/>}
            endMessage={<Typography variant="h6">No more playlists</Typography>}
        >
            <div>
                {playlists.slice(2).map((playlist, index) => (
                    <Card key={index} sx={{ maxWidth: 345, mb: 2 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={playlist.images? playlist.images[0].url : 'https://cdn-icons-png.freepik.com/512/7919/7919609.png'}
                            alt={playlist.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {playlist.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {playlist.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </InfiniteScroll>
    );
};

export default FeaturedPlaylists;
