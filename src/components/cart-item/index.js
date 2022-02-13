import React from 'react';
import Counter from '../counter';
import './cart-item.scss';
import img from './dog-bed.jpg';


const CartItem = () => {
    return (
        <div className="cart-item round-corner">
            <div className="cart-item__wrap-img"><img className="round-corner" src={img} alt=""/></div>
            <div className="cart-item__description">Velvet pet bed</div>
            <div className="cart-item__quantity">
                <Counter/>
            </div>
            <span className="cart-item__cost">430$</span>
            <span className="close"></span>
        </div>
    )
};

export default CartItem;