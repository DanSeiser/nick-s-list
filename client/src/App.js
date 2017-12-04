import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from './Pages/Index';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import List from './pages/List';
import MasterList from './pages/MasterList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () =>
<Router>
  <div>
    <Navbar />
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/list" component={List} />
      <Route exact path="/master-list" component={MasterList} />
    </div>
    <Footer />
  </div>
</Router>;

export default App;