import React, { Component } from 'react'
import TaskForm from './Form/TaskForm.jsx';
import TaskList from './tasks/TaskList.jsx';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.getSubmittedTask = this.getSubmittedTask.bind(this);
  }
  getSubmittedTask(newTask){
    const { tasks } = this.state;
    tasks.push(newTask);
    this.setState({tasks: tasks});
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <TaskForm postTask={this.getSubmittedTask}/>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <TaskList />
        </div>
      </div>
    )
  }
}
