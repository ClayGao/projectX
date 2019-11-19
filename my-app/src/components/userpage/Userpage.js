import React, {Component, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import './Userpage.scss';

const SidebarTab = ({to, exact, label}) => {
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

const ShoppingCart = props => {
    return (
        <div className="shopping-cart">
            <div className="shopping-cart__item">
                <div className="shopping-cart__itrm__photo"> 
                </div>
                <div className="shopping-cart__itrm__name"> 
                </div>
                <div className="shopping-cart__itrm__price"> 
                </div>
            </div>

            <div className="shopping-cart__item">
                <div className="shopping-cart__itrm__photo"> 
                </div>
                <div className="shopping-cart__itrm__name"> 
                </div>
                <div className="shopping-cart__itrm__price"> 
                </div>
            </div>

            <div className="shopping-cart__item">
                <div className="shopping-cart__itrm__photo"> 
                </div>
                <div className="shopping-cart__itrm__name"> 
                </div>
                <div className="shopping-cart__itrm__price"> 
                </div>
            </div>
        </div>

        
    )
}

const Userpage = props => {

    return (
        <div className="userinfo-page">
            <div className="userinfo-page__siderbar">
                <SidebarTab to="/mypage/shopping_cart" label="Shopping Cart" />
                <SidebarTab to="/mypage/my_account" label="My Account" />
            </div>
            <div className="userinfo-page__content">
                <Switch>
                    <Route path="/mypage/shopping_cart" component={ShoppingCart} />
                </Switch>
            </div>
        </div>
    )
}

export default Userpage