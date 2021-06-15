import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../../reducers/cartReducer';
import { qtyActions } from '../../../reducers/quantityReducer';
import { useParams } from 'react-router-dom';
import data from '../../../assets/data/data';

const ProductQuantity = () => {
    const dispatch = useDispatch();
    const { product } = useParams();

    const cart = useSelector(state => state.cart);

    // Data of product that's currently being displayed
    const selectedProduct = data.find(item => item.slug === product);

    // Quantity of product
    const qty = useSelector(state => state.quantity.qty);
    const currentProduct = useSelector(state => state.quantity.currentProduct);

    useEffect(() => {
        dispatch(qtyActions.updateProduct(selectedProduct));
    }, [product])

    const addToCartHandler = () => {
        dispatch(cartActions.addToCart({
            qty: qty
        }));

        console.log(cart);
    }

    return (
        <div className="product-quantity__container">
            <div className="qty">
                <span onClick={() => dispatch(qtyActions.decrement())}>-</span>
                <div className="qty-value">{qty}</div>
                <span onClick={() => dispatch(qtyActions.increment())}>+</span>
            </div>
            <button onClick={addToCartHandler} className="btn product-btn--orange">Add to cart</button>
        </div>
    )
}

export default ProductQuantity;
