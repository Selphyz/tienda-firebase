import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppping-bag.svg';
import './cart-icon.styles.scss';
import { CartActionTypes } from '../../redux/cart/cart.types';
const CartIcon = ({ toggleCartHidden }: any) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">0</span>
    </div>
);
const mapDispatchToProps = (dispatch: (arg0: { type: CartActionTypes }) => any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(null, mapDispatchToProps)(CartIcon)