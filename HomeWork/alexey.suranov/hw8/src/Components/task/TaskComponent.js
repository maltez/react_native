import React, { Component } from 'react';
import './task.css';
export default class Task extends Component {

    constructor(props) {
        super(props)
    }

    handleDelete(id) {
        const { deleteTask } = this.props;
        deleteTask(id);
    }

    render() {
        const { tasks } = this.props;
        return (
            <div>
                <h3>{tasks.length ? 'Todo list' : ''}</h3>
                <ul>
                    {
                        tasks.length ? tasks.map((item, i) => {
                            return <li key={i} className="task">
                                <input type="checkbox" />
                                {item.value}
                                <span onClick={this.handleDelete.bind(this, item.id)} className="delete">Delete</span>
                            </li>
                        }) : null
                    }

                </ul>
            </div>
        );
    }
}
