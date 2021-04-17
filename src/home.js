import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="Home">
      <div className="grid">
        
        <Link to="/htmlbeginner">
        <button className="card">
          <h3>HTML - Beginner &rarr;</h3>
          <p>This tutorial teaches you the basics about HTML</p>
        </button>
        </Link>

        <Link to="/cssbeginner">
        <button className="card">
          <h3>CSS - Beginner &rarr;</h3>
          <p>This tutorial teaches you the basics about CSS</p>
        </button>
        </Link>

        <Link to="/jsbeginner">
        <button className="card">
          <h3>JavaScript - Beginner &rarr;</h3>
          <p>This tutorial teaches you the basics about JavaScript</p>
        </button>
        </Link>

        <Link to="/nodebeginner">
        <button className="card">
          <h3>Node.js - Beginner &rarr;</h3>
          <p>This tutorial teaches you the basics about Node.js</p>
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;