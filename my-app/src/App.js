import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.scss';
import Nav from './components/nav'
import Home from './components/home'
import Login from './components/login'
import Userpage from './components/userpage'
import Jacket from './components/jacket'

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
          <Route path="/login" component={Login} />
          <Route path="/mypage" component={Userpage} />
          <Route path="/jacket" component={Jacket} />
        </Switch>
      </div>
      <div className="footer">
        
      </div>
    </Router>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

export default App;
