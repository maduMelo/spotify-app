import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Avatar } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

import PlaylistDialog from './PlaylistDialog';

export default function EditablePlaylist() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center">
                    <Avatar variant="square" onClick={handleClickOpen}
                        sx={{ width: 180, height: 180, bgcolor: '#2d2d2d', borderRadius: 1.5, cursor: 'pointer' }}
                    >
                        <MusicNoteIcon sx={{ fontSize: 80, color: '#787878' }} />
                    </Avatar>

                    <Box ml={2}>
                        <Typography variant="subtitle1">Public playlist</Typography>
                        <Typography variant="h4" fontWeight="bold" onClick={handleClickOpen}
                            sx={{ cursor: 'pointer' }}
                        >
                            My playlist n° X
                        </Typography>
                    </Box>
                </Box>

                
            </Box>

            <PlaylistDialog open={open} setOpen={setOpen} />
        </>
    );
};