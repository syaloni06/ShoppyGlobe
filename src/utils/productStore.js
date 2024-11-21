import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js"
const productStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default productStore;