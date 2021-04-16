import React from 'react';
import Home from './pages/booking/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/nav/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path = "/" component = { Home } />
        <Route exact path = "/login" component = { Login } />
        <Route exact path = "/register" component = { Register } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
