import React from "react";
import './Jumbotron.css';

const Jumbotron = () => (
  <div className="jumbotron">
    <h1>WELCOME.</h1>
    <h2>YOU’RE ABOUT TO BECOME EVERYONE’S BITCH.</h2>
    <p>
    You’re a piece of shit. You say you’re gonna make a list of to-dos, and you can’t even bother to
    lift your lazy little finger. All of that is gonna change. Now you’re gonna hold yourself accountable.
    More specifically, other people are gonna hold you accountable. And they’re gonna call you out.
    Still up for it? Good. Create yourself an account and make yourself useful.
    </p>
    <form className="col-md-12 jumbo-form">
      <div className="col-md-5 form-group">
        <input type="text" className="form-control" placeholder="First Name" />
      </div>
      <div className="col-md-5 form-group">
        <input type="text" className="form-control" placeholder="Last Name" />
      </div>
      <div className="col-md-5 form-group">
        <input type="email" className="form-control" placeholder="Email Address" />
      </div>
      <div className="col-md-5 form-group">
        <input type="email" className="form-control" placeholder="Confirm Email" />
      </div>
      <div className="col-md-5 form-group">
        <input type="text" className="form-control" placeholder="Password" />
      </div>
      <div className="col-md-5 form-group">
        <input type="text" className="form-control" placeholder="Confirm Password" />
      </div>
      <button type="submit" className="btn btn-default">
        Create Account
      </button>
  </form>
  </div>
);

export default Jumbotron;
