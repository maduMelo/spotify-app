const spotifyServices = {
    GETRequest: async (accessToken, url, params) => {
        const urlWithParams = new URL(url);
        Object.keys(params).forEach(key => urlWithParams.searchParams.append(key, params[key]));

        const response = await fetch(urlWithParams, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const data = await response.json();
        return data;
    },

    POSTRequest: async (accessToken, url, body) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body
        });

        const data = await response.json();
        return data;
    },

    PUTRequest: async (accessToken, url, body) => {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body
        });
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return;
    },

    DELETERequest: async (accessToken, url) => {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return;
    }
};


export default spotifyServices;