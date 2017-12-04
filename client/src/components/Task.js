import React, { Component } from 'react';

class Task extends Component {
    render() {
      return (
        <div className="task">
          <span className="label">{this.props.value.category}</span>
          <span className="content">{this.props.value.content}</span>
        </div>
      )
    }
  }
  
  
  export default Task;