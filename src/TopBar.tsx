import React from 'react';
import AppBar from '@mui/material/AppBar';
import Nav from 'react-bootstrap/Nav';

function TopBar() {
  return (
    <div>
      <AppBar className='NavBar' position="sticky">
          <Nav className="me-auto">
            <Nav.Link href="./DiceRoller">Dice Roller</Nav.Link>
            {/* <Nav.Link href="./Login">Work In Progress</Nav.Link> */}
          </Nav>
      </AppBar>
    </div>
  );
}

export default TopBar;
