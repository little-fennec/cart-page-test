import {StoreService} from "../services/store-service";
import {Item} from "../models/item.model";
import {ID} from "../models/id.model";

interface ItemsRequestedAction {
    type: 'FETCH_ITEMS_REQUEST'
}
const itemsRequested = (): ItemsRequestedAction => {
    return {
        type: 'FETCH_ITEMS_REQUEST',
    }
};

interface ItemsLoadedAction {
    type: 'FETCH_ITEMS_SUCCESS',
    payload: Item[]
}
const itemsLoaded  = (newItems : Item[]): ItemsLoadedAction => {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        payload: newItems
    }
};

interface ItemsErrorAction {
    type: 'FETCH_ITEMS_FAILURE',
    payload: string | null
}
const itemsError = (error: string | null): ItemsErrorAction => {
    return {
        type: 'FETCH_ITEMS_FAILURE',
        payload: error
    }
};

interface ItemAddedToCartAction {
    type: 'ITEM_ADDED_TO_CART',
    payload: {
        id:ID,
        count:number
    }
}
const itemAddedToCart = (id:ID, count:number=1): ItemAddedToCartAction => ({type: 'ITEM_ADDED_TO_CART', payload: {id: id, count:count}});

interface ItemRemovedFromCartAction {
    type: 'ITEM_REMOVED_FROM_CART',
    payload: ID
}
const itemRemovedFromCart = (id:ID): ItemRemovedFromCartAction => ({type: 'ITEM_REMOVED_FROM_CART', payload: id});

interface AllItemsRemovedFromCartAction {
    type: 'ALL_ITEMS_REMOVED_FROM_CART',
    payload: ID
}
const allItemsRemovedFromCart = (id:ID): AllItemsRemovedFromCartAction => ({type: 'ALL_ITEMS_REMOVED_FROM_CART', payload: id});

interface ClearCartAction {
    type: 'CLEAR_CART'
}
const clearCart = (): ClearCartAction => ({type: 'CLEAR_CART'});

const loadItems = () => {
    return dispatch => {
        dispatch(itemsRequested());
        StoreService.getItems()
            .then(data => {
                const {items} = JSON.parse(data);
                dispatch(itemsLoaded(items));
            })
            .catch(error => {
                dispatch(itemsError(error));
            });
    }
};

export type ActionType =
    ItemsErrorAction |
    ItemsRequestedAction |
    ItemsLoadedAction |
    ItemAddedToCartAction |
    ItemRemovedFromCartAction |
    AllItemsRemovedFromCartAction |
    ClearCartAction


export {
    itemsLoaded,
    itemsRequested,
    itemsError,
    itemAddedToCart,
    itemRemovedFromCart,
    allItemsRemovedFromCart,
    clearCart,
    loadItems
};