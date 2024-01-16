import { FC } from "react";
import { ICartItem } from "../../../../types/ICartItem";
import { Icon } from "../../Icon";
import { cartCollectionActions } from "../../../../store/cartCollection";
import { useAppDispatch } from "../../../../store";
import css from "./CartItem.module.scss";

export interface ICartItemProps {
  cartItem: ICartItem;
  isCartHeadTitle?: boolean;
}

export const CartItem: FC<ICartItemProps> = ({ cartItem, isCartHeadTitle = false }) => {

  const { removeCartPosition } = cartCollectionActions;
  const dispatch = useAppDispatch();

  const { title, count, price } = cartItem;
  const itemName = isCartHeadTitle ? "Название" : title
  const countTitle = isCartHeadTitle ? "Количество" : `${count} шт.`;
  const priceTitle = isCartHeadTitle ? "Цена за шт." : `${price} р.`;

  const onDeletePosition = (): void => {
      dispatch(removeCartPosition(cartItem))
  }

  return (
    <div className={css.component}>
      <p style={{ justifySelf: "flex-start" }}>{itemName}</p>
      <p>{countTitle}</p>
      <p >{priceTitle}</p>
      {!isCartHeadTitle && <div onClick={onDeletePosition} style={{cursor:"pointer"}} title="Удалить товар из корзины">
        <Icon name="close" />
      </div>}
    </div>
  );
};
