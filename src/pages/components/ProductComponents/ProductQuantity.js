import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../../reducers/cartReducer';
import { qtyActions } from '../../../reducers/quantityReducer';
import { useParams } from 'react-router-dom';
import data from '../../../assets/data/data';

const ProductQuantity = () => {
    const dispatch = useDispatch();

    // Select product slug from params
    const { product } = useParams();

    // Data of product that's currently being displayed
    const selectedProduct = data.find(item => item.slug === product);

    // Quantity of product
    const qty = useSelector(state => state.quantity.qty);
    const currentProduct = useSelector(state => state.quantity.currentProduct);

    useEffect(() => {
        dispatch(qtyActions.updateProduct(selectedProduct));
    }, [product, dispatch, selectedProduct])

    // Add item to cart
    const addToCartHandler = () => {
        dispatch(cartActions.addToCart({
            id: currentProduct.id,
            image: currentProduct.image.mobile,
            name: currentProduct.name,
            model: currentProduct.model,
            price: currentProduct.price,
            qty: qty
        }));
        dispatch(qtyActions.reset());
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
