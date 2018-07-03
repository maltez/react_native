import React, { Component } from 'react';

class Month extends Component {
  render() {
    return (
      <div>
        <h1>{getNextMonthName()}</h1>
        <table><tbody>{getMonthGridTable()}</tbody></table>
      </div>
    );
  }
}

export default Month;

let now = new Date();

function getNextMonthName() {
    now.setMonth(now.getMonth() + 1);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", 
                        "August", "September", "October", "November", "December"];
    return monthNames[now.getMonth()];
}

function getMonthGridTable() {
    let tempDate = new Date(now);
    tempDate.setMonth(now.getMonth() + 1);
    tempDate.setDate(0);

    let numDaysInMonth = tempDate.getDate();
    tempDate = new Date(now);
    tempDate.setDate(1);

    let numberOfFirstDate = (tempDate.getDay() - 1 + 7) % 7;

    let weeks = [];
    let week = [];
    let day = 0;

    weeks.push(<tr> <th align="right">M</th>
                    <th align="right">T</th>
                    <th align="right">W</th>
                    <th align="right">T</th>
                    <th align="right">F</th>
                    <th align="right">S</th>
                    <th align="right">S</th>
                    </tr>);

    for (let i = 0; i < numDaysInMonth + numberOfFirstDate + 7; i++) {
        let d = i - numberOfFirstDate + 1;

        if (day < 7) { 
            week[day] = (d === now.getDate()) 
                                    ? <td width='30' align="right" bgcolor="#00FF00">{(d > 0 && d <= numDaysInMonth) ? d : "" }</td>
                                    : <td width='30' align="right" >{(d > 0 && d <= numDaysInMonth) ? d : "" }</td>
            day++;

            if (day >= 7) {
                day = 0;
                weeks.push(<tr>{week}</tr>);
                week = [];
            }
        }
    }

    return weeks;
}