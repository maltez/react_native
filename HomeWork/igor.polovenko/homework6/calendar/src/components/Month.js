import React, { Component } from 'react';
import CalendarItem from './CalendarItem';

export default class Month extends Component {
    constructor(props) {
        super(props);
        this.weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.columns = this.weekDays.length;
        this.rowsNumber = Math.ceil((this.props.firstWeekDay + this.props.numberOfDays) / this.columns);
        this.buildMonth();
    }

    render() {
        return (
            <div>
                <h3>{this.props.monthName}</h3>
                <table>
                    {this.rows.map((row, rowIndex) =>
                        <tr>{row.map((text) => rowIndex === 0
                                ? <th><CalendarItem text={text} /></th> 
                                : <td><CalendarItem text={text} /></td> )}
                        </tr>)}
                </table>
            </div>
        );
    }

    buildMonth() {
        this.rows = [this.weekDays];
        let date = 1;
        let rowIndex = 0;
        while (date <= this.props.numberOfDays) {
            let row = [];
            for (let columnIndex = 0; columnIndex < this.columns; columnIndex++) {
                if (date > this.props.numberOfDays
                    || (rowIndex === 0 && columnIndex < this.props.firstWeekDay)) {

                    row.push(null);
                } else {
                    row.push(date);
                    date++;
                }
            }
            this.rows.push(row);
            rowIndex++;
        }
    }
}