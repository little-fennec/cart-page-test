import React from 'react';
import './product-item.scss';
import img from './dog-bed.jpg';

const ProductItem = ({cartItem, onAddToCart}) => {
    const { title, price, src } = cartItem;
    const addToCart = () => {
        onAddToCart();
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    return (
        <div className="product-item round-corner">
            <div className="product-item__wrap-img"><img className="round-corner" src={window.location.origin + src} alt=""/></div>
            <div className="product-item__inf">
                <div className="product-item__description">{title}</div>
                <span className="product-item__cost">{price}$</span>
                <button onClick={() => addToCart()} className="btn add-to-cart">Add to cart</button>
            </div>
        </div>
    )
};

export default ProductItem;