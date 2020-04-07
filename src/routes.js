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

export default function Routes() {

    const [isAuth, setIsAuth] = useState(false);
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
                    <PrivateRoute path="/iphone" isAuth={isAuth}>
                        <ShowcasePhone />
                    </PrivateRoute>
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

function PrivateRoute(props, { children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                props.isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

