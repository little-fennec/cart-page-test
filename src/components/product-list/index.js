import React from 'react';
import ProductItem from '../product-item'
import './product-list.scss';


const ProductList = () => {
    return (
        <div className="product-list">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </div>
    )
};

export default ProductList;