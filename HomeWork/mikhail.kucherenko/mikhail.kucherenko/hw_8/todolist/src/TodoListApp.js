import React, { Component } from 'react';
import './TodoList.css';
import TodoListComponent from './Components/TodoListComponent';



class TodoListApp extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">Todo List Application</h1>
        <TodoListComponent/>
      </div>
    );
  }
}

export default TodoListApp;
