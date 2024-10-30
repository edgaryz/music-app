import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer';

function App() {
    const [songName, setSongName] = useState("song.mp3");
    return (
        <div className="App">
            <button onClick={() => setSongName("song2.mp3")} > SWITCH SONG {songName} </button>
            <Playlist onSelected={(song) => xxxx}/> /////////////////////////////////////////
            <MusicPlayer song={songName}/>
        </div>
    );
}

export default App;
