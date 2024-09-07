import React from "react";
import { useLocation } from "react-router-dom";

import PlaylistCard from "../components/PlaylistCard";
import { Box, Button } from "@mui/material";


export default function FinishedPlaylist() {
    const location = useLocation();
    const playlist = location.state;

    return (
        <Box sx={{ display: 'center', alignItems: 'center', justifyContent: 'center' }} >
            <Box m={10} 
                sx={{ 
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: 2,
                }}
            >
                <PlaylistCard playlist={playlist} index={0} />

                <Button variant='contained' href={`https://open.spotify.com/playlist/${playlist.id}`} target='_blank'
                    sx={{ 
                        textTransform: 'none', bgcolor: '#1FDF64', color: 'black', fontWeight: 'bold',
                        padding: '10px 35px', borderRadius: '50px', fontSize: '1rem',
                        '&:hover': { transform: 'scale(1.03)', transition: '0.1s' }
                    }}
                >
                    Open In Spotify
                </Button>
            </Box>
        </Box>
    );
};