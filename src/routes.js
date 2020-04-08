import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import Registration from './components/registration/registration';
import Login from "./components/login/login";
import Header from "./components/header/header";
import ShowcaseHome from "./components/showcaseHome/showcaseHome";
import ShowcaseMenu from "./components/showcaseMenu/showcaseMenu";
import ShowcaseWatch from "./components/showcaseWatch/showcaseWatch";


export default function Routes() {
    const [isAuth, setIsAuth] = useState(false);
    const [users, setUsers] = useState([
        {
            email: 'admin@email.com',
            password: 'password',
            name: 'Super Admin',
            age: '18',
        }
    ]);

    const updateUsers = (newUser) => {
        setUsers([...users, newUser])
    };

    const checkUserAuth = (isUserAuth) => {
         if (isUserAuth) {
             setIsAuth(true);
         } else {
             setIsAuth(false);
         }
    };

    const signOut = () => {
        setIsAuth(false);
    };


    return (
        <Router basename="/">
            <div>
                <Header isAuth={isAuth} signOut={signOut} checkUserAuth={checkUserAuth}/>
                <Switch>
                    <Route exact path="/">
                        <Login users={users} checkUserAuth={checkUserAuth}/>
                    </Route>
                    <Route path="/register">
                        <Registration checkUserAuth={checkUserAuth} updateUsers={updateUsers}/>
                    </Route>
                    <PrivateRoute authed={isAuth} path='/showcase' component={ShowcaseHome} />
                    <PrivateRoute authed={isAuth} path='/menu' component={ShowcaseMenu} />
                    <PrivateRoute authed={isAuth} path='/watch' component={ShowcaseWatch} />
                </Switch>
            </div>
        </Router>
    );
}

function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
        />
    )
}

