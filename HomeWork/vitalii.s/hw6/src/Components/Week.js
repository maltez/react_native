import React, { Component } from "react";
import Day from "./Day";

class Week extends Component {
    render() {
        const { days } = this.props;
        return (
            <div>
                <ul className="week-holder">
                    {days.map((day, i) => {
                        return (
                            <li className="day" key={i}>
                                <div>
                                    <Day value={day} />
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Week;
