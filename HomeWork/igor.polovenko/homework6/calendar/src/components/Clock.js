import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        this.scheduleUpdate = this.scheduleUpdate.bind(this);
        this.scheduleUpdate();
    }

    scheduleUpdate() {
        setTimeout(this.scheduleUpdate, 1000);
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <h5>{this.state.date.toString()}</h5>
        );
    }
}