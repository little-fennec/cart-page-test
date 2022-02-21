import React from 'react';
import CartHeader from '../cart-header';
import CartList from '../cart-list';
import Bestsellers from '../bestsellers';
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