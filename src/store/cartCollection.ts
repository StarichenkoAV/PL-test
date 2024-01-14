import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartCollectionState } from "../types/ICartCollectionState";
import { ICartItem } from "../types/ICartItem";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { StoreStateType } from ".";
import { calcTotalPrice } from "../utils/calcTotalPrice";

export const defaultState: ICartCollectionState = {
  totalPrice: 0,
  cartItems: [],
};

const getCartFromLocalStorage = (): ICartCollectionState => {
  const cartJson = localStorage.getItem("cart");
  const cartItems: Array<ICartItem> = cartJson ? JSON.parse(cartJson) : [];
  const totalPrice = cartItems.reduce((sum, i) => i.price * i.count + sum, 0);

  const currentCart = {
    totalPrice,
    cartItems,
  };

  return currentCart;
};

const initialState = getCartFromLocalStorage();

export const cartCollectionSlice = createSlice({
  name: "cart",
  initialState: initialState,
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
      state.cartItems = []
      state.totalPrice = 0;
    },
  },
});

// function* setLS() {
//   yield console.log("Я РАБОТАЮ");
//   // localStorage.setItem("cart", JSON.stringify(items));
// };

// const { removeCartItem, removeCartPosition, addCartItem, clearCart } =
//   cartCollectionSlice.actions;

// function* loadCartLocalStorage() {
//   const cartItems: Array<ICartItem> = yield select(
//     (state: StoreStateType) => state.cartCollection
//   );

//   return put(setLS)
// }

// export const calcTotalPrice = (items: any) => {
//   return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
// };

export function* cartCollectionSaga(): Generator {
  yield all([
    // takeLatest(addCartItem.type, loadCartLocalStorage),
    // takeLatest(removeCartItem.type, loadCartLocalStorage),
    // takeLatest(removeCartPosition.type, loadCartLocalStorage),
    // takeLatest(clearCart.type, loadCartLocalStorage),
  ]);
}

export const cartCollectionActions = cartCollectionSlice.actions;

export const cartCollection = cartCollectionSlice.reducer;
