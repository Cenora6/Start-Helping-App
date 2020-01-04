import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import LogOut from "./components/LogOut/LogOut";

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/logowanie' component={Login}/>
          <Route path='/rejestracja' component={Register}/>
          <Route path='/wylogowano' component={LogOut}/>
        </Switch>
      </HashRouter>
  );
}

export default App;
