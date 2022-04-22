import {RootState} from "../store";

export const selectCartItems = (state: RootState) => state.cartItems;
export const selectItems = (state: RootState) => state.items;
export const selectBestsellers = (state: RootState) => state.items.filter((item) => item.bestseller);
export const selectError = (state: RootState) => state.error;
export const selectLoading = (state: RootState) => state.loading;
export const selectOrderTotalPrice = (state: RootState) => state.orderTotalPrice;
export const selectOrderTotalCount = (state: RootState) => state.orderTotalCount;
