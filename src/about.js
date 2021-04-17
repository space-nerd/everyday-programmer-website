import React from 'react';
import './App.css';

function About() {

  return (
    <div className="About">
      <h1>About Me</h1>
        <ul className="description">
          <li><h3>const my = new human;</h3></li>
          <li><h3>my.age(13);</h3></li>
          <li><h3>my.location(Ohio, USA);</h3></li>
          <li><h3>my.hobbies(programming, watching YouTube);</h3></li>
        </ul>
    </div>
  );
}

export default About;