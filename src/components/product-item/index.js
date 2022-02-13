import React from 'react';
import './product-item.scss';
import img from './dog-bed.jpg';



const ProductItem = () => {
    return (
        <div className="product-item round-corner">
            <div className="product-item__wrap-img"><img className="round-corner" src={img} alt=""/></div>
            <div className="product-item__inf">
                <div className="product-item__description">Velvet pet bed</div>
                <span className="product-item__cost">430$</span>
                <a className="btn add-to-cart" href="#">Add to cart</a>
            </div>
        </div>
    )
};

export default ProductItem;