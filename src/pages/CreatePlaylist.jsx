import React from 'react';
import { Container, Button, Box } from '@mui/material';
import { UserContext } from '../context/userContext';

import spotifyControllers from '../controllers/spotifyController';

import SearchTracks from '../components/SearchTracks';
import EditablePlaylist from '../components/EditablePlaylist';


export default function CreatePlaylist() {
    const accessToken = localStorage.getItem('access_token');
    const { user } = React.useContext(UserContext);
    
    const [playlist, setPlaylist] = React.useState([]);
    const [body, setBody] = React.useState({
        name: 'Testando 1..2..3..',
        description: 'Playlist created by Playlist Maker',
        public: true
    });

    const handleCreatePlaylist = async () => {
        const playlistID = await spotifyControllers.createPlaylist(accessToken, user.id, body);
        const tracksID = playlist.map(track => `spotify:track:${track}`);
        await spotifyControllers.addTracksOnPlaylist(accessToken, playlistID, tracksID);
    };

    return (
        <Container maxWidth="lg" sx={{ pt: 4 }}>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '97%' }}>
                <EditablePlaylist playlistInfo={body} setPlaylistInfo={setBody} />

                <Button variant="contained" onClick={ () => console.log(playlist) }
                    sx={{ textTransform: 'none', bgcolor: '#1FDF64', color: 'black' }}
                >
                    Save
                </Button>
            </Box>

            <SearchTracks setPlaylist={setPlaylist} />
        </Container>
    )
};