import React from 'react';
import ReactDom from 'react-dom';

const header = React.createElement('h1', {}, 'Hello REACT again!');
const input = React.createElement('input', {type: 'text', value:'Default'});
const element = React.createElement('div', {}, [header, input]);

ReactDom.render(element, document.getElementById('app'));
