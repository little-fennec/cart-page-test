import React, { useState, useEffect } from 'react';
import CartItem from '../cart-item';
import CartSummary from '../cart-summary';
import {connect} from 'react-redux';
import WithStoreService from '../hoc';
import {itemsLoaded, itemsRequested, itemsError, itemAddedToCart, allItemsRemovedFromCart, itemRemovedFromCart, clearCart} from "../../actions";

import Spinner from '../spinner';
import EmptyBusket from '../empty-busket';
import Error from '../error';

import './cart-list.scss';


const CartList = (props) => {
    const {cartItems,
        orderTotalPrice,
        orderTotalCount,
        onIncrease,
        loading,
        error,
        StoreService,
        itemsLoaded,
        itemsError,
        itemsRequested,
        onDecrease,
        onDelete,
        deleteAll} = props;

    useEffect(() => {
        itemsRequested();
        StoreService.getItems()
            .then(res => itemsLoaded(res.items))
            .catch((err) => itemsError(err));
    },[]);

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        console.log(error);
        return <Error/>
    }
    if (orderTotalCount === 0) {
        return <EmptyBusket/>
    }
    return (
        <div className="cart-list">
            <div onClick={() => deleteAll()} className="cart-list__clear-all">Clear all</div>
            {
                cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id}
                                     cartItem={cartItem}
                                     onDelete={onDelete}
                                     onIncrease={onIncrease}
                                     onDecrease={onDecrease}/>
                })
            }
            <CartSummary totalCount={orderTotalCount} totalPrice={orderTotalPrice}/>
        </div>
    )
};


// const mapStateToProps = (state) => {
//     return {
//         cartItems: state.cartItems,
//     }
// };
const mapStateToProps = ({cartItems, error, loading, orderTotalPrice, orderTotalCount}) => {
    return {
        cartItems,
        error,
        loading,
        orderTotalPrice,
        orderTotalCount
    }
};

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError,
    onIncrease: itemAddedToCart,
    onDecrease: itemRemovedFromCart,
    onDelete: allItemsRemovedFromCart,
    deleteAll:  clearCart
}


export default WithStoreService()(connect(mapStateToProps, mapDispatchToProps)(CartList));