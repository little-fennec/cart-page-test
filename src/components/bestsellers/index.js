import React from 'react';
import ProductList from '../product-list'
import './bestsellers.scss';


const Bestsellers = () => {
    return (
        <div className="bestsellers section">
            <div className="section__title">Bestsellers</div>
           <ProductList bestsellers={true}/>
        </div>
    )
};

export default Bestsellers;