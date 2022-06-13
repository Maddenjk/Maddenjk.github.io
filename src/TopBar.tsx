import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function TopBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="./DiceRoller">Dice Roller</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBar;
