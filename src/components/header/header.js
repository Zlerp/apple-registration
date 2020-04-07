import React from "react";
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {Navbar, Nav, NavItem } from "react-bootstrap";

export default function Header(props) {
    let history = useHistory();

    return (
        <div>
            <Navbar>
                <Navbar.Brand as={Link} to="/" >
                    Home
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <NavItem eventkey={1} href="/login">
                            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                        </NavItem>
                        <NavItem eventkey={2} href="/register">
                            <Nav.Link as={Link} to="/register" >Register</Nav.Link>
                        </NavItem>
                        {
                            props.isAuth &&
                            <React.Fragment>
                                <NavItem eventkey={3} href="/iphone">
                                    <Nav.Link as={Link} to="/iphone" >iPhone</Nav.Link>
                                </NavItem>
                                <NavItem eventkey={4} href="/iphone" onClick={() => {
                                    props.signOut(() => history.push("/"));
                                }}>
                                    <Nav.Link>Sign Out</Nav.Link>
                                </NavItem>
                            </React.Fragment>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}