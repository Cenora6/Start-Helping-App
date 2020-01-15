import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import { Admin } from 'react-admin';

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import LogOut from "./components/LogOut/LogOut";
import GiveThingsAwayMain from "./components/GiveThingsAway/GiveThingsAwayMain";
import AdminPanel from "./components/Admin/Admin";

class App extends Component {

    render() {

        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/logowanie' component={Login}/>
                    <Route path='/rejestracja' component={Register}/>
                    <Route path='/wylogowano' component={LogOut}/>
                    <Route path='/oddaj-rzeczy' component={GiveThingsAwayMain}/>
                    <Route path='/admin' component={AdminPanel}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;