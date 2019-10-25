import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Nav from './components/nav'
import MainImg from './components/mainimg'
import Home from './components/home'

//TODO: 刻前端
function App() {
  return (
    <Router>
      <div>
        <MainImg />
      </div>
      <div>
        <Nav />
      </div>
      <div className="App">
        <Router path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
