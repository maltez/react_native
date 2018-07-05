import React, { Component } from 'react';
import Task from '../task/TaskComponent';
import Form from '../form/FormComponent';
import './main.css';
export default class MainComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
        }
        this.taskComment = this.taskComment.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    taskComment(item) {
        
        let
            current = new Date(),
            time = (current.getHours() < 10 ? '0' + current.getHours() : current.getHours()) + ':' + current.getMinutes() + ':' + current.getSeconds(),
            task = {
                value: time + " " + item.value,
                id: item.id
            };

        this.setState({
            tasks: [task, ...this.state.tasks]
        })
    }

    deleteTask(id) {
        this.setState({
            tasks: this.state.tasks.filter((task) => task.id !== id)
        })
    }

    render() {

        return (
            <div className="App tasks">
                <Task tasks={this.state.tasks} deleteTask={this.deleteTask} />
                <Form taskComment={this.taskComment} />
            </div>
        );
    }
}