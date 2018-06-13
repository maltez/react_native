import React from 'react';
//import {render} from 'react-dom';
import ReactDom from 'react-dom';

const getDate = () => {
    const date = new Date();
    return date.toLocaleDateString();
}

const showTime = () => {
    const element = (
        <div>
            <h2>getDate()</h2>
        </div>
    );
    
    ReactDom.render(element, document.getElementById('site')); 
} 

setInterval(showTime, 1000);
