import React, {Component} from 'react';

export default class CalendarItem extends Component {
    render() {
        return (
            this.props.text ? <div>{this.props.text}</div> : <div></div>
        );
    }
}