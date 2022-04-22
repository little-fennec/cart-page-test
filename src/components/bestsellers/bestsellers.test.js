import React from 'react';
import Bestsellers from './index';
import {render} from "@testing-library/react";
import {Provider} from 'react-redux';
import store from '../../store';
import {toBeInTheDocument} from '@testing-library/jest-dom';


test("Test render <Bestsellers/>", () => {
    const {getByText}  = render(
        <Provider store={store}>
            <Bestsellers/>
        </Provider>
    );
    const titleElement = getByText(/Bestsellers/i);
    expect(titleElement).toBeInTheDocument();
});