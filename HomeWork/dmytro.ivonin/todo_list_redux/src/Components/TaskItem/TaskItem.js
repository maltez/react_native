import React, { Component } from 'react';
import store from '../../store/store';

export default class TaskItem extends Component {
    render() {
        return(
            <div>
                <input type="checkbox" checked={this.props.value.taskDone} onChange={()=>
                    store.dispatch({type: 'TOGGLE_TASK_STATUS', taskId: this.props.value.taskId})}/>
                <label>{this.props.value.taskDone ? <strike>{this.props.value.taskText}</strike> : this.props.value.taskText}</label>
                {this.props.value.taskIsNew ? <label style={{fontSize: 10, color: 'red' }}> This is last added item</label> : ''}
            </div>
        );
    }
}
