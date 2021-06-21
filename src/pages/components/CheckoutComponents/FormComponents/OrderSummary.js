import React from 'react'
import CartItems from '../../CartComponents/CartItems';
import Button from '../../UI/Button';

const OrderSummary = () => {
    return (
        <div className="order-summary">
            <h3 className="order-summary-title">Summary</h3>
            <div className="cart-products">
                <CartItems/>
                                </div>
            <Button className="btn product-btn--orange">Continue &amp; pay</Button>
        </div>
    )
}

export default OrderSummary
