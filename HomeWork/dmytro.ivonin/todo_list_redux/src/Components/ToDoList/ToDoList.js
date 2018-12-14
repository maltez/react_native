import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import store from '../../store/store';

const ToDoList = () => {

    var filteredTasks = store.getState().tasks.filter(function(task) {
        if ('Done' === store.getState().currentFilter) { 
            return task.taskDone; 
        }
        else if ('NotDone' === store.getState().currentFilter) {
            return !task.taskDone; 
        }
        return true;
    });

    return (
        <ul>
            {filteredTasks.map((item, index) => <TaskItem key={index} value={item}/>)}
        </ul>
    );
}

export default ToDoList;