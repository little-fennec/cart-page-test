import React from 'react';
import CartItem from '../cart-item';
import CartSummary from '../cart-summary';


const CartList = () => {
    return (
        <div className="cart-list">
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartSummary/>
        </div>
    )
};

export default CartList;