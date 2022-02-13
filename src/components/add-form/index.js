import React from 'react';
import './add-form.scss';
import img from './lapka.png';

const AddForm = () => {
    return (

            <form className="add-form round-corner">
                    <div className="product-item__wrap-img"><img className="round-corner" src={img} alt=""/></div>
                    <div className="wrap-form-group">

                        <div className="form-group">
                            <label htmlFor="title">Item title</label>
                            <input type="text" id="title" name="title" placeholder="Type item title..."/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Item price, $</label>
                            <input type="text" id="price" name="price" placeholder="price..."/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="quantity">Item quantity</label>
                            <input type="text" id="quantity" name="quantity" placeholder="quantity..."/>
                        </div>

                        <div className="btn add-item">Add Item</div>
                    </div>
            </form>



    )
};

export default AddForm;