import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/logowanie' component={Login}/>
          <Route path='/rejestracja' component={Register}/>
        </Switch>
      </HashRouter>
  );
}

export default App;
