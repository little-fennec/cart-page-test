import React, { useState, useEffect } from 'react';
import ProductItem from '../product-item';
import {connect} from 'react-redux';
import WithStoreService from '../hoc';
import {itemsLoaded, itemsRequested, itemsError, itemAddedToCart} from "../../actions";

import Spinner from '../spinner';
import Error from '../error';

import './product-list.scss';



const ProductList = ({items, loading, error, StoreService, itemsLoaded, itemsError, itemsRequested, itemAddedToCart}) => {

    useEffect(() => {
        itemsRequested();
        StoreService.getItems()
            .then(res => itemsLoaded(res))
            .catch((err) => itemsError(err));
    },[]);
    if (loading) {
        return <Spinner/>
    }
    if (error) {
        console.log(error);
        return <Error/>
    }
    return (
        <div className="product-list">
            {
                items.map(cartItem => {
                    return <ProductItem key={cartItem.id}
                                        cartItem={cartItem}
                                        onAddToCart={() => itemAddedToCart(cartItem.id)}/>
                })
            }
        </div>
    )
};


const mapStateToProps = (state) => {
    const filteredItems = state.items.filter((item) => item.bestseller === true);
    return {
        items: filteredItems,
        loading: state.loading,
        error: state.error
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         itemsLoaded: (newItems) => {
//             dispatch({
//                 type: 'FETCH_ITEMS_SUCCESS',
//                 payload: newItems
//             })
//         }
//     }
// }

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError,
    itemAddedToCart
};

export default  WithStoreService()(connect(mapStateToProps, mapDispatchToProps)(ProductList));