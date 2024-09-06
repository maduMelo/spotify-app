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

    getMyPlaylists: async (accessToken, userID, offset, limit, savePlaylists, setHasMore) => {
        const url = 'https://api.spotify.com/v1/me/playlists';

        try {
            const response = await spotifyServices.GETRequestWithParams(accessToken, url, { userID, offset, limit });
            
            const newPlaylists = response.items;
            savePlaylists(prevPlaylists => [...prevPlaylists, ...newPlaylists]);

            if (newPlaylists.length < limit) setHasMore(false);

        }
        catch (error) {
            console.error('Failed to request featured playlists', error);
            setHasMore(false);
        };
    },

    getTracksByQuery: async (accessToken, query, offset, limit, saveTracks, setHasMore) => {
        const url = 'https://api.spotify.com/v1/search';

        try {
            const response = await spotifyServices.GETRequestWithParams(accessToken, url, { q: query, type: 'track', offset, limit });

            const newTracks = response.tracks.items;
            saveTracks(prevTracks => [...prevTracks, ...newTracks]);

            if (newTracks.length < limit) setHasMore(false);
        }
        catch (error) {
            console.error('Failed to request tracks by query', error);
            setHasMore(false);
        };
    },
};


export default spotifyControllers;