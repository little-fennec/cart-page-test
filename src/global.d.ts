type CartItem = {
    id: number|string ,
    title?: string,
    price?: number,
    count: number,
    totalPrice: number,
    src?: string ;
}
type Item = {
    id: number|string,
    title?: string,
    price: number,
    src?: string,
    bestseller?: boolean
}
type State = {
    items: Item[],
    loading: boolean,
    cartItems: CartItem[],
    orderTotalPrice: number,
    orderTotalCount: number,
    error: string|null
}

type ID = number|string;

type ErrorType = string|null;

type actionType  =
     { type: "FETCH_ITEMS_SUCCESS"; payload: Item[] }
    | { type: "FETCH_ITEMS_REQUEST" }
    | { type: "FETCH_ITEMS_FAILURE"; payload: ErrorType }
    | { type: "ITEM_REMOVED_FROM_CART"; payload: ID }
    | { type: "ALL_ITEMS_REMOVED_FROM_CART"; payload: ID}
    | { type: "CLEAR_CART" }
    | { type: "ITEM_ADDED_TO_CART"; payload: {id: ID, count: number} };

type MapStateToProps = (state:State, props?:{bestsellers: boolean}) => {
    items: Item[],
    loading: boolean,
    error: ErrorType
}