import React from 'react';

import { Button, Typography } from '@mui/material';

import spotifyControllers from "../controllers/spotifyController";




export default function Profile() {

    const accessToken = localStorage.getItem('access_token');
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        if (accessToken) spotifyControllers.getProfile(accessToken, setData);
    }, [accessToken]);

    return (
        <>
            <Typography variant='h3'>Profile</Typography>
            { data ? <Button onClick={() => console.log(data)}>Clica aquiiii</Button> : <p>Não gerou token</p> }
        </>
    );
};

// { data && <Navbar profilePic={data.images[0].url} />}