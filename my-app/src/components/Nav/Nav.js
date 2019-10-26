import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import './Nav.scss';

const Tab = ({to, exact, label}) => {
    let match = useRouteMatch({
        path: to,
        exact
    })
    return (
        <li className={match ? "nav-menu-bottom-active" : "nav-menu-bottom"}>
            <Link to={to}>{label}</Link>
        </li>
    )
}

const Nav = props => {
    return (
        <nav>
            <div className ="nav-bar">
                <div className="nav-bar-homepage">
                    <div className="nav-bar-homepage-first">Clay's</div>
                    <div className="nav-bar-homepage-second">Wardrobe</div>
                </div>
                <div className="nav-bar-media">
                    <li>IG</li>
                    <li>FB</li>
                    <li>Line</li>
                </div>
                <div className="nav-bar-shoppingcart">
                    <li>LOGIN</li>
                    <li>MYPAGE</li>
                    <li>WISHLIST</li>
                    <li>CART</li>
                </div>
            </div>
            <hr />
            <div className="nav-menu">
                <Tab to="/" exact label="Home" />
                <Tab to="/about" label="about" />
                <Tab to="/jacket" label="jacket" />
            </div>
        </nav>
    )
}

export default Nav