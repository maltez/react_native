import React, { Component } from 'react';

export default class Clock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        setInterval(this.update, 1000)
    }

    update = () => {
        this.setState({
            time: new Date()
        })
    };

    render() {
        let h = this.state.time.getHours(),
            m = this.state.time.getMinutes(),
            s = this.state.time.getSeconds()
            
        return (
            <div>
                <h3>{h % 12}:{(m < 10 ? '0' + m : m)}:{(s < 10 ? '0' + s : s)} {h < 12 ? 'am' : 'pm'}</h3>
            </div>
        )

    }
}