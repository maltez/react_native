import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    
    tick() {
      this.setState({date: new Date()});
      //this.state.date = new Date();  // wrong!
    }
    
    componentDidMount() {
      this.timerId = setInterval(() => this.tick(), 1000);
    }
    
    componentWillUnmount() {
      clearInterval(this.timerId);
    }
    
    render() {
        return <h1>{this.state.date.toLocaleTimeString()}.</h1>;
    };
}