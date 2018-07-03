import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
        <TimeComponent />
      </div>
    );
  }
}

class TimeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};

    setInterval(() => this.setState({time: new Date()}), 1000);
  }

  getCurrentTime() {
    return `${this.state.time.getHours()}:${this.state.time.getMinutes()}:${this.state.time.getSeconds()}`;
  }

  render() {
    return (
      <p>{this.getCurrentTime()}</p>
    );
  }
}

export default App;
