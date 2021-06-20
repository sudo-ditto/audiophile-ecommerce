import React from 'react';
import { qtyActions } from '../../../reducers/quantityReducer';
import { useSelector, useDispatch } from 'react-redux';

const ProductQuantity = ({product, qty}) => {
    // // Select product slug from params
    // const { product } = useParams();

    // // Data of product that's currently being displayed
    // const selectedProduct = data.find(item => item.slug === product);

    // // Quantity of product
    // const qty = useSelector(state => state.quantity.qty);
    // const currentProduct = useSelector(state => state.quantity.currentProduct);

    return (
        <div className="qty">
            <span onClick={() => dispatch(qtyActions.decrement())}>-</span>
            <div className="qty-value">{qty}</div>
            <span onClick={() => dispatch(qtyActions.increment())}>+</span>
        </div>
    )
}

export default ProductQuantity
