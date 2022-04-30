import { TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import React from 'react';

function SearchInput({ setMusicList }) {
  const fetchMusicList = (quary) => {
    fetch(`http://localhost:3000/search?q=${quary}`)
      .then((res) => res.json())
      .then((res) => {
        setMusicList(res.results);
      })
      .catch((err) => console.log(err));
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <TextField
        sx={{ width: '60%', marginTop: '50px' }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            fetchMusicList(e.target.value);
          }
        }}
        label='Search for a song'
        id='outlined-size-small'
        defaultValue=''
        size='small'
      />
    </ThemeProvider>
  );
}

export default SearchInput;
