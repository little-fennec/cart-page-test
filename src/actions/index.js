const itemsRequested = () => {
    return {
        type: 'FETCH_ITEMS_REQUEST',
    }
};
const itemsLoaded = (newItems) => {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        payload: newItems
    }
};
const itemsError = (error) => {
    return {
        type: 'FETCH_ITEMS_FAILURE',
        payload: error
    }
};

const itemAddedToCart = (id, count=1) => ({type: 'ITEM_ADDED_TO_CART', payload: {id: id, count:count}});
const itemRemovedFromCart = (id) => ({type: 'ITEM_REMOVED_FROM_CART', payload: id});
const allItemsRemovedFromCart = (id) => ({type: 'ALL_ITEMS_REMOVED_FROM_CART', payload: id});
const clearCart = () => ({type: 'CLEAR_CART'});

export {
    itemsLoaded,
    itemsRequested,
    itemsError,
    itemAddedToCart,
    itemRemovedFromCart,
    allItemsRemovedFromCart,
    clearCart
};