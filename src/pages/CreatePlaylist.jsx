import React from 'react';
import { Container } from '@mui/material';

import SearchTracks from '../components/SearchTracks';
import EditablePlaylist from '../components/EditablePlaylist';

export default function CreatePlaylist() {
    // Create the state to store the playlist
    // Create the action to the save buttons

    return (
        <Container maxWidth="sm" sx={{ pt: 4 }}>
            <EditablePlaylist />
            <SearchTracks />
        </Container>
    )
};