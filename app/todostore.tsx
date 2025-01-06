import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslice";

export const todostore = configureStore({
    reducer:{
        todo: todoReducer,
    }
});

export type RootState = ReturnType<typeof todostore.getState>
export type AppDispatch = typeof todostore.dispatch
