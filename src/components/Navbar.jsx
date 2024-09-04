import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import logo from '../assets/logo.png';

import { useNavigate } from "react-router-dom";

import { Outlet } from 'react-router-dom';


const pages = ['Create Playlist', 'My Playlists'];
const settings = ['Logout'];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'rgba(255, 231, 231, 0.06)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

          <Button
            key='logo-md'  color="inherit"
            onClick={ () => { navigate(`/profile`)} }
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          >
            <img src={logo} alt="app logo" />
          </Button>


            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={ () => { navigate(`/${page.toLowerCase().replace(' ', '-')}`)} }>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Button
              key='logo-xs'  color="inherit"
              onClick={ () => { navigate(`/profile`)} }
              sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 50 }}
            >
              <img src={logo} alt="app logo" />
            </Button>
            

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}  color="inherit"
                  onClick={ () => { navigate(`/${page.toLowerCase().replace(' ', '-')}`)} }
                  sx={{ textTransform: 'none' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}
                  sx={{ 
                    p: 1, m: 1, bgcolor: 'rgba(255, 231, 231, 0.06)', transition: 'all 0.1s ease',
                    '&:hover': {bgcolor: 'rgba(255, 231, 231, 0.06)', transform: 'scale(1.05)'} 
                  }}
                >
                  <Avatar alt='' src='' />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
export default ResponsiveAppBar;
