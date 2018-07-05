import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComponent from './Components/InputComponent/TodoComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], todoInput: '' };
    this.onNewTodo = this.onNewTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onNewTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.todoInput]
    });
    this.state.todoInput = '';
  }

  render() {
    return (
      <div className="App">
        {this.state.todos.map((todo) => <TodoComponent name={todo} />)}
        <input value={this.state.todoInput} type="text" name={"todoInput"} onChange={this.onInputChange} />
        <button onClick={this.onNewTodo}> Add new Todo</button>
      </div>
    );
  }
}

export default App;