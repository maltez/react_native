// Homework 7
// - Create comments component.
// - Component contains input field.
// - Component contains submit button.
// - In the top component has comment list.
// - Apply pretty styles :)

import React, { Component } from 'react';
import './Comments.css';

const Comment = (props) => {
  return <div>
      <span className="date">[{props.date.toLocaleTimeString()}]</span>
      <span className="comment">{props.text}</span> 
    </div>;
}

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = { text: "", comments: [] };
  }

  onChange(event) {
    this.setState({ 
      text: event.target.value, 
      comments: this.state.comments
    });
  }

  onSubmit() {
    const comments = this.state.comments;
    comments.push({ date: new Date(), text: this.state.text});
    this.setState( { text: "", comments: comments } );
  }

  render() {
    return <div className="border">
      <div className="header">Comments</div>
      { this.state.comments.map((item, index) => <Comment key={index} date={item.date} text={item.text} />) }
      <br/>
      <input type="text" size="100" onChange={this.onChange.bind(this)} value={this.state.text} />
      <input type="button" onClick={this.onSubmit.bind(this)} value="Submit" />
    </div>;
  }
}

export default Comments;
