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
import PrivateRoute from "./components/Session/privateRoute";
import { AuthProvider } from "./components/Session/auth";
import { AnimatedSwitch } from 'react-router-transition';

class App extends Component {

    render() {
        return (
            <AuthProvider>
                <HashRouter>
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper"
                    >
                        <Route exact path='/' component={Home}/>
                        <Route path='/logowanie' component={Login}/>
                        <Route path='/rejestracja' component={Register}/>
                        <Route path='/wylogowano' component={LogOut}/>
                        <PrivateRoute path='/oddaj-rzeczy' component={GiveThingsAwayMain}/>
                    </AnimatedSwitch>
                </HashRouter>
            </AuthProvider>
        );
    }
}

export default App;