import React, { Component } from 'react';
import Calendar from './Components/CalendarComponent/Calendar';
import Time from './Components/TimeComponent/Time';


export default class App extends React.Component {

    render() {
        return (
            <div>
                <Calendar />
                <Time />
            </div>
        );
    }
}