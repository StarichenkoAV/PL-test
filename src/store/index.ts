import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import mainSlice from "./mainSlice";

const store = configureStore({
  reducer: {
    main: mainSlice
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export type StoreStateType = ReturnType<typeof store.getState>;

export default store;