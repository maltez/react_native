import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Comments from './Comments';

ReactDOM.render(<Comments />, document.getElementById('root'));
registerServiceWorker();
