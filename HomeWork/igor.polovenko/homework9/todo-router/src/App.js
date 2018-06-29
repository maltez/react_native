import React, { Component } from 'react';
import ToDoList from './components/ToDoList';
import Routes from './routes';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
        <Switch>
          <Route
            exact path='/all'
            render={(props) => <ToDoList filter={ToDoList.filterValue().all}/>}
          />
          <Route
            exact path='/complete'
            render={(props) => <ToDoList filter={ToDoList.filterValue().complete}/>}
          />
          <Route
            exact path='/pending'
            render={(props) => <ToDoList filter={ToDoList.filterValue().pending}/>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;