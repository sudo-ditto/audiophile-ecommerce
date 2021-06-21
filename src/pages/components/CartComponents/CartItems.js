import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';

const CartItems = () => {
    const cart = useSelector(state => state.cart);
    
    return (
        <div className="cart__container">
            {cart.items.map((item, key) => {
                return (
                    <CartProduct product={item} key={key} />
                )
            })}
        </div>
    )
}

export default CartItems;