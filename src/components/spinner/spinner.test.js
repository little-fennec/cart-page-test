import React from 'react';
import Spinner from './index';
import {render} from "@testing-library/react";

test("Test render <Spinner/>", () => {
    const {container} = render(<Spinner/>);
    expect(container.firstChild.classList.contains('spinner')).toBe(true);
});