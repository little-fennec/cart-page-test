import React from 'react';
import './cart-item.scss';

type Props = {
    cartItem: CartItem,
    onDelete: (id:ID) => actionType ,
    onIncrease: (id:ID, count?:number) => actionType,
    onDecrease: (id:ID) => actionType
}

const CartItem = ({cartItem, onDelete, onIncrease, onDecrease}: Props) => {
    const {id, title, src, count, totalPrice } = cartItem;
    return (
        <div className="cart-item round-corner">
            <div className="cart-item__wrap-img"><img className="round-corner" src={process.env.PUBLIC_URL + src} alt=""/></div>
            <div className="cart-item__description">{title}</div>
            <div className="cart-item__quantity">
                <div className="counter">
                    <button onClick={() => onDecrease(id)} className="btn-minus">-</button>
                    <input type="text" className="counter-amount"  readOnly={true}  value={count}/>
                    <button onClick={() => onIncrease(id)} className="btn-plus">+</button>
                </div>
            </div>
            <span className="cart-item__cost">{totalPrice}$</span>
            <span onClick={() => onDelete(id)} className="close"></span>
        </div>
    )
};

export default CartItem;