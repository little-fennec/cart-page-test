import React from 'react';
import ProductList from './index';
import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

Enzyme.configure({ adapter: new Adapter() });

describe('Screen <ProductList/>', () => {

    const initialState = {
        loading: false,
        cartItems: [],
        items:[]
    };

    const store = mockStore(initialState);

    it('renders correctly ', () => {
        const wrapper = mount(
            <Provider store={store}>
                    <ProductList/>
            </Provider>
        );
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
