import React, { Component } from 'react';
import Comments from "./Components/Comments/Comments"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Comments List:</h1>
        </header>
        <Comments/>
      </div>
    );
  }
}

export default App;
