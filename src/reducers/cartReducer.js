import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    itemsTotal: 0,
    cartOpen: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            // Get name of product that's added
            const newItem = action.payload;

            // Check if item already exists in cart
            const existingItem = state.items.find(item => {
                return item.id === newItem.id;
            });

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    image: newItem.image,
                    name: newItem.name,
                    model: newItem.model,
                    price: new Intl.NumberFormat().format(newItem.price),
                    quantity: newItem.qty,
                });
            } else {
                existingItem.quantity += newItem.qty;
            }


            // let cart = JSON.parse(localStorage.getItem('cart'));
            // cart.push(JSON.stringify(state.items));
            localStorage.setItem('cart', JSON.stringify(state.items));
            // console.log(cart);
        },
        toggleCart(state) {
            state.cartOpen = !state.cartOpen;
        }


    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;