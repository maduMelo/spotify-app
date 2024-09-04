import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

import spotifyControllers from '../controllers/spotifyController';

const FeaturedPlaylists = () => {
    const accessToken = localStorage.getItem('access_token');
    const [playlists, setPlaylists] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);
    const limit = 3;

    const fetchPlaylists = async () => {
        spotifyControllers.getFeaturedPlaylists(accessToken, offset, limit, playlists, setPlaylists, setHasMore);
    };

    useEffect(() => {
        fetchPlaylists();
    }, [offset]);

    const loadMorePlaylists = () => {
        setOffset(prevOffset => prevOffset + limit);
    };

    return (
        <InfiniteScroll
            dataLength={playlists.length}
            next={loadMorePlaylists}
            hasMore={hasMore}
            loader={<Typography variant="h6">Loading...</Typography>}
            endMessage={<Typography variant="h6">No more playlists</Typography>}
        >
            <div>
                {playlists.map((playlist, index) => (
                    <Card key={index} sx={{ maxWidth: 345, mb: 2 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={playlist.images[0]?.url}
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
