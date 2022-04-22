import {CartItem} from "./cart-item.model";
import {Item} from "./item.model";

export type State = {
    items: Item[],
    loading: boolean,
    cartItems: CartItem[],
    orderTotalPrice: number,
    orderTotalCount: number,
    error: string|null
}