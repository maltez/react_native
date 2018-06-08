import React, { Component } from 'react';
import Day from './Day';
export default class Week extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const days = [1, 2, 3, 4, 5, 6, 7];

        return (
                <ul className="week-holder">
                    {days.map((day, i) => {
                        return (<li className="week" key={i}><Day day={day} /></li>)
                    })}
                </ul>
        );
    }
}