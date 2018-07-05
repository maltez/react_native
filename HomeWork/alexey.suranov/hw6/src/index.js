import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './Components/Calendar';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calendar />, document.getElementById('app'));
registerServiceWorker();
