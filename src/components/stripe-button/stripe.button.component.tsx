import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
type Price = {
    price: number
}
const StripeCheckoutButton = ({ price }: Price) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51GxXUaIW5y5JlfaDH9Fjbvb5A2cHPvS8ZU0xx7Nd0BZaoTU6Icm09lkSgTafrOD4cg5doFP5jTdGiVXyCgecbBnp00hmEKXPxJ";
    const onToken = (token: any) => {
        console.log(token);
        alert('Payment Succesful')
    }
    return (
        <StripeCheckout
            label='Pay Now' name='Tienda portfolio'
            billingAddress shippingAddress
            image='https://upload.wikimedia.org/wikipedia/commons/8/84/Money_Flat_Icon.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now' token={onToken}
            stripeKey={publishableKey}
        />
    );
};
export default StripeCheckoutButton;