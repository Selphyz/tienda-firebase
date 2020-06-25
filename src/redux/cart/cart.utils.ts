import { CartStateItem } from "./cart.model";

export const addItemToCart = (cartItems: CartStateItem[], cartItemToAdd: { id: number; }) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
export const removeItemFromCart = (cartItems: CartStateItem[], cartItemToRemove: CartStateItem) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    if (existingCartItem?.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem => cartItemToRemove.id === cartItem.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}