import React, { Component } from 'react';
import Calendar from './CalendarComponent/calendar';
import Clock from './ClockComponent/clock';

export default class App extends Component {
    render() {
        return (
            <div>
                <Calendar/>
                <Clock/>
            </div>    
        ); 
    }
}


