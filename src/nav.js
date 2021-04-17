import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
      <nav>
        <Link to="/">
          <img src="icon.png" alt=""/>
        </Link>
        <ul className="nav-links">
          <Link to="/tutorials">
            <li><button className="tutorialsBtn">Tutorials</button></li>
          </Link>
          <Link to="/about">
            <li><button className="aboutBtn">About</button></li>
          </Link>
        </ul>
      </nav>
  );
}

export default Nav;
