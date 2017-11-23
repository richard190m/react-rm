import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AppRoutes from './components/AppRoutes';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AppRoutes />, document.getElementById('root'));
registerServiceWorker();
