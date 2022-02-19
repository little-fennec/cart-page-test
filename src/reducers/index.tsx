type actionType  =
    | { type: "FETCH_ITEMS_SUCCESS"; payload: number }
    | { type: "FETCH_ITEMS_REQUEST"; payload: number }
    | { type: "FETCH_ITEMS_FAILURE"; payload: string }
    | { type: "ITEM_REMOVED_FROM_CART"; payload: number }
    | { type: "ALL_ITEMS_REMOVED_FROM_CART"; payload: number}
    | { type: "CLEAR_CART" }
    | { type: "ITEM_ADDED_TO_CART"; payload: {id: number, count: number} };

const updateCartItems = (cartItems, item, idx) => {
    //delete item
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx+1)
        ];
    }
    //adding item
    if (idx === -1) {
       return [
           item,
           ...cartItems,

       ];
    }
    //update item
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx+1)
    ];
};

const updateCartItem = (item, cartItem: any = {}, quantity) => {
    const {
        id = item.id,
        title = item.title,
        price = item.price,
        count = 0,
        totalPrice = 0,
        src = item.src} = cartItem;
    return {
        id,
        title,
        src,
        count: count +quantity,
        totalPrice: (count + quantity)*price
    };
};

const updateTotalVars = (newCartItems) => {
    let orderTotalPrice = 0;
    let orderTotalCount = 0;
    newCartItems.forEach((item) => {
        orderTotalPrice += item.totalPrice;
        orderTotalCount += item.count;
    });
    return {
        orderTotalPrice,
        orderTotalCount
    }
};


const updateOrder = (state, itemID, quantity) => {
    const {items, cartItems} = state;
    const item = items.find(item => item.id == itemID);
    const itemIndex = cartItems.findIndex(({id}) => id == itemID);
    const cartItem = cartItems[itemIndex];

    const newItem = updateCartItem(item, cartItem, quantity);

    const newCartItems = updateCartItems(cartItems, newItem, itemIndex);

    const {orderTotalPrice, orderTotalCount} = updateTotalVars(newCartItems);

    return {
        ...state,
        cartItems: newCartItems,
        orderTotalPrice: orderTotalPrice,
        orderTotalCount: orderTotalCount
    };
};
const clearCart = (state) => {
    return {
        ...state,
        cartItems: [],
        orderTotalPrice: 0,
        orderTotalCount: 0
    };
};

const initialState = {
    items: [],
    loading: true,
    cartItems: [
        {
            "id": 1,
            "title": "Velvet pet bed",
            "price": 90,
            "src": "/images/dog-bed.jpg",
            "count": 1,
            "totalPrice": 90
        },
        {
            "id": 2,
            "title": "Trixie koala dog toy",
            "price": 25,
            "src": "/images/koala.jpg",
            "count": 1,
            "totalPrice": 25
        },
        {
            "id": 3,
            "title": "Mucki bird grass",
            "price": 5,
            "src": "/images/grass.jpg",
            "count": 1,
            "totalPrice": 5
        },
    ],
    orderTotalPrice: 120,
    orderTotalCount: 3,
    error: null
};

const reducer = (state = initialState, action:actionType) => {
    // console.log(action.type);
    switch (action.type) {
        case 'FETCH_ITEMS_REQUEST':
            return {
                ...state,
                items: state.items,
                loading: true,
                error: null
            };

        case 'FETCH_ITEMS_SUCCESS':
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_ITEMS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case 'ITEM_ADDED_TO_CART':
            return updateOrder(state, action.payload.id, action.payload.count);

        case 'ITEM_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);

        case 'ALL_ITEMS_REMOVED_FROM_CART':
            const item = state.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        case 'CLEAR_CART':
            return clearCart(state);

        default:
            return state;
    }
};

export default reducer;
