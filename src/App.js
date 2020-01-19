import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import LogOut from "./components/LogOut/LogOut";
import GiveThingsAwayMain from "./components/GiveThingsAway/GiveThingsAwayMain";
import AdminPanel from "./components/Admin/Admin"
import PrivateRoute from "./components/Session/privateRoute";
import { AuthProvider } from "./components/Session/auth";

class App extends Component {

    render() {
        return (
            <AuthProvider>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/logowanie' component={Login}/>
                        <Route path='/rejestracja' component={Register}/>
                        <Route path='/wylogowano' component={LogOut}/>
                        <PrivateRoute path='/oddaj-rzeczy' component={GiveThingsAwayMain}/>
                        <PrivateRoute path='/admin' component={AdminPanel}/>
                    </Switch>
                </HashRouter>
            </AuthProvider>
        );
    }
}

export default App;