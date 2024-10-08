// spotifyConfig.js
import SpotifyWebApi from 'spotify-web-api-node';

// Replace these with your actual credentials
const spotifyApi = new SpotifyWebApi({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    redirectUri: 'http://localhost:3000/callback' // Ensure this matches your Spotify app settings
});

// You can export the instance to use in your main.js or elsewhere
export default spotifyApi;