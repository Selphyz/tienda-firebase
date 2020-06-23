import { CartActionTypes } from './cart.types';
import Item from './item.model';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
export const addItem = (item: Item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});
export const clearItemFromCart = (item: Item) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});
export const removeItem = (item: Item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});