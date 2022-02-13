import React from 'react';

import './cart-header.scss';

const CartHeader = ({numItems, total}) => {
    return (
        <div className="header">
            <div className="header__title"><h1>Your Shopping Cart</h1></div>
            <div className="header__counter">{numItems} items (${total})</div>
        </div>
    )
};

export default CartHeader;