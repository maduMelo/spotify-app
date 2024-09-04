import spotifyServices from '../services/spotifyService';

const spotifyControllers = {
    getProfile: async (accessToken, saveProfileInfo) => {
        const url = 'https://api.spotify.com/v1/me';

        try {
            const data = await spotifyServices.GETRequest(accessToken, url);
            if (data) saveProfileInfo(data);
        }
        catch (error) { console.error('Failed to request profile information', error) };
    },

    getFeaturedPlaylists: async (accessToken, offset, limit, playlists, savePlaylists, setHasMore) => {
        const url = 'https://api.spotify.com/v1/browse/featured-playlists';

        try {
            const response = await spotifyServices.GETRequestWithParams(accessToken, url, { offset, limit });
            
            const { items, total } = response.playlists;
            console.log(items);
            savePlaylists(prevPlaylists => [...prevPlaylists, ...items]);

            if (playlists.length >= total) setHasMore(false);
        }
        catch (error) {
            console.error('Failed to request featured playlists', error);
            setHasMore(false);
        };
    },
};


export default spotifyControllers;