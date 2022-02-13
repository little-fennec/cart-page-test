import React from 'react';
import CartHeader from '../cart-header';
import CartList from '../cart-list';
import ProductList from '../product-list';
import Bestsellers from '../bestsellers';
import AddForm from '../add-form';
import WithStoreService from '../hoc'

import './app.scss';
import imgKitty from '../../images/kitty.jpg';


const App = ({StoreService}) => {
    return (
        <div className="container">
            <CartHeader numItems={2} total={200}/>
            <CartList/>
            <Bestsellers/>
            <div className="section">
                <div className="section__title">Add your own item !</div>
                <div className="d-flex">
                    <AddForm/>
                    <img src={imgKitty} name="kitty" alt="kitty"/>
                </div>
            </div>
        </div>
    )
};

export default WithStoreService()(App);