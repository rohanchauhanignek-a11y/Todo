
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./taskSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export const AppDispatch = store.dispatch; 
export default store;