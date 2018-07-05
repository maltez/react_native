import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import ToDo from './ToDo';

ReactDOM.render(<BrowserRouter><ToDo /></BrowserRouter>, document.getElementById('root'));
