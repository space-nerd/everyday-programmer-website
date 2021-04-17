import React from 'react';
import './App.css';
import Nav from './nav';
import Home from './home';
import About from './about';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
