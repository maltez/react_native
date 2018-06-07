import React, { Component } from 'react';
import Month from './components/Month';
import Clock from './components/Clock';

export default class App extends Component {

  constructor(props) {
    super(props);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = new Date();
    // Find out the number of days in the next month
    date.setMonth(date.getMonth() + 2);
    date.setDate(0); // will set the last date of the next month
    let nextMonth = date.getMonth();
    this.numberOfDays = date.getDate();
    // Find out the first week day and transform from SMTWTFS -> MTWTFSS
    date.setDate(1);
    this.firstWeekDay = date.getDay() === 0 ? 7 : date.getDay();
    this.firstWeekDay--;
    // Get the next month name
    this.monthName = months[nextMonth];
  }

  render() {
    return (
      <div>
        <Month monthName={this.monthName} numberOfDays={this.numberOfDays} firstWeekDay={this.firstWeekDay} />
        <Clock />
      </div>
    );
  }
}