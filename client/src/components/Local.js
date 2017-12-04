import React, { Component } from 'react';

class Local extends Component {
    render() {
      return (
        <div className="well">
            <h3><span class="fa fa-user"></span> Local</h3>    
                <div>
                        <strong>id</strong>: <%= user._id %><br>
                        <strong>email</strong>: <%= user.local.email %><br>
                        <strong>password</strong>: <%= user.local.password %>
                </div>
        </div>;
  
  export default Local;