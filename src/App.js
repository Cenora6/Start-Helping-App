import React, {Component} from 'react';
import {
    HashRouter,
    Route,
} from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import LogOut from "./components/LogOut/LogOut";
import GiveThingsAwayMain from "./components/GiveThingsAway/GiveThingsAwayMain";
import PrivateRoute from "./components/Session/privateRoute";
import { AuthProvider } from "./components/Session/auth";
import { AnimatedSwitch } from 'react-router-transition';
import {LanguageProvider} from './components/Language/LanguageProvider';

class App extends Component {

    render() {

        return (
            <LanguageProvider>
                <AuthProvider>
                    <HashRouter>
                        <AnimatedSwitch
                            atEnter={{opacity: 0}}
                            atLeave={{opacity: 0}}
                            atActive={{opacity: 1}}
                            className="switch-wrapper"
                        >
                            <Route exact path='/' component={Home}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/register' component={Register}/>
                            <Route path='/logout' component={LogOut}/>
                            <PrivateRoute path='/donate' component={GiveThingsAwayMain}/>
                        </AnimatedSwitch>
                    </HashRouter>
                </AuthProvider>
            </LanguageProvider>
        );
    }
}

export default App;