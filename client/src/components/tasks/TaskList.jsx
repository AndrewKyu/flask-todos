import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem.jsx';

import { getTasks } from '../../actions/taskActions';

class TaskList extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getTasks();
  }
  render() {
    const { tasks, loading } = this.props.task;
    let taskItems;
    if(tasks === null || loading){
      taskItems = (<h1>LOADING...</h1>);
    }else{
      const descending = tasks.reverse();
      taskItems = descending.map((task) => (
        <TaskItem name={task.name} description={task.description} done={task.done} key={task.id} id={task.id}/>
      ));
    }
    return (
      <div className="task-list">
        <ul className="list-group">
          {taskItems}
        </ul>
      </div>
    )
  }
}

TaskList.propTypes = {
  getTasks: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  task: state.task
});

export default connect(mapStateToProps, { getTasks })(TaskList);
