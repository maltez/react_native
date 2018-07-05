import React, { Component } from 'react';

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.togleChecker = props.onCheckTogle.bind(this);
    }

    render() {
        return(
            <div>
                <input type="checkbox" checked={this.props.value.taskDone} onChange={()=>
                    this.togleChecker(this.props.value.taskId)}/>
                <label>{this.props.value.taskDone ? <strike>{this.props.value.taskText}</strike> : this.props.value.taskText}</label>
            </div>
        );
    }
}
