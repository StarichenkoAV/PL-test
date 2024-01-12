import { FC } from "react";
import { Item } from "./Item";
import { Sorting } from "../Sorting";
import { Pagination } from "../Pagination";
import { useAppSelector } from "../../../hooks/useAppSelector";

import css from "./ItemsCollection.module.scss";

export const ItemsCollection: FC = () => {

const items = useAppSelector(state => state.mainCollection.items)

  return (
    <div className={css.component}>
      <Sorting />
      <div className={css.content}>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
      <Pagination currentPage={1} onChangePage={() => {}}/>
    </div>
  );
};
