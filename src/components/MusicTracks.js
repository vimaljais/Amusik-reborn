import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar } from '@mui/material';

export default function MusicTrack({ musicList, setCurrentlyPlaying }) {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'black', marginTop: '50px', color: 'white' }}
      aria-label='contacts'
    >
      {musicList.map((music) => (
        <ListItemButton key={music.trackId}>
          <ListItem button>
            <ListItemIcon>
              <Avatar src={music.artworkUrl100} />
            </ListItemIcon>
            <ListItemText
              onClick={() => setCurrentlyPlaying(music.trackName)}
              sx={{ float: 'right' }}
              primary={music.trackName}
              secondary={music.artistName}
            />
          </ListItem>
        </ListItemButton>
      ))}
    </List>
  );
}
