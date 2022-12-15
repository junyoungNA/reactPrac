import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const axiosApi = (url, options) => {
  const intance = axios.create({ baseURL: url, ...options });
  return intance;
};
const defaultInstance = axiosApi(process.env.REACT_APP_REQ);

export const __getShoes = createAsyncThunk(
  "getShoes",
  async (payload, thunkAPI) => {
    try {
      const data = await defaultInstance.get();
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
