import React from 'react';
import CartSummary from './index';
import {render} from "@testing-library/react";
import {toBeInTheDocument} from '@testing-library/jest-dom';

test("Test render <CartSummary/>", () => {
    const {getByText} = render(<CartSummary totalPrice={125} totalCount={10}/>);
    const totalPrice = getByText(/125/i);
    expect(totalPrice).toBeInTheDocument();
    const totalCount = getByText(/10/i);
    expect(totalCount).toBeInTheDocument();
});