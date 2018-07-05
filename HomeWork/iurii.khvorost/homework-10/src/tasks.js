import React from 'react';
import Task from "./task";
import store from "./store";

export default function Tasks(props) {
        let tasks = store.getState().tasks;
        switch (props.match.params.filter) {
            case "completed":
                tasks = tasks.filter(task => task.completed);
                break;

            case "active":
                tasks = tasks.filter(task => !task.completed);
                break;

            case "new":
                tasks = tasks.length > 0 ? [tasks[tasks.length - 1]] : [];
                break;

            default:
                break;
        }

        return (
            <div className="tasks">
                { tasks.map((task, index) => <Task task={task} key={task.text} />) }
            </div>
        );
    }
//}