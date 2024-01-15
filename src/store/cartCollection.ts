import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartCollectionState } from "../types/ICartCollectionState";
import { ICartItem } from "../types/ICartItem";
import { calcTotalPrice } from "../utils/calcTotalPrice";

export const defaultState: ICartCollectionState = {
  totalPrice: 0,
  cartItems: [],
};

export const cartCollectionSlice = createSlice({
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

          state.totalPrice = calcTotalPrice(state.cartItems)
    },
    removeCartItem(
      state: ICartCollectionState,
      action: PayloadAction<ICartItem>
    ): void {
      const cartItems = state.cartItems;
      const item = cartItems.find((i) => i.id === action.payload.id);
      if (item && item.count > 1) {
        item.count -= 1;
      } else if (item && item.count === 1) {
        state.cartItems = cartItems.filter((i) => i.id !== item.id);
      }

      state.totalPrice = calcTotalPrice(state.cartItems)

    },
    removeCartPosition(
      state: ICartCollectionState,
      action: PayloadAction<ICartItem>
    ): void {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload.id
      );

      state.totalPrice = calcTotalPrice(state.cartItems)
    },
    clearCart(state: ICartCollectionState) {
      state.cartItems = []
      state.totalPrice = 0;
    },
  },
});

export const cartCollectionActions = cartCollectionSlice.actions;

export const cartCollection = cartCollectionSlice.reducer;
