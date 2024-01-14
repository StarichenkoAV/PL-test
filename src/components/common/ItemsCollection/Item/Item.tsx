import { FC } from "react";
import css from "./Item.module.scss";
import { IItem } from "../../../../types/IItem";
import { Button } from "../../Button";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { cartCollectionActions } from "../../../../store/cartCollection";
import { useAppDispatch } from "../../../../store";
import { ICartItem } from "../../../../types/ICartItem";
interface IItemProps {
  item: IItem;
}

 export const Item: FC<IItemProps> = ({item}) => {

  const { title, imageUrl, price, id } = item;
  const dispatch = useAppDispatch()
  const { addCartItem, removeCartItem } = cartCollectionActions

  const cartItem: ICartItem = {
      title,
      price,
      id,
      count: 0
  }

  const cartItems = useAppSelector((state) => state.cartCollection.cartItems)
  const addedCount = cartItems.find((i) => i.id === item.id)?.count

  const onAddItemCart = () => {
       dispatch(addCartItem(cartItem))
  }

  const onRemoveItemCart = () => {
      dispatch(removeCartItem(cartItem))
  }

  return (
    <div className={css.component}>
      <img className={css.image} src={imageUrl} alt={title} />
      <span className={css.title}>{title}</span>
      <div className={css.bottomBlock}>
        <span className={css.price}>{price} P.</span>
        <Button onClick={onAddItemCart}>+</Button>
        {addedCount ? addedCount : 0}
        <Button onClick={onRemoveItemCart}>-</Button>
      </div>
    </div>
  );
};
