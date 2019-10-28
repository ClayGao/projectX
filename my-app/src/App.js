import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.scss';
import Nav from './components/nav'
import Home from './components/home'

//TODO: 刻前端
function App() {
  return (
    <Router>
      <div className="navigation">
        <Nav />
      </div>
      <div className="wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      <div className="footer">
        
      </div>
    </Router>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

export default App;
