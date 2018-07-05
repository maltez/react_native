import React from 'react';
import Task from "./Task";

const Tasks = (props) => {
    return (
        <div className="tasks">
            { props.tasks.map((task, index) => <Task task={task} key={task.text} />) }
        </div>
    );
}

export default Tasks;