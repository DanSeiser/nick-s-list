import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import logo from './logo.svg';

const App = () => (
  <Router>
      <div className="container-fluid">
    <Navbar />
    <Wrapper>
      <Route exact path="/" component={Login} />
      <Route exact path="/Feed" component={Feed} />
      <Route exact path="/Task-Management" component={Management} />
    </Wrapper>
  </div>
  </Router>

);


export default App;
