import React, { Component } from 'react';

export default class Calendar extends Component {

  formatMonth = () => {
    let days = [];
    let now = new Date();
    let nextMonthStart = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    for (let emptyDay = 0; emptyDay < nextMonthStart.getDay(); emptyDay++) {
      days.push(<td> </td>);
    }

    let currentMonth = nextMonthStart.getMonth();
    while (currentMonth == nextMonthStart.getMonth()) {
      days.push(<td>{nextMonthStart.getDate()}</td>);

      if (nextMonthStart.getDay() == 6) {
        days.push(<tr></tr>);
      }

      nextMonthStart.setDate(nextMonthStart.getDate() + 1);

    }
    return days;
  }

  render() {
    const dayNames = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

    return (
      <table>
        <tr>
          {dayNames.map((value) => <td>{value}</td>)}
        </tr>
        {this.formatMonth()}
      </table>
    );
  }
}