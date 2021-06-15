import React, { useReducer } from 'react';

const initialState = {
    qty: 1
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { qty: state.qty + 1 };
        case 'decrement':
            return { qty: state.qty - 1 };
        default:
            throw new Error();
    }
}
const ProductQuantity = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="product-quantity__container">
            <div className="qty">
                <span onClick={() => dispatch({ type: 'decrement' })}>-</span>
                <div className="qty-value" value={state.qty}>{state.qty}</div>
                <span onClick={() => dispatch({ type: 'increment' })}>+</span>
            </div>
            <button className="btn product-btn--orange">Add to cart</button>
        </div>
    )
}

export default ProductQuantity;
