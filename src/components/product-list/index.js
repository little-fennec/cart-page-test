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
        StoreService.getItems()
            .then(data => {
                let {items} = JSON.parse(data);
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

const mapStateToProps = (state, props) => {
    let filteredItems = [];
    if (props.bestsellers) {
         filteredItems = state.items.filter((item) => item.bestseller === true);
    } else {
        filteredItems = state.items;
    }

    return {
        items: filteredItems,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError,
    itemAddedToCart
};

export default  WithStoreService()(connect(mapStateToProps, mapDispatchToProps)(ProductList));