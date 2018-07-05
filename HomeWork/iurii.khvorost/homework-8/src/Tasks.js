import React from 'react';
import Task from "./Task";

const Tasks = (props) => {
    return (
        <div className="tasks">
            { props.tasks.map((item, index) => <Task text={item} key={index} />) }
        </div>
    );
}

export default Tasks;