import React, { Component } from 'react'; 

export default class Button extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className={this.props.buttonStyle} onClick={this.props.onClick}>{this.props.title}</button> 
        )
    }
}