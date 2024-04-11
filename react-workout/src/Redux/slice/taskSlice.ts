import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CreateTask {
  task: string[];
}

const initialState: CreateTask = {
  task: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.task.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.task.splice(action.payload, 1);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
