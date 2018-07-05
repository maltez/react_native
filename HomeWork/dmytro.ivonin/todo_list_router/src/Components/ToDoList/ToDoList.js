import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const ToDoList = (props) => {

    var filteredTasks = props.tasks.filter(function(task) {
        if ('Done' === props.filter) { 
            return task.taskDone; 
        }
        else if ('NotDone' === props.filter) {
            return !task.taskDone; 
        }
        return true;
    });

    return (
        <ul>
            {filteredTasks.map((item, index) => <TaskItem key={index} value={item} onCheckTogle={props.onCheckTogle}/>)}
        </ul>
    );
}

export default ToDoList;