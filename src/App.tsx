import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from './TopBar'
import DiceRoller from './DiceRoller';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar></TopBar>
        <Routes>
        <Route path='/' element={<DiceRoller/>} />
        <Route path='/DiceRoller' element={<DiceRoller/>} />
        <Route path='/Login' element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
