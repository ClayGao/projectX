import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Nav from './components/nav'
import Home from './components/home'

//TODO: 刻前端
function App() {
  return (
    <Router>
      <div>
        <Nav />
      </div>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

export default App;
