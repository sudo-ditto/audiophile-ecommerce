import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../reducers/cartReducer';
import qtySlice from '../reducers/quantityReducer';
import sideDrawerSlice from '../reducers/sideDrawerReducer';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        quantity: qtySlice.reducer,
        sideDrawer: sideDrawerSlice.reducer

    }
});

export default store;