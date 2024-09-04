import { Button, Typography } from '@mui/material';

import authControllers from '../controllers/authController';

export default function Homepage() {

    return (
        <>
            <Typography variant='h3'>Spotify App</Typography>
            <Button onClick={authControllers.handleAuthorizationRequest} >Log In</Button>
        </>
    );
};