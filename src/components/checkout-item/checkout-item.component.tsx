import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import { CartActionTypes } from "../../redux/cart/cart.types";
import './checkout-item.component.scss';
import Item from '../../redux/cart/item.model';
type itemFunction = (item: Item) => {
    item: Item,
    action: CartActionTypes
};
interface CheckoutItemProps {
    cartItem: Item;
    clearItem: itemFunction;
    addItem: itemFunction;
    removeItem: itemFunction;
};
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }: CheckoutItemProps) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>)
}
const mapDispatchToProps = (dispatch: (arg0: { type: CartActionTypes; payload: Item; }) => any) => ({
    clearItem: (item: Item) => dispatch(clearItemFromCart(item)),
    addItem: (item: Item) => dispatch(addItem(item)),
    removeItem: (item: Item) => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);