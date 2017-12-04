import React, { Component } from 'react';

const categories = ['New Task', 'Update', 'Task Completion', 'Call Out'];

class TaskForm extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      this.props.onSubmit({
        category: this.category.value,
        content: this.content.value
      });
      this.category.value = categories[0];
      this.content.value = '';
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="task-form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Category:
              <select ref={(input) => this.category = input}>
                {categories.map((category, index) =>
                  <option key={category} value={category}>{category}</option>
                )}
              </select>
            </label>
            <label>
              Content:
              <input type="text" ref={(input) => this.content = input} />
            </label>
            <button className="button">Submit</button>
          </form>
        </div>
      )
    }
  }
  
  export default TaskForm;