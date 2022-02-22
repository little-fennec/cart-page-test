import React, { useState, useEffect } from 'react';
import ProductItem from '../product-item/index';
import {connect} from 'react-redux';
import WithStoreService from '../hoc/index';
import {itemsLoaded, itemsRequested, itemsError, itemAddedToCart} from "../../actions/index";

import Spinner from '../spinner/index';
import Error from '../error';

import './product-list.scss';

type Props = {
    items: Item[],
    loading: boolean,
    error: string | null,
    StoreService:any,
    itemsLoaded:(newItems: Item[]) => actionType,
    itemsError:(error: string|null) => actionType,
    itemsRequested:() => actionType,
    itemAddedToCart: any
};

const ProductList = ({items, loading, error, StoreService, itemsLoaded, itemsError, itemsRequested, itemAddedToCart}:Props) => {

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
                items.map(item => {
                    return <ProductItem key={item.id}
                                        item={item}
                                        onAddToCart={() => itemAddedToCart(item.id)}/>
                })
            }
        </div>
    )
};


const mapStateToProps:MapStateToProps = (state, props) => {
    let filteredItems: Item[] = [];
    if (props!.bestsellers) {
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
















