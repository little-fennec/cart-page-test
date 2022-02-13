import React from 'react';
import './cart-summary.scss';


const CartSummary = () => {
    return (
        <div className="cart-summary">
            <div className="cart-summary__title">Cart Summary</div>
            <div className="cart-summary__row">
                <span>Total items</span>
                <span>7</span>
            </div>
            <div className="cart-summary__row">
                <span>Total price</span>
                <span>323$</span>
            </div>
            <div className="btn">
                Proceed to checkout
            </div>
        </div>
    )
};

export default CartSummary;