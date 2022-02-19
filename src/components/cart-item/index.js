import React from 'react';
import './cart-item.scss';

const CartItem = ({cartItem, onDelete, onIncrease, onDecrease}) => {
    const {id, title, price, src, count, totalPrice } = cartItem;
    return (
        <div className="cart-item round-corner">
            <div className="cart-item__wrap-img"><img className="round-corner" src={window.location.origin + src} alt=""/></div>
            <div className="cart-item__description">{title}</div>
            <div className="cart-item__quantity">
                <div className="counter">
                    <button onClick={() => onDecrease(id)} className="btn-minus">-</button>
                    <input type="text" className="counter-amount" readOnly="readonly"  value={count}/>
                    <button onClick={() => onIncrease(id)} className="btn-plus">+</button>
                </div>
            </div>
            <span className="cart-item__cost">{totalPrice}$</span>
            <span onClick={() => onDelete(id)} className="close"></span>
        </div>
    )
};

export default CartItem;