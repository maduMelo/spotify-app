import React from 'react';
import { UserContext } from '../context/userContext';

import InfiniteScrollPlaylist from '../components/InfiniteScrollPlaylist';

import spotifyControllers from "../controllers/spotifyController";


export default function Profile() {
  const { setUser } = React.useContext(UserContext);
  const accessToken = localStorage.getItem('access_token');

  React.useEffect(() => {
    if (accessToken) spotifyControllers.getProfile(accessToken, setUser);
  }, []);

  return (<InfiniteScrollPlaylist />);
};