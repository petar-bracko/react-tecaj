import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Counter = {
  value: number;
};

const initCounterState: Counter = {
  value: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: { ...initCounterState },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    resetState: () => ({ ...initCounterState }),
  },
});

// Action creators are generated for each case reducer function
export const { decrement, increment, incrementByAmount, resetState } =
  counterSlice.actions;

export default counterSlice.reducer;
