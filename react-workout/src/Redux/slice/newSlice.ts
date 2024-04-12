import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  count: number;
}

const initialState: InitialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrementCount: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

export const { incrementCount, decrementCount } = countSlice.actions;

export default countSlice.reducer;
