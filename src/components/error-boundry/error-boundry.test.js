import React from 'react';
import ErrorBoundry from './index';
import Enzyme, {shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Error from '../error/index';

Enzyme.configure({ adapter: new Adapter() });

describe("Test render <ErrorBoundry/>", () => {

    it('Renders Error Fallback if error ', ()=>{
        const WrappedComponent = props => {
            throw new Error('Errored!');
        };
        const wrapper = mount(
            <ErrorBoundry>
                <WrappedComponent/>
            </ErrorBoundry>
            );
        expect(wrapper.html()).toEqual(shallow(<Error/>).html());
    });
});