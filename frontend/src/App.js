import logo from './logo.svg';
import { useEffect, useState, useRef } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Home from './pages/Home.js'
import Films from './pages/Films.js'
import People from './pages/People.js'
import Planets from './pages/Planets.js'
import Spaceships from './pages/Spaceships.js'
import Species from './pages/Species.js'
import Vehicle from './pages/Vehicle.js'
import NotFound from './pages/404.js'

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/films" element={<Films />} />
              {/* <Route path="/people" element={<People />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/spaceships" element={<Spaceships />} />
              <Route path="/species" element={<Species />} />
              <Route path="/vehicle" element={<Vehicle />} />
              <Route path="*" element={<NotFound />} /> */}
            </Routes>
      </div>
    </Router>
  );
}


export default App;



/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/
