import React, { Component } from 'react';

class Task extends Component {
    constructor(props){
      super(props);
      this.task = props.task;
      this.state = props.task;
    }
  
    onChange(event) {
      this.task.checked = event.target.checked;

      this.setState({
        text: this.state.text,
        checked: this.task.checked
      });
    }
  
    render() {
      return <div>
        <input type="checkbox" onChange={this.onChange.bind(this)} checked={this.state.checked} />
        <span className={this.state.checked ? "checked" : ""}> {this.state.text} </span>
      </div>;
    }
}

export default Task;