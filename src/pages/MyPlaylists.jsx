
import { Typography } from '@mui/material';
import PlaylistDialog from '../components/PlaylistDialog';

export default function MyPlaylists() {
    return (
        <div>
            <Typography variant='h3'>My Playlists</Typography>
            <PlaylistDialog />
        </div>
    )
};