import React from 'react';
import reducer from './index';
import * as actions from '../actions/index';

const initialState = {
    items: [],
    loading: false,
    cartItems: [],
    orderTotalPrice: 0,
    orderTotalCount: 0,
    error: null
};

describe('Testing reducer', () => {

    it('FETCH_ITEMS_REQUEST', () => {
        expect(reducer(initialState, actions.itemsRequested())).toEqual({
        ...initialState,
            items: initialState.items,
            loading: true,
            error: null
        });
    });

    it('FETCH_ITEMS_SUCCESS', () => {

        const stateBefore = {
            ...initialState,
            loading: true,
        };
        const newItems = [
            {id: '1', title: 'Velvet pet bed', price: 90, src: '/images/dog-bed.jpg', bestseller: false},
             {id: '2', title: 'Trixie koala dog toy', price: 25, src: '/images/koala.jpg', bestseller: false}
             ];
        const action = actions.itemsLoaded(newItems);

        expect(reducer(stateBefore, action)).toEqual({
            ...stateBefore,
            items: action.payload,
            loading: false,
            error: null
        });
    });

    it('FETCH_ITEMS_FAILURE', () => {

        const stateBefore = {
            ...initialState,
            loading: true,
            error: null,
        };
        const action = actions.itemsError('500 server error');

        expect(reducer(stateBefore, action)).toEqual({
            ...stateBefore,
            loading: false,
            error: action.payload
        });
    });

    it('ITEM_ADDED_TO_CART', () => {

        const stateBefore = {
            cartItems: [],
            items: [
                {id: '1', title: 'Velvet pet bed', price: 90, src: '/images/dog-bed.jpg', bestseller: false},
                {id: '2', title: 'Trixie koala dog toy', price: 25, src: '/images/koala.jpg', bestseller: false},
                {id: '3', title: 'Mucki bird grass', price: 5, src: '/images/grass.jpg', bestseller: false}
                ],
            error: null,
            loading: false,
            orderTotalCount: 0,
            orderTotalPrice: 0
        };

        const action = actions.itemAddedToCart(3);

        expect(reducer(stateBefore, action)).toEqual({
            ...stateBefore,
            cartItems: [{count:1, id: '3', src: '/images/grass.jpg', title: 'Mucki bird grass', totalPrice:5 }],
            orderTotalPrice: 5,
            orderTotalCount: 1
        });
    });
    it('CLEAR_CART', () => {

        const stateBefore = {
            cartItems: [
                {id: 6, title: 'Trixie alpaca plush dog toy', src: '/images/alpaca.jpg', count: 1, totalPrice: 49},
                {id: 1, title: 'Velvet pet bed', price: 90, src: '/images/dog-bed.jpg', count: 1, totalPrice: 90},
                {id: 2, title: 'Trixie koala dog toy', price: 25, src: '/images/koala.jpg', count: 1, totalPrice: 25},
                {id: 3, title: 'Mucki bird grass', price: 5, src: '/images/grass.jpg', count: 1, totalPrice: 5}
                ],
            items: [
                {id: '1', title: 'Velvet pet bed', price: 90, src: '/images/dog-bed.jpg', bestseller: false},
                {id: '2', title: 'Trixie koala dog toy', price: 25, src: '/images/koala.jpg', bestseller: false},
                {id: '3', title: 'Mucki bird grass', price: 5, src: '/images/grass.jpg', bestseller: false},
                {id: '4', title: 'Mucki bird grass', price: 5, src: '/images/grass.jpg', bestseller: false},
                {id: '5', title: 'Mucki bird grass', price: 5, src: '/images/grass.jpg', bestseller: false}
            ],
            error: null,
            loading: false,
            orderTotalCount: 4,
            orderTotalPrice: 169
        };

        const action = actions.clearCart();

        expect(reducer(stateBefore, action)).toEqual({
            ...stateBefore,
            cartItems: [],
            orderTotalPrice: 0,
            orderTotalCount: 0

        });
    });
});
