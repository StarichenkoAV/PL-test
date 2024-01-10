import { FC } from "react";
import css from "./Item.module.scss";
import { IItem } from "../../../../types/IItem";
import { ECategoty } from "../../../../types/ECategoty";
import { Button } from "../../Button";

interface IItemProps {
  item: IItem;
}

 export const Item: FC<IItemProps> = ({item}) => {

  const { title, imageUrl, price, category } = item;

  return (
    <div className={css.component}>
      <img className={css.image} src={imageUrl} alt={title} />
      <span className={css.title}>{title}</span>
      <div className={css.bottomBlock}>
        <span className={css.price}>{price} P.</span>
        <Button>Добавить</Button>
      </div>
    </div>
  );
};
