import React, { Component } from "react";
import { render } from "react-dom";

const getDates = function(year, month) {
    let dates = [];

    const firstDate = new Date(year, month, 1);
    const firstDay = firstDate.getDay();

    for (let i=firstDay; i>0; i--) {
        const date = new Date(year, month, -i);
        dates.push(date.getDate());
    }

    const lastDate = new Date(year, month + 1, 0);

    for (let i=1; i<=lastDate.getDate(); i++) {
        const date = new Date(year, month, i);
        dates.push(date.getDate());
    }

    const lastDay = lastDate.getDay();

    for (let i=1; i<7-lastDay; i++) {
        const date = new Date(year, month + 1, i);
        dates.push(date.getDate());
    }

    return dates;
}

const Week = (props)=> {
    return <div className="table-row">
        { props.items.map((item) => <div className='table-cell'>{item}</div> ) }
    </div>;
}

const Calendar = ()=> {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1);
    const nextMonthName = nextMonth.toLocaleString("en-US", { month: "long" });
    
    const days = getDates(nextMonth.getFullYear(), nextMonth.getMonth());
    let weeks = [];
    for (let i=0; i<days.length; i+=7) {
        let items = days.slice(i, i+7);
        weeks.push(<Week items={items}/>)
    }

    return (
        <div>
            <h1>{nextMonthName} {nextMonth.getFullYear()}</h1>
            <div className="table">
                <Week items={["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]} />
                {weeks}
            </div>
        </div>
    );
}

class CurrentTime extends Component {
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount() {
        setInterval(() => this.setState({date: new Date()}), 1000);
    }

    render() {
        return <div>Current time: {this.state.date.toLocaleString('en-US')}</div>;
    }
}

render(<div>
        <Calendar />
        <br/>
        <CurrentTime/>
    </div>
    , document.getElementById("app"));
