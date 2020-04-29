
import React from "react";
import ReactDOM from "react-dom";
import TaskForm from './components/Form/TaskForm.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
    this.getSubmittedTask = this.getSubmittedTask.bind(this);
  }
  getSubmittedTask(newTask){
    const { tasks } = this.state;
    tasks.push(newTask);
    this.setState({tasks: tasks});
  }
  render(){
    const { tasks } = this.state;
    let taskItems;

    taskItems = tasks.map((task, index) => (
      <li className="list-group-item" key={index}>{task.name}</li>
    ))
    return (
      <div className="todos-app">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <TaskForm postTask={this.getSubmittedTask}/>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="list-group">
                {taskItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));
