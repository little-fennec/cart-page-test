import React from 'react';
import {itemAddedToCart, itemRemovedFromCart, itemsRequested, itemsLoaded} from './index';
import renderer from 'react-test-renderer';

describe('Testing actions', () => {

    it('itemsRequested(): should attach news data', () => {
        const expectedAction  = {
            type: 'FETCH_ITEMS_REQUEST'
        };
        expect(itemsRequested()).toEqual(expectedAction)
    });

    it('itemsLoaded(): should attach news data', () => {
        const newItems = {
            id: 20 ,
            title: 'test',
            price: 20,
            count: 1,
            totalPrice: 20,
            src: '/test'
        };
        const expectedAction  = {
            type: 'FETCH_ITEMS_SUCCESS',
            payload: newItems,
        };

        expect(itemsLoaded(newItems)).toEqual(expectedAction)
    });

    it('itemAddedToCart(): should attach news data', () => {
        const expectedAction  = {
            type: 'ITEM_ADDED_TO_CART',
            payload: {
                id: '4',
                count: 10
            },
        };
        expect(itemAddedToCart('4', 10)).toEqual(expectedAction)
    });

    it('itemRemovedFromCart(): should attach news data', () => {
        const expectedAction  = {
            type: 'ITEM_REMOVED_FROM_CART',
            payload:  15,
        };
        expect(itemRemovedFromCart(15)).toEqual(expectedAction)
    });
});
