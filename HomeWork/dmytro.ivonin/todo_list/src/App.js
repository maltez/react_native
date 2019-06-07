import React, { Component } from 'react';
import ToDoList from './Components/ToDoList/ToDoList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {task: '', tasks: []};
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODO List</h1>
        </header>
        
        <ToDoList tasks={this.state.tasks}/>
        
        <div>
          <input className='Input' 
                type='text' 
                name='comment' 
                defaultValue='Type a new task here'
                onChange={this.onInputChange} 
                onFocus={this.handleFocus}/>
          <label>{`\t`}</label>
          <button onClick={this.handleSubmit} disabled={this.state.task.length === 0}>Submit</button>
        </div>
      </div>
    );
  }


  onInputChange(event) {
      this.setState({task: event.target.value});
  }

  handleSubmit() {
      this.setState({tasks: [...this.state.tasks, this.state.task]})
  }

  handleFocus(event) {
      event.target.select();
  }
}

export default App;
