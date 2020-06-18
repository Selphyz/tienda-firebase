import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppping-bag.svg';
import './cart-icon.styles.scss';
import { CartActionTypes } from '../../redux/cart/cart.types';
interface CartIconProps {
    toggleCartHidden: any,
    itemCount: number
}
const CartIcon = ({ toggleCartHidden, itemCount }: CartIconProps) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch: (arg0: { type: CartActionTypes }) => any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = (state: { cart: any; }) => ({
    itemCount: selectCartItemsCount(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)