import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import themeReducer from "../slice/themeSlice";
import taskReducer from "../slice/taskSlice";
import countReducer from "../slice/newSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({
  count: counterReducer,
  theme: themeReducer,
  task: taskReducer,
  counter: countReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// exporting the persist store
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
