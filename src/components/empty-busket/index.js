import React from 'react';
import './empty-busket.scss';
import img from './empty_busket.jpg';

const EmptyBusket = () => {
    return (
        <div className="empty-busket">
            <img src={img} alt=""/>
            <div className="empty-busket__text">Cart is empty :(</div>
        </div>
    )
};

export default EmptyBusket;