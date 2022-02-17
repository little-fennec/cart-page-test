import React from 'react';
import CartHeader from '../cart-header';
import CartList from '../cart-list';
import Bestsellers from '../bestsellers';
import AddForm from '../add-form';

import './app.scss';
import imgKitty from '../../images/kitty.jpg';


const App = () => {
    return (
        <div className="container">
            <CartHeader />
            <CartList/>
            <Bestsellers/>
            <div className="section">
                <div className="section__title">Add your own item !</div>
                <div className="d-flex">
                    <AddForm/>
                    <img src={imgKitty} alt="kitty"/>
                </div>
            </div>
        </div>
    )
};

export default App;