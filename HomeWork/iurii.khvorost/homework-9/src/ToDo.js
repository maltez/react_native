import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './todo.css';
import Tasks from "./Tasks";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
      , tasks: [
        {text: "First task", checked: false},
        {text: "Second task", checked: false},
        {text: "Third task", checked: false}
      ]};
  }

  onChange(event) {
    this.setState({
      text: event.target.value,
      tasks: this.state.tasks
    });
  }

  onAdd(event) {
    let text = this.state.text;
    if (text.length === 0) {
      return;
    }

    let tasks = this.state.tasks;
    tasks.push({text: text, checked: false});
    this.setState({
      text: "",
      tasks: tasks
    });
  }

  render() {
    return (
      <div className="border">
        <div className="header">TODO</div>
        <div className="filter">Filter: <Link to="/">All</Link> <Link to="/active">Active</Link> <Link to="/new">New</Link></div>
        
        <Switch>
          <Route exact path='/' render={() => <Tasks tasks={this.state.tasks} />}/>
          <Route path='/active' render={() => <Tasks tasks={this.state.tasks.filter(task => !task.checked)} />} />
          <Route path='/new' render={() => { 
            return this.state.tasks.length > 0
              ? <Tasks tasks={[this.state.tasks[this.state.tasks.length - 1]]} /> 
              : <div></div>;
            }}
          />
        </Switch>

        <div className="controls">
          <input type="text" size="50" value={this.state.text} onChange={this.onChange.bind(this)} /> <input type="button" value="ADD" onClick={this.onAdd.bind(this)} />
        </div>
      </div>
    );
  }
}

export default ToDo;
