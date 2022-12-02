import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      // return { name: "park", age: 20 };
      state.nmae = "park";
    },
    increase(state, action) {
      state.age += action.payload;
    },
  },
});
export const { changeName, increase } = user.actions;
export default user;
