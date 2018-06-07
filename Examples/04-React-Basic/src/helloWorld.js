import React from 'react';
import { render } from 'react-dom';

const timeZones = ['east', 'west','south', 'north']

const getDate = () => {
    
};

const fnComponent = () => {
    const element = (
    <ul>
        <h1>Time zones</h1>
        {timeZones.map(function(el)  {return <li>{el}</li>}) }
    </ul>)

    render(element, document.getElementById('app'));
}

setInterval(fnComponent, 1000);
