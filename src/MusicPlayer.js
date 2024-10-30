import React, { useState } from 'react';

const MusicPlayer = (properties) => {

    return (
        <div>
            <h1>Music Player</h1>
            {properties && properties.song && (
                <audio controls src={"api/song/" + properties.song} type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
};

export default MusicPlayer;
