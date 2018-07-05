import React, { Component } from 'react';
import store from "./store";

export default class Task extends Component {
    constructor(props){
      super(props);
      this.state = {task: props.task};
    }

    onChange(event) {
      store.dispatch({
        type: 'COMPLETE', 
        task: this.state.task, 
        completed: event.target.checked
      });
    }
  
    render() {
      return <div>
        <input type="checkbox" onChange={this.onChange.bind(this)} checked={this.state.task.completed} />
        <span className={this.state.task.completed ? "checked" : ""}> {this.state.task.text} </span>
      </div>;
    }
}