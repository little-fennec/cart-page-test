import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/index';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry/index';
import store from './store';

import './index.scss';


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <App/>
            </Router>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
