import React from 'react';
import { connect } from 'react-redux';

import {
    selectCartItems,
    selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartStateItem } from '../../redux/cart/cart.model';
import StripeCheckoutButton from '../../components/stripe-button/stripe.button.component';
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
        {cartItems.map((cartItem: CartStateItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total}</div>
        <div className="test-warning">Test credit card: <br />
        4242 4242 4242 4242 -Exp 02/20 - CVV: 123</div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = (state: { cart: any; }) => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
});

export default connect(mapStateToProps)(CheckoutPage);