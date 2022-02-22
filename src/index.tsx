import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/index';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry/index';
import StoreService from './services/store-service';
import StoreServiceContext from './components/store-service-context/index';
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
    </Provider>,
    document.getElementById('root')
);
