import React from 'react';
import { connect } from 'react-redux';

import {
    selectCartItems,
    selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Item from '../../redux/cart/item.model';
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
        {cartItems.map((cartItem: Item) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total}</div>
    </div>
);

const mapStateToProps = (state: { cart: any; }) => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
});

export default connect(mapStateToProps)(CheckoutPage);