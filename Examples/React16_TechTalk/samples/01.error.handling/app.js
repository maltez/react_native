import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MyErrorBoundary } from './error.boundary';
import { Profile } from './profile.component';
  
  class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: 'Nick' }
    };
  }
  
  updateUser = () => {
    this.setState(state => ({ ...state, user: null }));
  };
  
  render() {
    return (
      <div>
        <MyErrorBoundary>
          <Profile user={this.state.user} />
          <button onClick={this.updateUser}>Update</button>
        </MyErrorBoundary>
      </div>
    );
  }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));