import React from 'react';
import EmptyBusket from './index';
import {render} from "@testing-library/react";
import {toBeInTheDocument} from '@testing-library/jest-dom';

test("Test render <EmptyBusket/>", () => {
    const {getByText} = render(<EmptyBusket/>);
    const textEmptyBusket = getByText(/Cart is empty/i);
    expect(textEmptyBusket).toBeInTheDocument();
});