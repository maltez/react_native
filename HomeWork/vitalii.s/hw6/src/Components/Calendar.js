import React, { Component } from "react";
import Week from "./Week";

class Calendar extends Component {
    render() {
        const { month } = this.props;
        return (
            <div className = "mainContainer">
                <div className="name">{month.name}</div>
                <div>{month.days.map(day => <div className="day"> {day} </div>)}</div>
                <div>{month.weeks.map((days, i) => <Week key={i} days={days} />)}</div>
            </div>
        );
    }
}

export default Calendar;
