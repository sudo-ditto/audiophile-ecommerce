import React from 'react';
import BillingAddress from '../components/CheckoutComponents/FormComponents/BillingAddress';
import OrderSummary from '../components/CheckoutComponents/FormComponents/OrderSummary';
import PaymentDetails from '../components/CheckoutComponents/FormComponents/PaymentDetails';
import ShippingInfo from '../components/CheckoutComponents/FormComponents/ShippingInfo';
import GoBack from '../components/UI/GoBack';

const Checkout = () => {
    return (
        <section id="checkout" className="page-wrapper">
            <GoBack category="headphones"/>
            <h1>Checkout</h1>
            <form action="/" className="checkout-form">
                <BillingAddress />
                <ShippingInfo />
                <PaymentDetails />
                <OrderSummary />
            </form>
        </section>
    )
}

export default Checkout;
