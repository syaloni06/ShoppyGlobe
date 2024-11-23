import { configureStore } from "@reduxjs/toolkit"; // Importing the configureStore function from Redux Toolkit
import cartReducer from "./cartSlice.js"; // Importing the reducer to handle cart state

// Creating a Redux store and setting up the reducer for managing the cart state
const productStore = configureStore({
    reducer: {
        cart: cartReducer, // Mapping the cartReducer to the cart slice of state
    }
});

export default productStore; // Exporting the configured store for use in the application
