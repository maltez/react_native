import React, { Component } from 'react';
import Week from './Week';
import '../index.css';

export default class Month extends Component {

    constructor(props) {
        super(props);
    }

    prepareMonth() {
        let firstDate = this.props.firstMonthDay,
            daysInMonth = this.props.daysInMonth,
            weeks = [],
            week = [],
            output = [];

        for (let i = 0; i < firstDate; i++) {
            week.push('');
        }

        for (let i = 1; i <= daysInMonth; ++i) {
            week.push(i);
            if (week.length % 7 == 0 || i == daysInMonth) {
                weeks.push(week);
                week = [];
            }
        }

        weeks.map((item, i) => {
            output.push(<Week
                monthIndex={this.props.monthIndex}
                week={item}
                key={i}
            />)
        })
        return output;
    }

    render() {
        const titles = ['San', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return (
            <div className="App">
                <ul className="titles">
                    {
                        titles.map((item, i) => {
                            return <li className="day-name" key={i}>{item}</li>
                        })
                    }
                </ul>
                <div className="week-holder">
                    {this.prepareMonth()}
                </div>
            </div>
        );
    }
}