import React, { Component } from 'react';

export default class Day extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const day = this.props.day !== 0 && !this.props.isEmpty ? this.props.day : '';
        const isToday = this.props.isToday ? ' isToday' : '';
        const isWeekEnd = this.props.isWeekEnd ? ' weekends' : '';
        const isEmpty = this.props.isEmpty ? ' isEmpty' : '';
        console.log('isEmpty', this.props.isEmpty, day)
        return (
            <div>
                <div className={'day' + isToday + isWeekEnd + isEmpty}>
                    {day}
                </div>
            </div>
        );
    }
}