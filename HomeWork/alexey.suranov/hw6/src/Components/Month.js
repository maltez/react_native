import React, { Component } from 'react';
import Week from './Week';
import '../index.css';

export default class Month extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const titles = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'San'];
        const weeksHolder = () => {
            let weeks = [],
                weekCount = Math.round(this.props.daysInMonth / 7);
                
            for (let i = 0; i < weekCount; i++) {
                weeks.push(<Week key={i} />);
            }
            return weeks;
        }

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
                    {weeksHolder()}
                </div>
            </div>
        );
    }
}