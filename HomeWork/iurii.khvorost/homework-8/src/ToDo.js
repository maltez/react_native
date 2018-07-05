import React, { Component } from 'react';
import './todo.css';
import Tasks from "./Tasks";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {text: "New task", tasks: []};
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
    tasks.push(text);
    this.setState({
      text: "",
      tasks: tasks
    });
  }

  render() {
    return (
      <div className="border">
        <div className="header">TODO</div>
        <Tasks tasks={this.state.tasks} />
        <div className="controls">
          <input type="text" size="50" value={this.state.text} onChange={this.onChange.bind(this)} /> <input type="button" value="ADD" onClick={this.onAdd.bind(this)} />
        </div>
      </div>
    );
  }
}

export default ToDo;
