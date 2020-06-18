import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';


import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems }: any) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map((cartItem: { id: any; }) => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }: any) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);