
import { Typography } from '@mui/material';

import EditablePlaylist from '../components/EditablePlaylist';

export default function MyPlaylists() {
    return (
        <div>
            <Typography variant='h3'>My Playlists</Typography>
            <EditablePlaylist />
        </div>
    )
};