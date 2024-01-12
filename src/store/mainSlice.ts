import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as Api from "../api/mainApi";
import { IItemsCollectionState } from "../types/IItemsCollectionState";
import { IItem } from "../types/IItem";
import { call, put, takeLatest, all, select } from "redux-saga/effects";
import { EOrder, ESortBy, ISort } from "../types/ESort";
import { ECategory } from "../types/ECategory";
import { StoreStateType } from ".";
import { DEFAULT_PAGINATION_LIMIT } from "../constants";

const defaultState: IItemsCollectionState = {
  items: [],
  itemsCount: 0,
  sort: {
    sortBy: ESortBy.TITLE,
    order: EOrder.ASC,
  },
  category: ECategory.ALL,
  page: 1,
  limit: DEFAULT_PAGINATION_LIMIT,
  isLoading: false,
};

export const mainSlice = createSlice({
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
    setSorting(state: IItemsCollectionState, action: PayloadAction<ISort>) {
      const { sortBy, order } = action.payload;
      state.sort.order = order;
      state.sort.sortBy = sortBy;
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
  setSorting,
  setPageLimit,
  setCategory,
  setItemsCount,
} = mainSlice.actions;

function* getItemsLength() {

  const { response, error } = yield call(Api.getItemsLength);
  if (error) {
    console.error(`Error: ${error}`);
  } else if (response) {
    yield put(setItemsCount(response));
  }
}

function* loadItemsRun() {
  yield put(setIsLoading(true));

  getItemsLength()

  const {
    limit,
    page,
    sort: { sortBy, order },
    category,
  }: IItemsCollectionState = yield select(
    (state: StoreStateType) => state.mainCollection
  );

  const params = {
    limit,
    page,
    sortBy,
    order,
    category,
  };

  const { response, error } = yield call(Api.getItems, params);
  // const { response, error }: IApiResponse<Array<IItem>> = yield getAllItems()
  if (error) {
    console.error(`Error: ${error}`);
  } else if (response) {
    yield put(loadItems(response));
  }

  yield put(stopLoad());
}



export function* mainCollectionSaga(): Generator {
  yield all([
    takeLatest(startLoad.type, loadItemsRun),
    takeLatest(setPage.type, loadItemsRun),
    takeLatest(setPageLimit.type, loadItemsRun),
    takeLatest(setSorting.type, loadItemsRun),
    takeLatest(setCategory.type, loadItemsRun),
    takeLatest(setItemsCount.type, loadItemsRun)
  ]);
}

export const mainCollectionActions = mainSlice.actions;

export const mainCollection = mainSlice.reducer;
