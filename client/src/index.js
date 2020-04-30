
import React from "react";
import ReactDOM from "react-dom";
import Home from './components/Home.jsx';
import EditTask from './components/tasks/EditTask.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {

  render(){
    return (
      <Provider store={ store }>
        <Router>
          <div className="todos-app">
            <div className="container mt-4">
                <Switch>
                  <Route exact path="/" component={ Home }/>
                </Switch>
                <Switch>
                  <Route exact path="/edit-task/:id" component={ EditTask }/>
                </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
};


ReactDOM.render(<App />, document.querySelector("#root"));
