import React from 'react';
import CartHeader from './index';
import {render} from "@testing-library/react";

test("Test render <CartHeader/>", () => {
    const {container} = render(<CartHeader/>);
    expect(container.firstChild.classList.contains('header')).toBe(true);
});