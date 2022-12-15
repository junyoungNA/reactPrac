import { createSlice } from "@reduxjs/toolkit";

import { __getShoes } from "../thunk/thunk";

const initialState = {
  shoes: [],
  isLoading: false,
  error: null,
};

const shoes = createSlice({
  name: "shoes",
  initialState: initialState,
  reducers: {
    increaseCount(state, action) {
      const index = state.findIndex((state) => state.id === action.payload);
      state[index].count += 1;
    },
    updateBasket(state, action) {
      state.push(action.payload);
    },
    updateShoes(state, action) {
      const newPayload = action.payload.map((ele) => ({ ...ele, count: 0 }));
      state.push(...newPayload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__getShoes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__getShoes.fulfilled, (state, action) => {
      state.shoes = action.payload;
      state.isLoading = false;
    });
    builder.addCase(__getShoes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export const { increaseCount, updateBasket, updateShoes } = shoes.actions;

const shoesReducer = shoes.reducer;

export default shoesReducer;
