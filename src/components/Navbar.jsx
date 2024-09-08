import React from 'react';
import { Box, Container, Typography, Avatar } from '@mui/material';
import { Button, IconButton, Tooltip } from '@mui/material';
import { AppBar, Toolbar, Menu, MenuItem } from '@mui/material';

import { useNavigate, Outlet } from "react-router-dom";
import { UserContext } from '../context/userContext';

import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo-sm.png';

// Componente que aparece no topo das páginas depois que o usuário é logado
// Permite a navegação entre as páginas e o logout do usuário


const pages = ['Create Playlist'];
const settings = ['Logout'];

export default function ResponsiveNavbar() {
  const navigate = useNavigate(); // hook para realizar a navegação da navbar
  const { user } = React.useContext(UserContext); // hook para manter as informações do usuário logado na navbar

  // Estados e funções para controlar a abertura e fechamento dos menus de navegação e usuário
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => { setAnchorElNav(event.currentTarget) };
  const handleOpenUserMenu = (event) => { setAnchorElUser(event.currentTarget) };
  const handleCloseNavMenu = () => { setAnchorElNav(null) };
  const handleCloseUserMenu = () => { setAnchorElUser(null) };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'rgba(255, 231, 231, 0.06)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Button
              key='logo-md' color="inherit"
              onClick={() => { navigate(`/profile`) }}
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
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar" keepMounted
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => { navigate(`/${page.toLowerCase().replace(' ', '-')}`) }}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Button
              key='logo-xs' color="inherit"
              onClick={() => { navigate(`/profile`) }}
              sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 50 }}
            >
              <img src={logo} alt="app logo" />
            </Button>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page} color="inherit"
                  onClick={() => { navigate(`/${page.toLowerCase().replace(' ', '-')}`) }}
                  sx={{ textTransform: 'none' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={user && user.display_name}>
                <IconButton onClick={handleOpenUserMenu}
                  sx={{
                    p: 1, m: 1, bgcolor: 'rgba(255, 231, 231, 0.06)', transition: 'all 0.1s ease',
                    '&:hover': { bgcolor: 'rgba(255, 231, 231, 0.06)', transform: 'scale(1.05)' }
                  }}
                >
                  <Avatar alt={user && user.display_name} src={user && user.images[0].url} />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar" keepMounted
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}
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
};