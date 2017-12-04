import React, { Component } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import Filter from './Filter';

const categories = ['New Task', 'Update', 'Task Completion', 'Call Out'];

class List extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: JSON.parse(localStorage.getItem('tasks')) || [],
        filteredTasks: []
      }
  
      this.handleNewTask = this.handleNewTask.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
    }
  
    handleNewPost(post) {
      var tasks = this.state.tasks.concat([task]);
      this.setState({posts: tasks});
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
      handleFilter(filter) {
      this.setState({
        filteredTasks: this.state.tasks.filter((task) =>
          task.category.toUpperCase() === filter.toUpperCase() ||
            task.content.includes(filter)
        )
      });
    }
  
    render() {
      const tasks = this.state.tasks.map((task, index) =>
        <Task key={index} value={Task} />
      );
      const filteredTasks = this.state.filteredTasks.map((task, index) =>
        <Task key={index} value={task} />
      );
      return (
        <div className="list">
          <Filter onFilter={this.handleFilter} />
          {filteredTasks.length > 0 ? filteredTasks : tasks}
          <TaskForm onSubmit={this.handleNewTask} />
        </div>
      )
    }
  }
  
  export default List;