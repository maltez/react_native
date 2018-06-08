import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyFirstComponent from './Components/MyFirstComponent/FirstComponent'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyFirstComponent name='Cheburator' />, document.getElementById('application'));
registerServiceWorker();
