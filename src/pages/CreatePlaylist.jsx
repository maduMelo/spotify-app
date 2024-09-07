import React from 'react';
import { Container, Button, Box } from '@mui/material';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

import spotifyControllers from '../controllers/spotifyController';

import SearchTracks from '../components/SearchTracks';
import EditablePlaylist from '../components/EditablePlaylist';


export default function CreatePlaylist() {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('access_token');
    const { user } = React.useContext(UserContext);
    
    const [playlist, setPlaylist] = React.useState([]);
    const [body, setBody] = React.useState({
        name: 'My Playlist',
        description: 'Playlist created by Playlist Maker',
        public: true
    });

    const handleCreatePlaylist = async () => {
        const playlistID = await spotifyControllers.createPlaylist(accessToken, user.id, body);
        const tracksID = playlist.map(track => `spotify:track:${track}`);
        await spotifyControllers.addTracksOnPlaylist(accessToken, playlistID, tracksID);

        navigate('/finished-playlist', { state: {...body, id: playlistID, owner: { id: user.id }} });
    };

    return (
        <Container maxWidth="lg" sx={{ pt: 4 }}>

            <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', width: '97%' }}>
                <EditablePlaylist playlistInfo={body} setPlaylistInfo={setBody} />

                <Button variant="contained" onClick={handleCreatePlaylist}
                    sx={{ 
                        textTransform: 'none', bgcolor: '#1FDF64', color: 'black', fontWeight: 'bold',
                        padding: '10px 35px', borderRadius: '50px', fontSize: '1rem',
                        '&:hover': { transform: 'scale(1.03)', transition: '0.1s' }
                    }}
                >
                    Create Playlist
                </Button>
            </Box>

            <SearchTracks setPlaylist={setPlaylist} />
        </Container>
    )
};