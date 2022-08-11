import React from 'react';
import AppBar from '@mui/material/AppBar';
import { ListItem, ListItemButton, ListItemText } from '@mui/material/'

function TopBar() {
  return (
    <div>
      <AppBar className='NavBar' position="sticky">
      <ListItem key="LiDiceRoller" disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="LiTextDiceRoller" />
      </ListItemButton>
      </ListItem>
      </AppBar>
    </div>
  );
}

export default TopBar;
