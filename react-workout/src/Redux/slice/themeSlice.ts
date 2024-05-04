// file to create a slice for theme slice

import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  theme: string;
}

const initialState: InitialState = {
  theme: "light",
};

const themeSlice = createSlice({
  initialState,
  name: "theme",
  reducers: {
    toggle: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
