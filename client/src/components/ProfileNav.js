import React, { Component } from 'react';
import "./ProfileNav.css";


const styles = {
    anchorStyle: {
      float: "right"
    }
  };
  
  
  const ProfileNav = () => (
    <nav style={styles.navbarStyle} className="navbar">
      <a style={styles.anchorStyle} href="/">
        NicksList
      </a>
      <form className="navbar-form navbar-left">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Username" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-default">
        Sign In
      </button>
    </form>
    </nav>
  );
  
  export default ProfileNav;
  