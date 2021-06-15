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
                {state.qty}
                <span onClick={() => dispatch({ type: 'increment' })}>+</span>

            </div>
        </div>
    )
}

export default ProductQuantity;
