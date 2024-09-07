import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

import { Box, Avatar } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

import spotifyControllers from '../controllers/spotifyController';


export default function PlaylistDialog({ open, setOpen, playlistInfo, setPlaylistInfo }) {
    const [playlistUpdate, setPlaylistUpdate] = React.useState({
        name: playlistInfo.name,
        description: playlistInfo.description,
        public: true
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setPlaylistUpdate(prevPlaylistUpdate => ({...prevPlaylistUpdate, [id]: value}));
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleUpdate = async () => {
        if (setPlaylistInfo) {
            setPlaylistInfo(playlistUpdate);
            handleClose();
        }
        else {
            const accessToken = localStorage.getItem('access_token');
            await spotifyControllers.updatePlaylistInfo(accessToken, playlistInfo.id, playlistUpdate);

            playlistInfo.name = playlistUpdate.name;
            playlistInfo.description = playlistUpdate.description;
            handleClose();
        };
    };

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            PaperProps={{
                sx: {
                    borderRadius: 3,
                    bgcolor: '#2d2d2d',
                    color: 'white',
                    width: 600,
                    maxWidth: '80%',
                },
            }}
        >
            <DialogTitle sx={{ m: 0, p: 2, bgcolor: '#2d2d2d', color: 'white', borderRadius: 3 }} id="customized-dialog-title">
                Edit details
            </DialogTitle>

            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent
                sx={{ 
                    bgcolor: '#2d2d2d', display: 'flex', gap: 2, alignItems: 'center',
                    p: 1, marginInline: 2
                }}
            >
                <Avatar variant="square"
                    sx={{ width: 195, height: 195, bgcolor: '#454545', borderRadius: 1.5 }}
                >
                    <MusicNoteIcon sx={{ fontSize: 80, color: '#787878' }} />
                </Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, width: 340 }}>
                    <TextField id="name" label="Name" variant="outlined"
                        value={playlistUpdate.name}
                        onChange={handleInputChange}
                    />
                    <TextField id="description" label="Description" variant="outlined"
                        multiline rows={4}
                        value={playlistUpdate.description}
                        onChange={handleInputChange}
                    />
                </Box>
            </DialogContent>

            <DialogActions sx={{ bgcolor: '#2d2d2d', borderRadius: 3 }}>
                <Button autoFocus variant='contained' 
                    sx={{ 
                        textTransform: 'none', bgcolor: 'white', color: 'black', fontWeight: 'bold',
                        padding: '10px 35px', borderRadius: '50px', fontSize: 14,
                        marginRight: 2, marginBottom: 2,
                        '&:hover': { transform: 'scale(1.03)', transition: '0.1s' }
                    }}
                    onClick={handleUpdate}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};