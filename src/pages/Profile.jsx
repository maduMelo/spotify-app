import React from 'react';

import { Button, Typography } from '@mui/material';

import spotifyControllers from "../controllers/spotifyController";

import { UserContext } from '../context/userContext';

import InfiniteScroll from '../components/InfiniteScroll';


export default function Profile() {
    const { setUser } = React.useContext(UserContext);
    const accessToken = localStorage.getItem('access_token');

    React.useEffect(() => {
        if (accessToken) spotifyControllers.getProfile(accessToken, setUser);
    }, []);

    return (
        <>  
            <Typography variant='h3'>Profile</Typography>
            <InfiniteScroll />
        </>
    );
};