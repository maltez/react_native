import React, { Component } from 'react';
import { Routes } from './routes';
import { Switch, Route } from 'react-router-dom';
import ToDoList from './Components/ToDoList/ToDoList';

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {task: '', tasks: []};
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.togleCheckerApp = this.togleCheckerApp.bind(this);
  }

  render() {
    return (
      <div>
          <div>
            <header className="App-header">
              <h1 className="App-title">TODO List</h1>
            </header>
            <Routes/>
            <Switch>
              <Route path="/All"      render={() => <ToDoList filter="All"      tasks={this.state.tasks} onCheckTogle={this.togleCheckerApp}/>}/>
              <Route path="/Done"     render={() => <ToDoList filter="Done"     tasks={this.state.tasks} onCheckTogle={this.togleCheckerApp}/>}/>
              <Route path="/NotDone"  render={() => <ToDoList filter="NotDone"  tasks={this.state.tasks} onCheckTogle={this.togleCheckerApp}/>}/>
            </Switch>
            
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
      </div>
    );
  }

  togleCheckerApp(index) {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.tasks[index].taskDone = !stateCopy.tasks[index].taskDone;
    this.setState(stateCopy);
  }

  onInputChange(event) {
      this.setState({task: event.target.value});
  }

  handleSubmit() {
      this.setState({tasks: [...this.state.tasks, 
        {
          taskId: this.state.tasks.length, 
          taskText: this.state.task,
          taskDone: false
        }]});
  }

  handleFocus(event) {
      event.target.select();
  }
}

export default App;
