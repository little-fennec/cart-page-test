import React, {useEffect} from 'react';
import ProductItem from '../product-item/index';
import {useDispatch, useSelector} from 'react-redux';
import {itemAddedToCart} from "../../actions/index";

import Spinner from '../spinner/index';
import Error from '../error';

import './product-list.scss';
import {selectBestsellers, selectError, selectItems, selectLoading} from "../../selectors/selectors";
import {loadItems} from "../../actions";


const ProductList = ({bestsellers}) => {

    const items = useSelector(bestsellers ? selectBestsellers : selectItems);
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadItems());
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
                                        onAddToCart={() => dispatch(itemAddedToCart(item.id))}/>
                })
            }
        </div>
    )
};


export default ProductList;
















