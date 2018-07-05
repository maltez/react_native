import React, { Component } from 'react';

class Task extends Component {
    constructor(props){
      super(props);
      this.state = {text: props.text, checked: false};
    }
  
    onClick(event) {
      this.setState({
        text: this.state.text,
        checked: event.target.checked
      });
    }
  
    render() {
      return <div>
        <input type="checkbox" onClick={this.onClick.bind(this)} checked={this.state.checked} />
        <span className={this.state.checked ? "checked" : ""}> {this.state.text} </span>
      </div>;
    }
}

export default Task;