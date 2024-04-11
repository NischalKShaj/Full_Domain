import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  theme: string;
}

const initialState: InitialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
