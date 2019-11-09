import React, {Component, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Login.scss';

const Login = props => {

    return (
        <div className="login-page">
            <form className="login-page__form">
                <div className="login-page__form__username">
                    Username: <input  />
                </div>
                <div className="login-page__form__password">
                    Password: <input type="password" />
                </div>
                <input className="login-page__form__submit" type="button" value="Send" />
            </form>
        </div>
    )
}

export default Login