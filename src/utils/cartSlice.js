import { createSlice } from "@reduxjs/toolkit"; // Importing createSlice function from Redux Toolkit

// Creating a slice for managing the cart's state and actions
const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState: {
    data: [], // Initial state of the cart is an empty array
  },
  reducers: {
    // Action to add an item to the cart with an initial quantity of 1
    addItem: (state, action) => {
      state.data.push({ ...action.payload, quantity: 1 });
    },
    // Action to remove an item from the cart based on its ID
    removeItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    // Action to increase the quantity of an item in the cart by 1
    increaseQuantity(state, action) {
      const item = state.data.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    // Action to decrease the quantity of an item in the cart by 1
    decreaseQuantity(state, action) {
      const item = state.data.find((item) => item.id === action.payload);
      if (item) {
        if(item.quantity === 1){
          // If quantity is 1, remove the item from the cart
          state.data = state.data.filter((item) => item.id !== action.payload);
        }
        else{
          item.quantity -= 1; // Decrement quantity but ensure it's greater than 0
        }
      }
    },
    clearCart(state){
      state.data = []; // for clear the cart
    }
  },
});

// Exporting the actions to be used in other parts of the app
export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;

// Exporting the reducer to be used in the store configuration
export default cartSlice.reducer;
