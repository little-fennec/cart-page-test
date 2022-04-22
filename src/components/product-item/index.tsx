import React from 'react';
import './product-item.scss';

type Props = {
    item: Item,
    onAddToCart: () => void
};
const ProductItem = ({item, onAddToCart}:Props) => {
    const { title, price, src } = item;
    const addToCart = () => {
        onAddToCart();
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    return (
        <div className="product-item round-corner">
            <div className="product-item__wrap-img"><img className="round-corner" src={process.env.PUBLIC_URL + src} alt=""/></div>
            <div className="product-item__inf">
                <div className="product-item__description">{title}</div>
                <span className="product-item__cost">{price}$</span>
                <button onClick={() => addToCart()} className="btn add-to-cart">Add to cart</button>
            </div>
        </div>
    )
};

export default ProductItem;