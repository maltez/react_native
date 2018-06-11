import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Comment } from './comment.component';

class App extends Component {
  render() {
    return (
      <div>
        <Comment text="Today we are sailing home :)" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
