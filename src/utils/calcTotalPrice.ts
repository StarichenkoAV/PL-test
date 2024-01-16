import { ICartItem } from '../types/ICartItem';

export const calcTotalPrice = (cartItems: ICartItem[]) => {
  return cartItems.reduce((sum, item) => item.price * item.count + sum, 0);
};
