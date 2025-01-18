import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    initialValue: 0,
  },
  reducers: {
    incrementByOne(state) {
      state.initialValue++;
    },
    increment(state, action) {
      state.initialValue += action.payload;
    },
    decrementByOne(state) {
      state.initialValue--;
    },
  },
});

export const { incrementByOne, increment, decrementByOne } =
  counterSlice.actions;

export default counterSlice.reducer;
