import React, { useState, useEffect } from 'react';
import CartItem from '../cart-item/index';
import CartSummary from '../cart-summary';
import {connect} from 'react-redux';
import WithStoreService from '../hoc/index';
import {itemsLoaded, itemsRequested, itemsError, itemAddedToCart, allItemsRemovedFromCart, itemRemovedFromCart, clearCart} from "../../actions/index";

import Spinner from '../spinner/index';
import EmptyBusket from '../empty-busket/index';
import Error from '../error';

import './cart-list.scss';

type Props = {
    cartItems: CartItem[],
    orderTotalPrice:number,
    orderTotalCount:number,
    onIncrease: (id:ID, count?:number) => actionType;
    loading: boolean,
    error: string | null,
    StoreService:any,
    itemsLoaded:(newItems: Item[]) => actionType,
    itemsError:(error: string|null) => actionType,
    itemsRequested:() => actionType,
    onDecrease: (id:ID) => actionType,
    onDelete:(id:ID) => actionType,
    deleteAll: () => actionType
}
const CartList = (props:Props) => {
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
            .then(data => {
                const {items} = JSON.parse(data);
                itemsLoaded(items);
            })
            .catch(error => {
                itemsError(error);
            });
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
const mapStateToProps = ({cartItems, error, loading, orderTotalPrice, orderTotalCount}:State) => {
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
};


export default WithStoreService()(connect(mapStateToProps, mapDispatchToProps)(CartList));