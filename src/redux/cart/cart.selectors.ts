import { createSelector } from 'reselect';

const selectCart = (state: { cart: any; }) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.currentCart
);
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity: number, cartItem: { quantity: number }) =>
                accumalatedQuantity + cartItem.quantity, 0
        )
);