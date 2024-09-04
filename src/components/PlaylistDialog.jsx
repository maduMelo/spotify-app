import * as React from 'react';
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


export default function PlaylistDialog({ open, setOpen }) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            onClose={handleClose}
            open={open}
        >
            <DialogTitle sx={{ m: 0, p: 2, bgcolor: '#2d2d2d', color: 'white' }} id="customized-dialog-title">
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
                sx={{ bgcolor: '#2d2d2d', display: 'flex', gap: 2, alignItems: 'center', p: 4 }}
            >
                <Avatar variant="square"
                    sx={{ width: 195, height: 195, bgcolor: '#454545', borderRadius: 1.5 }}
                >
                    <MusicNoteIcon sx={{ fontSize: 80, color: '#787878' }} />
                </Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    <TextField id="name" label="Name" variant="outlined" />
                    <TextField id="description" label="Description" variant="outlined" multiline rows={4} />
                </Box>
            </DialogContent>

            <DialogActions sx={{ bgcolor: '#2d2d2d' }}>
                <Button autoFocus variant='contained' onClick={handleClose}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};