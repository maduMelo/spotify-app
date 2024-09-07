import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

import { Menu, MenuItem, ListItemIcon } from '@mui/material';
import Edit from '@mui/icons-material/EditOutlined';
import Check from '@mui/icons-material/CheckCircle';

import { UserContext } from '../context/userContext';
import spotifyControllers from '../controllers/spotifyController';

import PlaylistDialog from './PlaylistDialog';


export default function PlaylistCard({ playlist, index }) {
    const { user } = React.useContext(UserContext);
    const accessToken = localStorage.getItem('access_token');

    const [menuPosition, setMenuPosition] = React.useState({ x: 0, y: 0 });
    const [openMenu, setOpenMenu] = React.useState(false);

    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setMenuPosition({ x: event.clientX, y: event.clientY });
        setOpenMenu(true);
    };

    const handleClose = () => { setOpenMenu(false) };

    const handleEdit = () => { setOpenDialog(true) };

    const handleUnfollowPlaylist = async () => {
        await spotifyControllers.unfollowPlaylist(accessToken, playlist.id);
        // snackbar avisando que apagou
    };


    return (
        <>
            <Card key={index}
                sx={{ 
                    maxWidth: 345, backgroundColor: 'transparent', boxShadow: 'none',
                    height: '90%', borderRadius: '10px', transition: '0.3s', padding: 2,
                    '&:hover': { bgcolor: "rgba(255, 231, 231, 0.06)"}
                }}
            >
                <CardActionArea onContextMenu={handleClick} onClick={() => console.log(playlist)}>
                    <CardMedia
                        component="img"
                        height="220"
                        sx={{ borderRadius: '8px', objectFit: 'fill' }}
                        image={playlist.images ? playlist.images[0].url : 'https://img.freepik.com/fotos-premium/fundo-de-design-de-gradiente-quadrado-azul_7954-31444.jpg'}
                        alt={playlist.name}
                    />

                    <CardContent sx={{ padding: '8px' }}>
                        <Typography gutterBottom variant="h6" component="div"
                            sx={{ 
                                fontSize: '16px', color: '#E6E6E6', fontWeight: 'bold',
                                WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box'
                            }}
                        >
                            {playlist.name}
                        </Typography>
                        <Typography variant="body2"
                            sx={{ 
                                fontSize: '12px', color: '#E6E6E6',
                                WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box'
                            }}
                        >
                            {playlist.description.substring(0, 7) !== '<a href' ? playlist.description : ''}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Menu id="account-menu" open={openMenu} onClose={handleClose}
                anchorReference="anchorPosition" anchorPosition={{ top: menuPosition.y, left: menuPosition.x }}
                slotProps={{ paper: { sx: {
                    overflow: 'visible', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))', mt: 1.5, width: 300,
                    bgcolor: '#414141', color: '#EBEBEB'
                }}}}
            >   
                {
                    user.id === playlist.owner.id ?
                    <MenuItem onClick={handleEdit}>
                        <ListItemIcon sx={{ color: '#EBEBEB' }}>
                            <Edit fontSize="small" />
                        </ListItemIcon>
                        Edit details
                    </MenuItem> :
                    
                    <MenuItem onClick={handleUnfollowPlaylist}>
                        <ListItemIcon sx={{ color: '#1FDF64' }}>
                            <Check fontSize="small" />
                        </ListItemIcon>
                        Remove from your library
                    </MenuItem>
                }
            </Menu>

            <PlaylistDialog open={openDialog} setOpen={setOpenDialog} playlistInfo={playlist} setPlaylistInfo={null} />
        </>
    );
};
