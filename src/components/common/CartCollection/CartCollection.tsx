import { FC } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { cartCollectionActions } from "../../../store/cartCollection";
import { CartItem } from "./CartItem";
import { Button } from "../Button";
import { useAppDispatch } from "../../../store";

import css from "./CartCollection.module.scss";

export const CartsCollection: FC = () => {
  const cartItems = useAppSelector((state) => state.cartCollection.cartItems);
  const totallPrice = useAppSelector(
    (state) => state.cartCollection.totalPrice
  );
  const { clearCart } = cartCollectionActions;
  const dispatch = useAppDispatch();

  const isShowCardItems = cartItems.length === 0;
  const totallPriceTitle = `Итоговая цена: ${totallPrice} р.`;

  const onClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={css.component}>
      <span>Корзина</span>
      {isShowCardItems ? (
        <span className={css.empty}>Корзина пуста</span>
      ) : (
        <>
          <CartItem cartItem={cartItems[0]} isCartHeadTitle />
          {cartItems.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem.id} />
          ))}
        </>
      )}
      {!isShowCardItems && (
        <div className={css.bottomBlock}>
          <p>{totallPriceTitle}</p>
          <Button style={{width:"80%"}}  onClick={onClearCart} title="очистить корзину">
            Очистить корзину
          </Button>
        </div>
      )}
    </div>
  );
};
