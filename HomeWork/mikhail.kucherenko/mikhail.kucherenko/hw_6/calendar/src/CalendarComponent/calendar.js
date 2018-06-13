import React, { Component } from 'react';

export default class Calendar extends Component {
    render() {
        return ( 
            <table border="10" width="20%">
                    <CreateDaysHeader/>
                    <CreateDaysRow index="0"/>
                    <CreateDaysRow index="1"/>
                    <CreateDaysRow index="2"/>
                    <CreateDaysRow index="3"/>
                    <CreateDaysRow index="4"/>
                    <CreateDaysRow index="5"/>
            </table>
        );
    }
}

class CreateDaysHeader extends Component {
    render() {
        const daysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fra", "Sat"];
        const daysList = daysNames.map((day) => <td>{day}</td>);
        return <tr align="center">{daysList}</tr>;
    }
}

class CreateDaysRow extends Component {

    constructor(props) {
        super(props);
        this.todaysDay = 0;
        this.daysOfMonth = this.getCalendarArray();   
    }

    getCalendarArray() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        this.todaysDay = today.getDate();
        let date = new Date(year, month, 1);
        
        const dayOfWeek = date.getDay();
        date = new Date(year, month + 1, 1);
        date.setDate(date.getDate() - 1);
        const numDaysInCurrentMonth = date.getDate(); 
        let initialDays = [];
        for (let i = 1; i <= numDaysInCurrentMonth; i++) initialDays.push(i);
        
        for (let i = 0; i < dayOfWeek-1; i++) {
            initialDays.unshift(" ");
        }
    
        let daysOfMonth = new Array(6);
        for (let j = 0; j<daysOfMonth.length; j++) {
            daysOfMonth[j] = new Array(7);
        } 
        for (let i = 0; i < initialDays.length; i++) {
            let week = 0, day = 0;
            week = ~~(i / 7);
            day = i % 7; 
            daysOfMonth[week][day] = initialDays[i];
        }
        return daysOfMonth;
    }

    createDay(day) { 
        return (this.todaysDay === day ? <td bgcolor="lightgreen">{day}</td> : <td bgcolor="white">{day}</td>);
    }

    render() {
        const daysList = this.daysOfMonth[this.props.index].map((day) => this.createDay(day));
        return  <tr align="center">{daysList}</tr>;
    }
}


