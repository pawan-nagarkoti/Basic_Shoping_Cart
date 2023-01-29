import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cartContainer: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log(action.payload.price)
            let find = state.cartContainer.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cartContainer[find].price *= 2;
            } else {
                state.cartContainer.push(action.payload)
            }
        },
        remove(state, action) {
            state.cartContainer = state.cartContainer.filter((item) =>
                item.id !== action.payload
            )
        }
    }
})

export const { addToCart, remove } = cartSlice.actions;
export default cartSlice.reducer;