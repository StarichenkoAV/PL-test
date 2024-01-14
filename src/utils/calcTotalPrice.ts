import { ICartItem } from '../types/ICartItem';

export const calcTotalPrice = (cartItems: ICartItem[]) => {
  return cartItems.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
