import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTask } from '../../actions/taskActions';

class TaskItem extends Component {
  constructor(props){
    super(props);
    this.onDeleteTask = this.onDeleteTask.bind(this);
    this.onEditTask = this.onEditTask.bind(this);
  }
  onEditTask(e){
    e.preventDefault();
    const { id } = this.props;
    console.log('editing task...');
  }
  onDeleteTask(e){
    e.preventDefault();
    const { id, deleteTask } = this.props;
    deleteTask(id);
  }
  render() {
    const { name, description, done } = this.props;
    return (
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <span className={(done) ? "badge card-link badge-success" : "badge card-link badge-danger"}>{(done) ? 'done' : 'not done'}</span>
          {/* <p className="card-text">Created: {created_at}</p> */}
          <button type="button" className="btn btn-secondary btn-sm card-link" onClick={this.onEditTask}>Edit Task</button>
          <button type="button" className="btn btn-danger btn-sm card-link" onClick={this.onDeleteTask}>Delete</button>
        </div>
      </div>
    )
  }
}

TaskItem.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
  task: state.task
})

export default connect(mapStateToProp, { deleteTask })(TaskItem);
