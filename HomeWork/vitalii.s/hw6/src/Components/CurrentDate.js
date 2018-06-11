import React, { Component } from "react";

class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date()
        };
        this.getToday = this.getToday.bind(this);
    }
    componentDidMount() {
        setInterval(this.getToday, 1000);
    }

    getToday() {
        let today = new Date();
        this.setState({ today });
    }

    render() {
        return <div className="currentDate">Today is : {this.state.today.toString()}</div>;
    }
}

export default Day;
