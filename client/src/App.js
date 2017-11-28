import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login';
import Feed from './pages/Feed';
import Management from './pages/Management';
import Wrapper from './components/Wrapper/Wrapper';

const App = () => (
  <Router>
    <div className="container-fluid">
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Login} />
        <Route exact path="/Task-Feed" component={Feed} />
        <Route exact path="/Task-Management" component={Management} />
      </Wrapper>
    </div>
  </Router>

);


export default App;
