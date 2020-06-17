import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppping-bag.svg';
import './cart-icon.styles.scss';
export const CartIcon = () => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">0</span>
    </div>
);