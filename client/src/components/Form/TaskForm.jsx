import React, { Component } from 'react'
import TextFieldArea from '../common/TextFieldArea.jsx';
import InputTextField from '../common/InputTextField.jsx';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createTask } from '../../actions/taskActions.js';

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      done: false
    }
    this.addTask = this.addTask.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  addTask(e){
    e.preventDefault();
    const { name, description, done } = this.state;
    const { postTask, createTask } = this.props;
    const newTask = {
      name,
      description,
      done
    }
    // console.log(newTask);
    createTask(newTask, this.props.history);
    // postTask(newTask);
  }
  onChange(e){
    e.preventDefault();
    console.log(e.target.checked);
    this.setState({ [e.target.name]: ((e.target.name === 'done') ? e.target.checked  : e.target.value) });
  }
  render() {
    return (
      <div className="task-form">
        <form onSubmit={this.addTask}>
          <InputTextField
            id="task-name"
            forLabel="Task Name"
            type="text"
            placeholder="Name your task"
            name="name"
            onChange={this.onChange}
          />
          <TextFieldArea
            forLabel="Description"
            id="task-description"
            name="description"
            onChange={this.onChange}
          />
          <InputTextField
            id="task-done"
            forLabel="Is Task Done?"
            type="checkbox"
            name="done"
            onChange={this.onChange}
          />
          <input type="submit" value="Add Task" className="btn btn-success"/>
        </form>
      </div>
    )
  }
}

TaskForm.propTypes = {
  createTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
  task: state.task
});

export default connect(mapStateToProp, { createTask })(TaskForm);
