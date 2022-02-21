import React from 'react';
import CartItem from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const setUp = (cartItem, mockCallBackIncrease, mockCallBackDecrease) =>
    shallow(<CartItem cartItem={cartItem} onIncrease={mockCallBackIncrease} onDecrease={mockCallBackDecrease}/>);

describe('Testing <CartItem/>', () => {
    let component;
    let instance;

    const cartItem = {
        id: 2,
        title: 'Test item',
        price: 150,
        src: 'test.png',
        count: 3,
        totalPrice: 450
    };
    const mockCallBackIncrease = jest.fn();
    const mockCallBackDecrease = jest.fn();

    beforeEach(()=>{
        component = setUp(cartItem, mockCallBackIncrease, mockCallBackDecrease);
        instance = component.instance();
    });

    it('Test click event increase', () => {
        expect(mockCallBackIncrease.mock.calls.length).toBe(0);
        component.find('button.btn-plus').simulate('click');
        expect(mockCallBackIncrease.mock.calls.length).toBe(1);
    });

    it('Test click event decrease', () => {
        expect(mockCallBackDecrease.mock.calls.length).toBe(0);
        component.find('button.btn-minus').simulate('click');
        expect(mockCallBackDecrease.mock.calls.length).toBe(1);
    });

});