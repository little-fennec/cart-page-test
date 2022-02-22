import React from 'react';
import './cart-summary.scss';

type Props = {
    totalCount: number,
    totalPrice: number
};
const CartSummary = ({totalCount, totalPrice}:Props) => {
    return (
        <div className="cart-summary">
            <div className="cart-summary__title">Cart Summary</div>
            <div className="cart-summary__row">
                <span>Total items</span>
                <span>{totalCount}</span>
            </div>
            <div className="cart-summary__row free">
                <span>Free delivery</span>
                <span>0$</span>
            </div>
            <div className="cart-summary__row">
                <span>Total price</span>
                <span>{totalPrice}$</span>
            </div>
            <div className="btn">
                Proceed to checkout
            </div>
        </div>
    )
};

export default CartSummary;