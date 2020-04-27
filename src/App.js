import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';

import Boards from './scenes/boards';
import Login from './scenes/sign/scenes/login';
import Register from './scenes/sign/scenes/register';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login/:username">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Boards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
