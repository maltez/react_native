import React from 'react';
import PropTypes from 'prop-types';


const TaskItem = (props) => {
    return <li>{props.value}</li>
}

TaskItem.propTypes = {
    value: PropTypes.string
};

export default TaskItem;