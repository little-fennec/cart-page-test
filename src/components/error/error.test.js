import React from 'react';
import Error from './index';
import {render} from "@testing-library/react";
import {toBeInTheDocument} from '@testing-library/jest-dom';

test("Test render <Error/>", () => {
    const {getByText} = render(<Error/>);
    const errorElement = getByText(/Error/i);
    expect(errorElement).toBeInTheDocument();
});