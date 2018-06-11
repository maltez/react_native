import React, { Component } from 'react';

export default class Day extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const day = this.props.day || '';
        const isToday = this.props.isToday ? ' isToday' : '';

        return (
            <div>
                <div className={'day' + isToday}>
                    {day}
                </div>
            </div>
        );
    }
}