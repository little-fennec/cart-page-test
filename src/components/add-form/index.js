import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {newItemAddedToCart} from "../../actions";
import './add-form.scss';
import img from './lapka.png';

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [errorInteger, setErrorInteger] = useState(false);
    const [inputValid, setInputValid] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case 'errorInteger':
                    if (/^[1-9][0-9]*$/.test(+value)) {
                        setErrorInteger(false);
                    } else {
                        setErrorInteger(true);
                    }
                    break;
            }
        }
    }, [value]);

    useEffect(() => {
        if (errorInteger) {
            setInputValid(false);
            setErrorMsg('Value must be integer, greater than 0');
        }
        if (isEmpty) {
            setInputValid(false);
            setErrorMsg('Field cannot be empty');
        }
        if (!isEmpty && !errorInteger ){
            setInputValid(true);
        }

    }, [isEmpty, errorInteger]);

    return {
        isEmpty,
        errorInteger,
        inputValid,
        errorMsg
    }
};

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isFocus, setFocus] = useState(false);

    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value);
    };
    const onBlur = () => {
        setFocus(true);
    };

    return {
        value,
        onChange,
        onBlur,
        isFocus,
        ...valid
    }
};

const AddForm = ({newItemAddedToCart}) => {
    const title = useInput('',{isEmpty: true});
    const price = useInput('',{isEmpty: true, errorInteger: true});
    const quantity = useInput('',{isEmpty: true, errorInteger: true});
    const newItem = {
        title: title.value,
        price: price.value,
        quantity: quantity.value
    };

    return (
            <form className="add-form round-corner" onSubmit={(e) => {
                e.preventDefault();
                newItemAddedToCart(newItem);}}>
                    <div className="product-item__wrap-img"><img className="round-corner" src={img} alt=""/></div>
                    <div className="wrap-form-group">

                        <div className="form-group">
                            <label htmlFor="title">Item title</label>
                            <div className="wrap-input">
                                {(title.isFocus && !title.inputValid) && <div className="input-error">{title.errorMsg}</div>}
                                <input onChange={e => title.onChange(e)} onBlur={e => title.onBlur(e)} value={title.value}
                                       type="text" id="title" name="title" maxLength="30" placeholder="Type item title..."/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Item price, $</label>
                            <div className="wrap-input">
                                {(price.isFocus && !price.inputValid) && <div className="input-error">{price.errorMsg}</div>}
                                <input onChange={e => price.onChange(e)} onBlur={e => price.onBlur(e)} value={price.value}
                                   type="text" id="price" name="price" maxLength="4" placeholder="price..."/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="quantity">Item quantity</label>
                            <div className="wrap-input">
                                {(quantity.isFocus && !quantity.inputValid) && <div className="input-error">{quantity.errorMsg}</div>}
                                <input onChange={e => quantity.onChange(e)} onBlur={e => quantity.onBlur(e)} value={quantity.value}
                                   type="text" id="quantity" name="quantity" maxLength="3" placeholder="quantity..."/>
                            </div>
                        </div>

                        <button disabled={!title.inputValid || !price.inputValid || !quantity.inputValid} className="btn add-item">Add Item</button>
                    </div>
            </form>
    )
};

export default connect(null,{
    newItemAddedToCart
})(AddForm);