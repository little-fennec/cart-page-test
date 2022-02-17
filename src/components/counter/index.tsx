import React from 'react';
import './counter.scss';


const Counter = () => {
    return (
        <div className="counter">
            <button className="btn-minus">-</button>
            <input type="text" className="counter-amount"  value={3}/>
            <button className="btn-plus">+</button>
        </div>
    )
};

export default Counter;