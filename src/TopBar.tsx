import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function TopBar() {
  return (
    <div>
      <Navbar className='NavBar'>
          <Nav className="me-auto">
            <Nav.Link href="./DiceRoller">Dice Roller</Nav.Link>
            <Nav.Link href="./Login">Work In Progress</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  );
}

export default TopBar;
