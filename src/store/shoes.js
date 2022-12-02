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
      state.push(...action.payload);
    },
  },
});
export const { increaseCount, updateBasket, updateShoes } = shoes.actions;

export default shoes;
// git commit -m "first commit"
// git branch -M main
