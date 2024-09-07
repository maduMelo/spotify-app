import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';

import { Menu, MenuItem, ListItemIcon } from '@mui/material';
import PersonAdd from '@mui/icons-material/EditOutlined';
import Settings from '@mui/icons-material/DoNotDisturbOnOutlined';

export default function PlaylistCard({ playlist, index }) {
    const [menuPosition, setMenuPosition] = React.useState({ x: 0, y: 0 });
    const [open, setOpen] = React.useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setMenuPosition({ x: event.clientX, y: event.clientY });
        setOpen(true);
    };

    const handleClose = () => { setOpen(false) };

    return (
        <>
            <Card key={index}
                sx={{ 
                    maxWidth: 345, backgroundColor: 'transparent', boxShadow: 'none',
                    height: '90%', borderRadius: '10px', transition: '0.3s', padding: 2,
                    '&:hover': { bgcolor: "rgba(255, 231, 231, 0.06)"}
                }}
            >
                <CardActionArea onContextMenu={handleClick}>
                    <CardMedia
                        component="img"
                        height="220"
                        sx={{ borderRadius: '8px', objectFit: 'fill' }}
                        image={playlist.images ? playlist.images[0].url : 'https://cdn-icons-png.freepik.com/512/7919/7919609.png'}
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

            <Menu id="account-menu" open={open} onClose={handleClose}
                anchorReference="anchorPosition" anchorPosition={{ top: menuPosition.y, left: menuPosition.x }}
                slotProps={{ paper: { sx: {
                    overflow: 'visible', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))', mt: 1.5, width: 300,
                    bgcolor: '#414141', color: '#EBEBEB'
                }}}}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon sx={{ color: '#EBEBEB' }}>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Edit details
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon sx={{ color: '#EBEBEB' }}>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Delete
                </MenuItem>
            </Menu>
        </>
    );
};
