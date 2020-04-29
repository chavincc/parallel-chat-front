import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthContext } from './services/store/authStore';
import Navbar from './components/navbar';
import { cookieAutoLoginAPI } from './services/api';

import Boards from './scenes/boards';
import Login from './scenes/sign/scenes/login';
import Register from './scenes/sign/scenes/register';
import Home from './scenes/home';
import { ADMIN_KEY } from './config';

function App() {
  console.log(ADMIN_KEY);
  const { isAuth, logIn } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      if (!isAuth) {
        const response = await cookieAutoLoginAPI();
        if (!response.error) {
          logIn({ username: response.username });
        }
      }
    })();
  }, [isAuth, logIn]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login/:username">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/board/:boardName">
            <Boards />
          </Route>
          <Route path="/board">
            <Boards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
