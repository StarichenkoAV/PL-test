import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as Api from "../api/mainApi";
import { IItemsCollectionFilter, IItemsCollectionState } from "../types/IItemsCollectionState";
import { IItem } from "../types/IItem";
import { call, put, takeLatest, all, select } from "redux-saga/effects";
import { EOrder, ESortBy } from "../types/ESort";
import { ECategory } from "../types/ECategory";
import { StoreStateType } from ".";
import { DEFAULT_PAGINATION_LIMIT } from "../constants";

const defaultState: IItemsCollectionState = {
  items: [],
  itemsCount: 0,
  sortBy: ESortBy.TITLE,
  order: EOrder.ASC,
  category: ECategory.ALL,
  page: 1,
  limit: DEFAULT_PAGINATION_LIMIT,
  isLoading: false,
};



export const itemsCollectionSlice = createSlice({
  name: "items",
  initialState: defaultState,
  reducers: {
    setIsLoading(
      state: IItemsCollectionState,
      action: PayloadAction<boolean>
    ): void {
      state.isLoading = action.payload;
    },
    startLoad(state: IItemsCollectionState): void {
      state.isLoading = true;
    },
    stopLoad(state: IItemsCollectionState): void {
      state.isLoading = false;
    },
    setPage(state: IItemsCollectionState, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setPageLimit(state: IItemsCollectionState, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setSortBy(state: IItemsCollectionState, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setOrder(state: IItemsCollectionState, action: PayloadAction<string>) {
      state.order = action.payload;
    },
    setCategory(
      state: IItemsCollectionState,
      action: PayloadAction<ECategory>
    ) {
      state.category = action.payload;
    },
    loadItems(
      state: IItemsCollectionState,
      action: PayloadAction<Array<IItem>>
    ): void {
      state.items = action.payload;
    },
    setItemsCount(
      state: IItemsCollectionState,
      action: PayloadAction<number>
    ): void {
      state.itemsCount = action.payload;
    },
  },
});

const {
  loadItems,
  setIsLoading,
  startLoad,
  stopLoad,
  setPage,
  setSortBy,
  setPageLimit,
  setCategory,
  setItemsCount,
  setOrder,
} = itemsCollectionSlice.actions;

function* loadItemsRun() {
  yield put(setIsLoading(true));

  const {
    limit,
    page,
    sortBy,
    order,
    category,
  }: IItemsCollectionState = yield select(
    (state: StoreStateType) => state.itemsCollection
  );

  const params: IItemsCollectionFilter = {
    limit,
    page,
    sortBy,
    order,
    category,
  };

  const { response, error } = yield call(Api.getItems, params);
  if (error) {
    alert(`Error: ${error}`);
    console.error(`Error: ${error}`);
  } else if (response) {
    yield put(loadItems(response));
  }

  yield put(stopLoad());
}

export function* itemsCollectionSaga(): Generator {
  yield all([
    takeLatest(startLoad.type, loadItemsRun),
    takeLatest(setPage.type, loadItemsRun),
    takeLatest(setPageLimit.type, loadItemsRun),
    takeLatest(setSortBy.type, loadItemsRun),
    takeLatest(setCategory.type, loadItemsRun),
    takeLatest(setItemsCount.type, loadItemsRun),
    takeLatest(setOrder.type, loadItemsRun),
  ]);
}

export const itemsCollectionActions = itemsCollectionSlice.actions;

export const itemsCollection = itemsCollectionSlice.reducer;
