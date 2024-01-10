import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as Api from "../api/mainApi";
import { IItem } from "../types/IItem";

export interface IItems {
  allItems: Array<IItem>
}

const defaultState: IItems = {
    allItems: [],
};

export const getAllItems = createAsyncThunk("items/all", async () => {
  const allItems = await Api.getAllItems();
  return allItems;
});

export const mainSlice = createSlice({
  name: "items",
  initialState: defaultState,
  reducers: {
    setItems(state, action ) {
      state.allItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllItems.fulfilled, (state, action) => {
        const allitems = action.payload;
        state.allItems = allitems;
        console.log(state.allItems);
    });
  },
});

// export const actions = mainSlice.actions

export default mainSlice.reducer
