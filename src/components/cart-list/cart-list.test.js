import React from 'react';
import CartList from './index';
import Enzyme, {shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import StoreService from '../../services/store-service';
import StoreServiceContext from '../../components/store-service-context';
import configureMockStore from 'redux-mock-store';

const storeService = new StoreService();
const mockStore = configureMockStore();

Enzyme.configure({ adapter: new Adapter() });

describe('Screen <CartList/>', () => {

    const initialState = {
        loading: false,
        cartItems: []
    };

    const store = mockStore(initialState);

    it('renders correctly ', () => {
        const wrapper = mount(
            <Provider store={store}>
                <StoreServiceContext.Provider value={storeService}>
                    <CartList/>
                </StoreServiceContext.Provider>
            </Provider>
        );
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
