import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartCollectionState } from "../types/ICartCollectionState";
import { ICartItem } from "../types/ICartItem";

export const defaultState: ICartCollectionState = {
  totalPrice: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addCartItem(
      state: ICartCollectionState,
      action: PayloadAction<ICartItem>
    ): void {
      const item = state.cartItems.find((i) => i.id === action.payload.id);

      item
        ? (item.count += 1)
        : state.cartItems.push({
            ...action.payload,
            count: 1,
          });
    },
    removeCartItem(
      state: ICartCollectionState,
      action: PayloadAction<ICartItem>
    ): void {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        item.count -= 1;
      }
    },
    removeCartPosition(
      state: ICartCollectionState,
      action: PayloadAction<ICartItem>
    ): void {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload.id
      );
    },
    clearCart(state: ICartCollectionState) {
      state = defaultState;
    },
  },
});

// const { removeCartItem, addCartItem, clearCart, removeCartPosition } =
//   cartSlice.actions;

export const cartCollectionActions = cartSlice.actions;

export const cartCollection = cartSlice.reducer;
