import React, { Component } from 'react';
import Week from './Week';
import '../index.css';

export default class Month extends Component {

    constructor(props) {
        super(props);
    }

    weeksHolder () {
        let weeks = [];
            
        for (let i = 0; i < 6; i++) {
            weeks.push(
                <Week  
                    daysInMonth={this.props.daysInMonth} 
                    key={i} 
                    firstMonthDay={this.props.firstMonthDay}
                    weekIndex={i}
            />);
        }
        return weeks;
    }

    render() {
        const titles = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'San'];

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
                    {this.weeksHolder()}
                </div>
            </div>
        );
    }
}