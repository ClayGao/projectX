import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Nav.scss';

const Nav = props => {
    return (
        <nav className="menu">
            <li className="menu-title">
                <Link to="/">Home</Link>
            </li>
            <li className="menu-title">
                <Link to="/">about</Link>
            </li>
            <li className="menu-title">
                test1
            </li>
            <li className="menu-title">
                test3
            </li>
            <li className="menu-title">
                test5
            </li>
        </nav>
    )
}

export default Nav