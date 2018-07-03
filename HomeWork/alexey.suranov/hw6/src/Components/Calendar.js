import React, { Component } from 'react';
import Month from './Month';
import Clock from './Clock';

export default class Calendar extends Component {

    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let 
            TodayDate = new Date(),
            y = TodayDate.getFullYear(),
            m = TodayDate.getMonth()+1,
            firstMonthDay = new Date(y, m, 1).getDay(),
            daysInMonth = new Date(y, m-1, 0).getDate();

        return (
            <div className="App">
                <h2>Calendar: {monthNames[m]}</h2>
                <Month daysInMonth={daysInMonth} monthIndex={m} firstMonthDay={firstMonthDay} />
                <Clock />
            </div>
        );
    }
}
