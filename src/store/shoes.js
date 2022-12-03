import { createSlice } from "@reduxjs/toolkit";

import data from "../data";

const shoes = createSlice({
  name: "shoes",
  initialState: [...data],
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
});
export const { increaseCount, updateBasket, updateShoes } = shoes.actions;

export default shoes;
