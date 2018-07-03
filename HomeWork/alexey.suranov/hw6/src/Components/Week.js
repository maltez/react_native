import React, { Component } from 'react';
import Day from './Day';
export default class Week extends Component {

    constructor(props) {
        super(props);
    }

    week() {
        let
            today = new Date(),
            output = [],
            y = today.getFullYear();

        this.props.week.map((item, i) => {
            output.push(
                <Day
                    key={'day' + i}
                    day={item}
                    isToday={
                        new Date(y, this.props.monthIndex, 0).getDate() === i
                    }
                />)
        })
        return output;
    }

    render() {
        return (
            <ul className="week-holder">
                {this.week()}
            </ul>
        );
    }
}