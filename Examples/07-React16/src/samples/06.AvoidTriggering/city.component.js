import React, { Component } from 'react';

export class City extends Component {
    constructor(props) {
      super(props);
      this.state = { loading: true };
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }
  
    componentWillReceiveProps() {
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }
  
    render() {
      if (this.state.loading) {
        return (
          <img 
            src={`./img/spinner.gif`}
            alt="loading"
            style={{ width: '80px' }} />
        );
      }
      return (
        <img
          style={{ width: '20%' }}
          alt={this.props.name}
          src={`./img/${this.props.name}.png`}
        />
      );
    }
  }