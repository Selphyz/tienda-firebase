import { CartActionTypes } from './cart.types';
import { CartStateItem } from './cart.model';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
export const addItem = (item: CartStateItem) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});
export const clearItemFromCart = (item: CartStateItem) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});
export const removeItem = (item: CartStateItem) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});