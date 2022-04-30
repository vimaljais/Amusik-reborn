import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './App.css';
import MusicTrack from './components/MusicTracks';
import SearchInput from './components/SearchInput';

function App() {
  const [musicList, setMusicList] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  useEffect(() => {
    if (currentlyPlaying != null) {
      fetch(`http://localhost:3000/geturl?name=${currentlyPlaying}`)
        .then((res) => res.json())
        .then((res) => {
          const player = document.getElementById('audio');
          const url = `http://localhost:3000/stream?url=${res}`;
          player.src = url;
          player.play();
        })
        .catch((err) => console.log(err));
    }
  }, [currentlyPlaying]);

  return (
    <div className='App'>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} item xs={6}>
            <SearchInput setMusicList={setMusicList} />
            <MusicTrack setCurrentlyPlaying={setCurrentlyPlaying} musicList={musicList} />
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              height: '100vh',
              alignItems: 'center',
            }}
            item
            xs={6}
          >
            <audio
              style={{ width: '80%' }}
              id='audio'
              src='http://localhost:3000/stream?url=fxrkhf17fU0'
              autoPlay
              controls
            />
          </Grid>
        </Grid>
      </Box>
      {/* <button onClick={() => loadUrlToAudio()}>load</button> */}
      {/* <button onClick={() => fetcher()}>caller</button> */}
    </div>
  );
}

export default App;
