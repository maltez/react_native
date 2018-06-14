import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputComponent from './Components/InputComponent/InputComponent';
//import MyFirstComponent from './Components/MyFirstComponent/FirstComponent'
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<InputComponent />, document.getElementById('application'));
registerServiceWorker();
