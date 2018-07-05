import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './todo.css';
import Tasks from "./tasks";
import store from "./store";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  componentDidMount(){
      store.subscribe(() => {
          this.setState({
              text: this.state.text
          });
      });
  }

  onChange(event) {
    this.setState({ text: event.target.value });
  }

  onAdd(event) {
    let text = this.state.text;
    if (text.length === 0) {
      return;
    }

    store.dispatch({type: 'ADD', text: text});

    this.setState({ text: "" });
  }

  render() {
    return (
      <div className="border">
        <div className="header">TODO</div>

        <Router>
          <div>
            <div className="filter">Filter: <Link to="/">All</Link> <Link to="/completed">Completed</Link> <Link to="/active">Active</Link> <Link to="/new">New</Link></div>
            <Route path='/:filter?' component={Tasks} />
          </div>
        </Router>

        <div className="controls">
          <input type="text" size="50" value={this.state.text} onChange={this.onChange.bind(this)} /> <input type="button" value="ADD" onClick={this.onAdd.bind(this)} />
        </div>
      </div>
    );
  }
}
