import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectCartItems,
    selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
interface CheckoutPageProps {
    cartItems: any,
    total: any
}
const CheckoutPage = ({ cartItems, total }: CheckoutPageProps) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map((cartItem: { name: any; }) => (
            cartItem.name
        ))}
        <div className='total'>TOTAL: ${total}</div>
    </div>
);

const mapStateToProps = createStructuredSelector<any, any>({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);