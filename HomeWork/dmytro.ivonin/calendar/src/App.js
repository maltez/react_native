import React, { Component } from 'react';
import Month from './Components/Calendar/Month'
import Time from './Components/Time/Time'

class App extends Component {
  render() {
    return (
      <div>
        <Month/>
        <Time/>
      </div>
    );
  }
}

export default App;
