import React, {useEffect} from 'react';
import CartItem from '../cart-item/index';
import CartSummary from '../cart-summary';
import {useDispatch, useSelector} from 'react-redux';
import {allItemsRemovedFromCart, clearCart, itemAddedToCart, itemRemovedFromCart, loadItems} from "../../actions/index";

import Spinner from '../spinner/index';
import EmptyBusket from '../empty-busket/index';
import Error from '../error';
import './cart-list.scss';
import {
    selectCartItems,
    selectError,
    selectLoading,
    selectOrderTotalCount,
    selectOrderTotalPrice
} from "../../selectors/selectors";

const CartList = () => {

    const cartItems = useSelector(selectCartItems);
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);
    const orderTotalPrice = useSelector(selectOrderTotalPrice);
    const orderTotalCount = useSelector(selectOrderTotalCount);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadItems());
    },[dispatch]);

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
            <div onClick={() => dispatch(clearCart())} className="cart-list__clear-all">Clear all</div>
            {
                cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id}
                                     cartItem={cartItem}
                                     onDelete={(id) => dispatch(allItemsRemovedFromCart(id))}
                                     onIncrease={(id, count) => dispatch(itemAddedToCart(id, count))}
                                     onDecrease={(id) => dispatch(itemRemovedFromCart(id))}/>
                })
            }
            <CartSummary totalCount={orderTotalCount} totalPrice={orderTotalPrice}/>
        </div>
    )
};

export default CartList;