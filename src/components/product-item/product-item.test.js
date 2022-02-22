import React from 'react';
import ProductItem from './index';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing <ProductItem/>', () => {
    let component;

    const cartItem = {
        id: 10,
        title: 'Test item',
        price: 500,
        src: 'test.png',
        count: 5,
        totalPrice: 1500
    };
    const mockCallBackAddToCart = jest.fn();

    beforeEach(() => {
        window.HTMLElement.prototype.scrollTo = function() {};
        component =  shallow(<ProductItem item={cartItem} onAddToCart={mockCallBackAddToCart}/>);
    });

    it('Test click on button AddToCart', () => {
        expect(mockCallBackAddToCart.mock.calls.length).toBe(0);
        component.find('button.add-to-cart').simulate('click');
        expect(mockCallBackAddToCart.mock.calls.length).toBe(1);
    });

});