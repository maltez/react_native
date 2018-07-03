import React, { Component } from "react";
import "./App.css";
import Calendar from "./Components/Calendar";
import CurrentDate from "./Components/CurrentDate";
import "./Components/calendar.css";

const names = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    },
    days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            weeks: [],
            days: days
        };
        this.getMonth = this.getMonth.bind(this);
    }

    componentDidMount() {
        this.getMonth();
    }

    getMonth() {
        let today = new Date(),
            month = today.getMonth() + 1,
            year = today.getFullYear(),
            firstDate = new Date(year, month, 1).getDay(),
            daysInMonth = new Date(year, month + 1, 0).getDate(),
            name = names[month + 1];

        let weeks = [];
        let week = [];

        for (let i = 0; i < firstDate; i++) {
            week.push("");
        }

        for (let i = 1; i <= daysInMonth; i++) {
            week.push(i);
            if (week.length % 7 === 0 || i === daysInMonth) {
                weeks.push(week);
                week = [];
            }
        }

        this.setState({ name, weeks });
    }

    render() {
        const month = {
            name: this.state.name,
            weeks: this.state.weeks,
            days: this.state.days
        };
        return (
            <div className="App">
                <Calendar month={month} />
                <CurrentDate />
            </div>
        );
    }
}

export default App;
