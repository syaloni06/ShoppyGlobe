import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.data.push({ ...action.payload, quantity: 1 });
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.data.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.data.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1; // Decrement quantity but ensure it's > 0
      }
    },
  },
});
export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
