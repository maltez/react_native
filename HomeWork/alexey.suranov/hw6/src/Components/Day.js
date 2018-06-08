import React, { Component } from 'react';

export default class Day extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const day = this.props.day;
        return (
            <div className="day">
                {day}
            </div>
        );
    }
}