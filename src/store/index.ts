import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { itemsCollection, itemsCollectionSaga } from "./itemsCollection";
import { cartCollection } from "./cartCollection";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    itemsCollection,
    cartCollection,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(itemsCollectionSaga);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type StoreStateType = ReturnType<typeof store.getState>;

export default store;
