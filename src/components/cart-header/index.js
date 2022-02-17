import React from 'react';

import './cart-header.scss';

const CartHeader = ({numItems, totalPrice, deleteAll}) => {
    return (
        <div className="header">
            <div className="header__title"><h1>Your Shopping Cart</h1></div>
            {/*<div onClick={() => deleteAll()} className="header__clear-all">Clear all</div>*/}
        </div>
    )
};

export default CartHeader;