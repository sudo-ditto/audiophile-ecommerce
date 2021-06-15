import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../reducers/cartReducer';
import qtySlice from '../reducers/quantityReducer';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        quantity: qtySlice.reducer
    }
});

export default store;