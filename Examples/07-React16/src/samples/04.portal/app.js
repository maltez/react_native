import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Popup } from './popup.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { overlayActive: true };
  }

  closeOverlay = () => {
    this.setState({ overlayActive: false });
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {this.state.overlayActive &&
          <Popup onClose={this.closeOverlay}>
            <div>Welcome</div>
          </Popup>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
