import React, { Component } from 'react';

export default class TodoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onTodoComplete = this.onTodoComplete.bind(this);
        this.state = { name: this.props.name, isComplete: false };
    }

    onTodoComplete(event) {
        this.setState({ isComplete: event.target.checked });
    }

    render() {
        return (
            <div>
                <input type="checkbox" onChange={this.onTodoComplete} />
                <label style={this.state.isComplete ? crossedText : normalText}> {this.props.name} </label>
            </div>
        );
    }
}

const normalText = {
    textDecorationLine: 'none',
    fontSize: '20px',
    color: 'black'

};

const crossedText = {
    textDecorationLine: 'line-through',
    fontSize: '20px',
    color: 'green'
};