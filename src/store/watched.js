import { createSlice } from "@reduxjs/toolkit";

const watched = createSlice({
  name: "watched",
  initialState: [],
  reducers: {
    initialWatched(state, action) {
      localStorage.setItem("watched", JSON.stringify(state));
    },
    updateWatched(state, action) {
      if (state.includes(action.payload)) return;
      state.push(action.payload);
      state = [...new Set(state)];
      console.log("storeState", state);
      localStorage.setItem("watched", JSON.stringify(state));
    },
  },
});

export const { initialWatched, updateWatched } = watched.actions;

export default watched;
