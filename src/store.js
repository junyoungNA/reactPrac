import { configureStore, createSlice } from "@reduxjs/toolkit";

import data from "./data";
import shoes from "./store/shoes";
import user from "./store/useSlice";
import watched from "./store/watched";

export default configureStore({
  reducer: {
    user: user.reducer,
    shoes: shoes.reducer,
    watched: watched.reducer,
  },
});
