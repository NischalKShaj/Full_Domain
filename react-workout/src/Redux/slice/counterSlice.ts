import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

const counterSlices = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement } = counterSlices.actions;

export default counterSlices.reducer;
