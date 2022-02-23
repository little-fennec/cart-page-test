
type UpdateCartItems = (cartItems:CartItem[], item:CartItem, idx:number) => CartItem[];

const updateCartItems: UpdateCartItems = (cartItems, item, idx) => {
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


type UpdateCartItem = (item: Item|undefined, cartItem: any, quantity: number) => CartItem;

const updateCartItem: UpdateCartItem = (item={id:1, price:0}, cartItem = {}, quantity) => {
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

type UpdateTotalVars = (newCartItems:CartItem[]) => {orderTotalPrice:number,orderTotalCount:number};

const updateTotalVars: UpdateTotalVars = (newCartItems) => {
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

type UpdateOrder = (state:State, itemID:string|number, quantity:number) => State;

const updateOrder:UpdateOrder = (state, itemID, quantity) => {
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

type ClearCart = (state:State) => State;
const clearCart:ClearCart = (state) => {
    return {
        ...state,
        cartItems: [],
        orderTotalPrice: 0,
        orderTotalCount: 0
    };
};

const initialState:State = {
    items: [],
    loading: true,
    cartItems: [
        {
            "id": 1,
            "title": "Velvet pet bed",
            "price": 90,
            "src": "https://i2.piccy.info/i9/7f41d85d930863a0655dab52b8b765ae/1645605128/6436/1459510/dog_bed_240.jpg",
            "count": 1,
            "totalPrice": 90
        },
        {
            "id": 2,
            "title": "Trixie koala dog toy",
            "price": 25,
            "src": "https://i2.piccy.info/i9/e9428ad11f1541f19ce68f19764de100/1645605175/7549/1459510/koala_240.jpg",
            "count": 1,
            "totalPrice": 25
        },
        {
            "id": 3,
            "title": "Mucki bird grass",
            "price": 5,
            "src": "https://i2.piccy.info/i9/fa7829cb58744754844ccb3c4d397d4d/1645605155/9854/1459510/grass_240.jpg",
            "count": 1,
            "totalPrice": 5
        },
    ],
    orderTotalPrice: 120,
    orderTotalCount: 3,
    error: null
};

const reducer = (state = initialState, action:actionType) => {
    console.log(action.type);
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
            return updateOrder(state, action.payload, -item!.count);

        case 'CLEAR_CART':
            return clearCart(state);

        default:
            return state;
    }
};

export  {reducer};
