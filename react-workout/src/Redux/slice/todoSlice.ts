import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  tasks: string[];
}

const initialState: State = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action: PayloadAction<string>) => {
      state.tasks.push(action.payload);
    },
    deleteTasks: (state, action: PayloadAction<number>) => {
      state.tasks.splice(action.payload, 1);
    },
  },
});

export const { addTasks, deleteTasks } = taskSlice.actions;

export default taskSlice.reducer;
