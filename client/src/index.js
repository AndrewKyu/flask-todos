
import React from "react";
import ReactDOM from "react-dom";
import TaskForm from './components/Form/TaskForm.jsx';
import TaskList from './components/tasks/TaskList.jsx';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  constructor(props){
    super(props);
    this.getSubmittedTask = this.getSubmittedTask.bind(this);
  }
  getSubmittedTask(newTask){
    const { tasks } = this.state;
    tasks.push(newTask);
    this.setState({tasks: tasks});
  }
  render(){
    return (
      <Provider store={ store }>
        <div className="todos-app">
          <div className="container mt-4">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <TaskForm postTask={this.getSubmittedTask}/>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
};


ReactDOM.render(<App />, document.querySelector("#root"));
