import { Button, Typography, Box } from '@mui/material';
import logoLg from '../assets/logo-lg.png';

import authControllers from '../controllers/authController';

export default function Homepage() {

    return (
        <Box sx={
            {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                height: '100vh',
                backgroundImage: 'linear-gradient(to bottom, #383838, #181818 80%)',
            }
        }>
            <img src={logoLg} alt="" />

            <Button onClick={authControllers.handleAuthorizationRequest} 
                variant="contained" size='large'
                sx={{ 
                    textTransform: 'none', bgcolor: '#1FDF64', color: 'black', fontWeight: 'bold',
                    padding: '11px 125px', borderRadius: '50px', fontSize: 15, marginTop: 9,
                    '&:hover': { transform: 'scale(1.03)', transition: '0.1s' }
                }}
            >
                Log In
            </Button>
        </Box>
    );
};