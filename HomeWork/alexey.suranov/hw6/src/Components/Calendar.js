import React, { Component } from 'react';
import Month from './Month';
export default class Calendar extends Component {

    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let TodayDate = new Date(),
            d = TodayDate.getDay(),
            m = TodayDate.getMonth(),
            y = TodayDate.getFullYear(),
            daysInMonth = new Date(y, m, 0).getDate();

        return (
            <div className="App">
                <h1>Calendar:   next month is - {monthNames[m+1]}</h1>
                <Month daysInMonth={daysInMonth} monthIndex={m} />
            </div>
        );
    }
}