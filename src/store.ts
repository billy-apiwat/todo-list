import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";
import RootReducer from "./reducer";

export const store = configureStore({
  reducer: {
    data: RootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
