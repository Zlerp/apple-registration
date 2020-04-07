import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Registration from './components/registration/registration';
import ShowcasePhone from "./components/showcasePhone/showcasePhone";
import Login from "./components/login/login";
import Header from "./components/header/header";
import ShowcaseHome from "./components/showcaseHome/showcaseHome";

export default function Routes() {

    const [isAuth, setIsAuth] = useState(true);
    // const [user, setUser] = useState({});
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
        <Router>
            <div>
                <Header isAuth={isAuth} signOut={signOut} checkUserAuth={checkUserAuth}/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/register">
                        <Registration checkUserAuth={checkUserAuth} updateUsers={updateUsers}/>
                    </Route>
                    <Route path="/login">
                        <Login users={users} checkUserAuth={checkUserAuth}/>
                    </Route>
                    <PrivateRoute authed={isAuth} path='/iphone' component={ShowcasePhone} />
                    <PrivateRoute authed={isAuth} path='/showcase' component={ShowcaseHome} />
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}

