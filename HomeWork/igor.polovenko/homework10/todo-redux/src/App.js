import React, { Component } from 'react';
import { ToDoList } from './components/ToDoList';
import FilterPane from './components/FilterPane';

class App extends Component {
  render() {
    return (
      <div>
        <FilterPane />
        <ToDoList />
      </div>
    );
  }
}

export default App;