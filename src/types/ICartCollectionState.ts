import { ICartItem } from "./ICartItem";

export interface ICartCollectionState {
    totalPrice: number;
    cartItems: Array<ICartItem>
}


