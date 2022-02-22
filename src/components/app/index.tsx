import React from 'react';
import CartHeader from '../cart-header/index';
import CartList from '../cart-list/index';
import Bestsellers from '../bestsellers/index';
import AddForm from '../add-form';

import './app.scss';

const App = () => {
    return (
        <div className="container">
            <CartHeader />
            <CartList/>
            <Bestsellers/>
            <AddForm/>
        </div>
    )
};

export default App;