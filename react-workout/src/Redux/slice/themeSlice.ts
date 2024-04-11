import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  theme: string;
}

const initialState: InitialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "themeSelector",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
