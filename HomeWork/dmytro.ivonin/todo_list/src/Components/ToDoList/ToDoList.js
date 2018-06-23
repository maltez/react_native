import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem/TaskItem';

const ToDoList = (props) => {
    return <ul>
            {props.tasks.map((item, index) => <TaskItem key={index} value={item} />)}
        </ul>
}

ToDoList.propTypes = {
    value: PropTypes.string
};

export default ToDoList;