import { FC } from "react";
import { Item } from "./Item";
import { Sorting } from "../Sorting";
import { Pagination } from "../Pagination";
import { useAppSelector } from "../../../hooks/useAppSelector";

import css from "./ItemsCollection.module.scss";
import { useAppDispatch } from "../../../store";
import { mainCollectionActions } from "../../../store/mainSlice";
import { Preloader } from "../Preloader";
import { useItemsCollection } from "../../../hooks/useItemsCollection";

export const ItemsCollection: FC = () => {

  const items = useAppSelector((state) => state.mainCollection.items);
  const isLoading = useAppSelector((state) => state.mainCollection.isLoading);
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
