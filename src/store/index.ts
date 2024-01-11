import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { mainCollection, mainCollectionSaga } from "./mainSlice";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    mainCollection,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

function* rootSaga(): Generator {
  yield all([
    mainCollectionSaga()
  ]);
   yield console.log(`Я работаю`);
}

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type StoreStateType = ReturnType<typeof store.getState>;

export default store;
