import React, { Component } from 'react';
import './form.css';
export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            task: {
                value: '',
                id: 0
            },
            comments: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        const { taskComment } = this.props;
        this.setState({
            task:{
                value: this.state.task.value,
                id: this.state.task.id++
            }
        })
        taskComment(this.state.task);
        this.setState({
            task:{
                value: '',
                id: this.state.task.id
            }
        })
    }

    handleChange(event) {
        this.setState({
            task:{
                value: event.target.value,
                id: this.state.task.id
            }
        })
    }

    render() {
        return (
            <div>
                <div className="form">
                    <div className="container">
                        <div className="title"> Add new task:</div>
                        <input name="comment" className="input" type="text" onChange={this.handleChange} value={this.state.task.value} />
                        <button type="submit" className="button" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}
