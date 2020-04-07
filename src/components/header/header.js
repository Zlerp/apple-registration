import React from "react";
import {Link} from "react-router-dom";
import { useLocation, useHistory } from 'react-router-dom'
import {Navbar, Nav, NavItem } from "react-bootstrap";
import './header.scss'

export default function Header(props) {
    let history = useHistory();
    let location = useLocation();
    let pathName = location.pathname.replace('/', '-');
    pathName = (pathName == '-') ? '' : pathName;

    return (
        <div className={pathName != '' ? pathName+'-page':''}>
            <Navbar className="p-0">
                <Navbar.Brand as={Link} to="/" >
                    <svg
                        viewBox="0 0 1000 1187.198"
                        version="1.1"
                        style={{height: '30px'}}>
                        <path
                            style={{fill: 'white'}}
                            d="m 979.04184,925.18785 c -17.95397,41.47737 -39.20563,79.65705 -63.82824,114.75895 -33.56298,47.8528 -61.04356,80.9761 -82.22194,99.3698 -32.83013,30.192 -68.00529,45.6544 -105.67203,46.5338 -27.04089,0 -59.6512,-7.6946 -97.61105,-23.3035 -38.08442,-15.5358 -73.08371,-23.2303 -105.08578,-23.2303 -33.56296,0 -69.55888,7.6945 -108.06101,23.2303 -38.5608,15.6089 -69.62484,23.7432 -93.37541,24.5493 -36.12049,1.5389 -72.1237,-14.3632 -108.06101,-47.7796 -22.93711,-20.0059 -51.62684,-54.3017 -85.99592,-102.8874 C 92.254176,984.54592 61.937588,924.38175 38.187028,855.7902 12.750995,781.70252 0,709.95986 0,640.50361 0,560.94181 17.191859,492.32094 51.626869,434.81688 78.689754,388.62753 114.69299,352.19192 159.75381,325.44413 c 45.06086,-26.74775 93.74914,-40.37812 146.18212,-41.25019 28.68971,0 66.3125,8.8744 113.06613,26.31542 46.62174,17.49964 76.55727,26.37404 89.68198,26.37404 9.8124,0 43.06758,-10.37669 99.4431,-31.06405 53.31237,-19.18512 98.30724,-27.12887 135.16787,-23.99975 99.8828,8.06098 174.92313,47.43518 224.82789,118.37174 -89.33023,54.12578 -133.51903,129.93556 -132.63966,227.18753 0.8061,75.75115 28.28668,138.78795 82.2952,188.8393 24.47603,23.23022 51.81008,41.18421 82.22186,53.93522 -6.59525,19.12648 -13.557,37.44688 -20.95846,55.03446 z M 749.96366,23.751237 c 0,59.37343 -21.69138,114.810233 -64.92748,166.121963 -52.17652,60.99961 -115.28658,96.24803 -183.72426,90.68597 -0.87204,-7.12298 -1.37769,-14.61967 -1.37769,-22.49743 0,-56.99843 24.81315,-117.99801 68.87738,-167.873453 21.99909,-25.25281 49.978,-46.25018 83.90738,-63.00018 C 686.57507,10.688027 718.59913,1.5631274 748.71783,5.2734376e-4 749.59727,7.9378274 749.96366,15.875627 749.96366,23.750467 Z"
                            id="path4"
                        />
                    </svg>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        {
                            !props.isAuth &&
                            <React.Fragment>
                                <NavItem eventkey={1} href="/">
                                    <Nav.Link as={Link} to="/" >Login</Nav.Link>
                                </NavItem>
                                <NavItem eventkey={2} href="/register">
                                    <Nav.Link as={Link} to="/register" >Register</Nav.Link>
                                </NavItem>
                            </React.Fragment>
                        }
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