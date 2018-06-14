import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './samples/01.error.handling/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
