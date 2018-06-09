import React, { Component } from 'react';

export default class Time extends React.Component {

    constructor(props) {
        super(props);
        this.renderInASecond.bind(this);
        this.renderInASecond();
    }

    renderInASecond = () => {
        this.setState({});

        setTimeout(() => {
            this.renderInASecond();
        }, 1000);
    }

    render() {
        return (
            <div>
                {(new Date()).toLocaleTimeString()}
            </div>
        );
    }
}