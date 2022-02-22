import React from 'react';
import Bestsellers from './index';
import {render} from "@testing-library/react";
import { Provider } from 'react-redux';
import StoreService from '../../services/store-service';
import StoreServiceContext from '../store-service-context/index';
import store from '../../store';
import {toBeInTheDocument} from '@testing-library/jest-dom';


const storeService = new StoreService();

test("Test render <Bestsellers/>", () => {
    const {getByText}  = render(
        <Provider store={store}>
            <StoreServiceContext.Provider value={storeService}>
            <Bestsellers/>
            </StoreServiceContext.Provider>
        </Provider>
    );
    const titleElement = getByText(/Bestsellers/i);
    expect(titleElement).toBeInTheDocument();
});