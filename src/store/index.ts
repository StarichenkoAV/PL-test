import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { mainCollection, mainCollectionSaga } from "./mainSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    mainCollection,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(mainCollectionSaga);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type StoreStateType = ReturnType<typeof store.getState>;

export default store;
