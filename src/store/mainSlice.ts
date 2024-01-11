import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as Api from "../api/mainApi";
import { ICollectionItemsState } from "../types/ICollectionItemsState";
import { IItem } from "../types/IItem";
import { call, put, takeLatest, all, select } from "redux-saga/effects";
import { IApiResponse } from "../types/IApiResponse";

const defaultState: ICollectionItemsState = {
  items: [],
  page: 1,
  isLoading: false,
};

export const mainSlice = createSlice({
  name: "items",
  initialState: defaultState,
  reducers: {
    setIsLoading(
      state: ICollectionItemsState,
      action: PayloadAction<boolean>
    ): void {
      state.isLoading = action.payload;
    },
    startLoad(state: ICollectionItemsState): void {
      state.isLoading = true;
    },
    stopLoad(state: ICollectionItemsState): void {
      state.isLoading = false;
    },
    setPage(state: ICollectionItemsState, action: PayloadAction<number>) {
       state.page = action.payload
    },
    loadItems(
      state: ICollectionItemsState,
      action: PayloadAction<Array<IItem>>
    ): void {
      const items = action.payload;
      state.items = items;
    },
  },
});

const { loadItems, setIsLoading, startLoad, stopLoad, setPage } = mainSlice.actions;

function* loadItemsRun() {
  console.log(`<=======1`);
  // yield put(startLoad());

  console.log(`<=======2`);

  const { response, error } = yield call(Api.getAllItems);
  // const { response, error }: IApiResponse<Array<IItem>> = yield getAllItems()
  if (error) {
    console.error(`Error: ${error}`);
  } else if (response) {   
    yield put(loadItems(response));
  }
  yield put(setIsLoading(false));
}

export function* mainCollectionSaga(): Generator {
  yield all([
    takeLatest(startLoad.type, loadItemsRun),
    takeLatest(setPage.type, loadItemsRun),
  ]);
}

export const mainCollectionActions = mainSlice.actions;

export const mainCollection = mainSlice.reducer;
