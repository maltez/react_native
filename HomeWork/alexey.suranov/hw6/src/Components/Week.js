import React, { Component } from 'react';
import Day from './Day';
export default class Week extends Component {

    constructor(props) {
        super(props);
    }

    days() {
        let days = [],
            today = new Date(),
            weekDay = today.getDay(),
            start = this.props.weekIndex === 0 ? 0 : this.props.weekIndex * 7,
            end = this.props.daysInMonth > this.props.weekIndex * 7 + 7 ?
                this.props.weekIndex * 7 + 7 : this.props.daysInMonth;

        console.log('this.props.monthDate', this.props.firstMonthDay)

        for (let i = start; i < end; i++) {
            if (this.props.weekIndex === 0 && i < this.props.firstMonthDay - 1) {
                days.push(<Day key={i} isEmpty={true} />);
            } else {
                days.push(
                    <Day
                        key={'day' + i}
                        day={i}
                        isEmpty={false}
                        isToday={
                            today.getDate() === i
                        }
                        isWeekEnd={([0, 6].indexOf(new Date(today.getFullYear(), today.getMonth(), i).getDay()) != -1) ? true : false}
                    />
                );
            }
        }
        return days;
    }

    render() {
        return (
            <ul className="week-holder">
                {this.days()}
            </ul>
        );
    }
}