import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import StoreService from './services/store-service';
import StoreServiceContext from './components/store-service-context';
import store from './store';

import './index.scss';

const storeService = new StoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <StoreServiceContext.Provider value={storeService}>
                <Router>
                    <App/>
                </Router>
            </StoreServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));
