import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { getCurrentTask, updateTask } from '../../actions/taskActions';

import InputTextField from '../common/InputTextField.jsx';
import TextFieldArea from '../common/TextFieldArea.jsx';

class EditTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      done: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(e){
    e.preventDefault();
    this.setState({ [e.target.name]: ((e.target.name === 'done') ? e.target.checked  : e.target.value) });
  }

  onSave(e){
    e.preventDefault();
    const { id } = this.props.match.params;
    const { name, description, done } = this.state;
    const { updateTask } = this.props;
    const updatedData = {
      name,
      description,
      done
    }
    updateTask(id, updatedData);
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    const { getCurrentTask } = this.props;
    if(id){
      getCurrentTask(id);
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.task.loading){
      console.log('loading...');
    }else{
      let task = nextProps.task.task;
      this.setState({ name: task.name, description: task.description, done: task.done });
    }
  }

  render() {
    const { name, description, done } = this.state;
    return (
      <div className="edit-task">
        <form onSubmit={this.onSave}>
          <InputTextField
            id="task-name"
            forLabel="Task Name"
            type="text"
            placeholder="Name your task"
            name="name"
            onChange={this.onChange}
            value={name}
          />
          <TextFieldArea
            forLabel="Description"
            id="task-description"
            name="description"
            onChange={this.onChange}
            value={description}
          />
          <InputTextField
            id="task-done"
            forLabel="Is task done?"
            type="checkbox"
            name="done"
            onChange={this.onChange}
            value={done}
          />
          <input type="submit" value="Save" className="btn btn-success mt-3"/>
          <Link to='/' className="btn btn-secondary mt-3 ml-2">Cancel</Link>
        </form>
      </div>
    )
  }
}

EditTask.propTypes = {
  getCurrentTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  task: state.task
})
export default connect(mapStateToProps, { getCurrentTask, updateTask })(withRouter(EditTask));
