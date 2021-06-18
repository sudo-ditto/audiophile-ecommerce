import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CartProduct from '../components/CartComponents/CartProduct';

const Cart = ({ }) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    return (
        <div className="cart__container">
            {cart.items.map(item => {
                return (
                    <CartProduct product={item} />
                )
            })}
        </div>
    )
}

export default Cart
