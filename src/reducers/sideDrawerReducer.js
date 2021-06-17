import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false
}

const sideDrawerSlice = createSlice({
    name: 'sideDrawer',
    initialState,
    reducers: {
        toggle(state) {
            state.open = !state.open
        }
    }
});

export const sideDrawerActions = sideDrawerSlice.actions;
export default sideDrawerSlice;