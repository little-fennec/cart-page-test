import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {itemAddedToCart, itemsLoaded, itemsRequested} from "../../actions";
import WithStoreService from "../hoc";
import './add-form.scss';
import imgKitty from './kitty.jpg';
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
        setValue,
        setFocus,
        onChange,
        onBlur,
        isFocus,
        ...valid
    }
};

const AddForm = ({StoreService, itemAddedToCart, itemsRequested, itemsLoaded}) => {
    const title = useInput('',{isEmpty: true});
    const price = useInput('',{isEmpty: true, errorInteger: true});
    const quantity = useInput('',{isEmpty: true, errorInteger: true});
    const newItem = {
        title: title.value,
        price: +price.value,
        count: +quantity.value,
        src: '/images/cat_paw.jpg',
        bestseller: false
    };
    const resetForm = () => {
            title.setValue('');
            title.setFocus(false);
            price.setValue('');
            price.setFocus(false);
            quantity.setValue('');
            quantity.setFocus(false);
    };
    const onSubmit = (e, newItem) => {
        e.preventDefault();
        StoreService.postItem(newItem)
            .then(addedItem => {
                const {item} = JSON.parse(addedItem);
                StoreService.getItems()
                    .then(data => {
                        const {items} = JSON.parse(data);
                        itemsLoaded(items)
                    })
                    .then(res => {
                        itemAddedToCart(item.id, newItem.count);
                    });
            });
        resetForm();
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    return (
        <div className="section">
            <div className="section__title">Add your own item !</div>
            <div className="wrap-add-form">
                <form className="add-form round-corner" id="form-with-new-item" onSubmit={(e) => onSubmit(e, newItem)}>
                        <div className="product-item__wrap-img"><img className="round-corner" src={img} alt=""/></div>
                        <div className="wrap-form-group">

                            <div className="form-group">
                                <label htmlFor="title">Item title</label>
                                <div className="wrap-input">
                                    {(title.isFocus && !title.inputValid) && <div className="input-error">{title.errorMsg}</div>}
                                    <input onChange={e => title.onChange(e)} onBlur={e => title.onBlur(e)} value={title.value}
                                           type="text" id="title" name="title" maxLength="30" placeholder="title"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Item price, $</label>
                                <div className="wrap-input">
                                    {(price.isFocus && !price.inputValid) && <div className="input-error">{price.errorMsg}</div>}
                                    <input onChange={e => price.onChange(e)} onBlur={e => price.onBlur(e)} value={price.value}
                                       type="text" id="price" name="price" maxLength="4" placeholder="price"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="quantity">Item quantity</label>
                                <div className="wrap-input">
                                    {(quantity.isFocus && !quantity.inputValid) && <div className="input-error">{quantity.errorMsg}</div>}
                                    <input onChange={e => quantity.onChange(e)} onBlur={e => quantity.onBlur(e)} value={quantity.value}
                                       type="text" id="quantity" name="quantity" maxLength="3" placeholder="quantity"/>
                                </div>
                            </div>

                            <button disabled={!title.inputValid || !price.inputValid || !quantity.inputValid} className="btn add-item">Add Item</button>
                        </div>
                </form>
                <img src={imgKitty} alt="kitty"/>
            </div>
        </div>
    )
};

const mapDispatchToProps = {
    itemAddedToCart,
    itemsLoaded,
    itemsRequested
};

export default WithStoreService()(connect(null, mapDispatchToProps)(AddForm));