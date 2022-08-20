import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    addPizzaToCart: (state, action) => {
      let findedItemId = state.items.find(
        (item) => item.id === action.payload.id
      );
      let findedItemProp = state.items.find(
        (item) =>
          item.currentType === action.payload.currentType &&
          item.currentSize === action.payload.currentSize
      );
      if (findedItemId && findedItemProp) {
        findedItemId.count += 1;
      } else if (findedItemId) {
        state.items.push({
          ...action.payload,
          id: state.items.length,
        });
      } else {
        state.items.push({
          ...action.payload,
        });
      }
    },
    removePizzaFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
  },
});

export const {
  setTotalCount,
  setTotalPrice,
  addPizzaToCart,
  removePizzaFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
