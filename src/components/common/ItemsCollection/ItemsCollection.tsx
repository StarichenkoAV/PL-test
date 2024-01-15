import { FC } from "react";
import { Item } from "./Item";
import { Sorting } from "../Sorting";
import { Pagination } from "../Pagination";
import { Preloader } from "../Preloader";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useItemsCollection } from "../../../hooks/useItemsCollection";

import css from "./ItemsCollection.module.scss";

export const ItemsCollection: FC = () => {

  const items = useAppSelector((state) => state.itemsCollection.items);
  const isLoading = useAppSelector((state) => state.itemsCollection.isLoading);
  const { countItems, onChangePage, currentPage } = useItemsCollection();

  return isLoading ? (
    <Preloader />
  ) : (
    <div className={css.component}>
      <Sorting />
      <div className={css.content}>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
      <Pagination countItems={countItems} currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
