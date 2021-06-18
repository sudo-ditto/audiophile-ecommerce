import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    qty: 1,
    currentProduct: {}
}

const qtySlice = createSlice({
    name: 'quantity',
    initialState,
    reducers: {
        increment(state) {
            state.qty = state.qty + 1;
        },
        decrement(state) {
            state.qty = state.qty - 1;
        },
        reset(state) {
            state.qty = 1;
        },
        updateProduct(state, action) {
            state.currentProduct = action.payload
        }

    }
});

export const qtyActions = qtySlice.actions;
export default qtySlice;