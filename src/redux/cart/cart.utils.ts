import Item from "./item.model";

export const addItemToCart = (cartItems: Item[], cartItemToAdd: { id: number; }) => {
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
export const removeItemFromCart = (cartItems: Item[], cartItemToRemove: Item) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    if (existingCartItem?.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem => cartItemToRemove.id === cartItem.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}