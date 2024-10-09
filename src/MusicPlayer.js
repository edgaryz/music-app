import React, { useState } from 'react';
import axios from 'axios';

const MusicPlayer = () => {
    const [songUrl, setSongUrl] = useState(null);

    const fetchSong = async () => {
        try {
            const response = await axios.get('/api/song', {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            setSongUrl(url);
        } catch (error) {
            console.error('Error fetching the song', error);
        }
    };

    return (
        <div>
            <h1>Music Player</h1>
            <button onClick={fetchSong}>Play Song</button>
            {songUrl && (
                <audio controls>
                    <source src={songUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
};

export default MusicPlayer;
