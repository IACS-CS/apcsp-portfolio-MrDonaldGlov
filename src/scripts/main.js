import "../styles/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";

console.log("What?");
console.log("Hello world, from main.js!");
if (typeof window !== "undefined") {
Aos.init();
  // MOST of your code should go.
  //
  // If you see a SSR error, try moving your code here!
  console.log("Hello world, browser :-)");
}

import "@picocss/pico/css/pico.min.css";
import axios from 'axios';

async function fetchPlaylist(playlistId) {
    const token = 'YOUR_ACCESS_TOKEN'; // Replace with your actual access token
    try {
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const playlist = response.data;
        const container = document.getElementById('playlist-container');
        container.innerHTML = `
            <h2>${playlist.name}</h2>
            <ul>
                ${playlist.tracks.items.map(item => `<li>${item.track.name} - ${item.track.artists.map(artist => artist.name).join(', ')}</li>`).join('')}
            </ul>
        `;
    } catch (error) {
        console.error('Error fetching playlist:', error);
    }
}