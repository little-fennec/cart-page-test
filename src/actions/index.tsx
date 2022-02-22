const itemsRequested = ():actionType => {
    return {
        type: 'FETCH_ITEMS_REQUEST',
    }
};
const itemsLoaded  = (newItems:Item[]):actionType => {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        payload: newItems
    }
};
const itemsError = (error:string|null):actionType => {
    return {
        type: 'FETCH_ITEMS_FAILURE',
        payload: error
    }
};

const itemAddedToCart = (id:ID, count:number=1):actionType => ({type: 'ITEM_ADDED_TO_CART', payload: {id: id, count:count}});
const itemRemovedFromCart = (id:ID):actionType => ({type: 'ITEM_REMOVED_FROM_CART', payload: id});
const allItemsRemovedFromCart = (id:ID):actionType => ({type: 'ALL_ITEMS_REMOVED_FROM_CART', payload: id});
const clearCart = ():actionType => ({type: 'CLEAR_CART'});

export {
    itemsLoaded,
    itemsRequested,
    itemsError,
    itemAddedToCart,
    itemRemovedFromCart,
    allItemsRemovedFromCart,
    clearCart
};