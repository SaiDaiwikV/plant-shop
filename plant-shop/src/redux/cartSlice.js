import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Stores cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (!existingItem) {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    increaseItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const { addItem, increaseItem, decreaseItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
