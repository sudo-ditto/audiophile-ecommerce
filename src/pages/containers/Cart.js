import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartItems from '../components/CartComponents/CartItems';
import Button from '../components/UI/Button';
import CartPrice from '../components/UI/CartPrice';
import ModalOverlay from '../components/UI/ModalOverlay';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    console.log(cart.items.length);
    let itemsTotal = 0;

    useEffect(() => {
        totalPrice();
    }, [cart.items]);

    const totalPrice = () => {
        cart.items.map((item) => {
            return itemsTotal += item.price * item.quantity;
        })
    }

    return (
        <ModalOverlay>
            <section id="cart">
                <div className="cart-header">
                    <h2>Cart({cart.items.length})</h2>
                    <a href="" className="empty-cart">Remove all</a>
                </div>
                <CartItems />
                <CartPrice priceType="Total" price="0" />
                <Button urlLink="/checkout" className="btn product-btn--orange" >Checkout</Button>
            </section>
        </ModalOverlay>

    )
}

export default Cart;
