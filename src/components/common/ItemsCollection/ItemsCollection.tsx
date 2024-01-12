import { FC } from "react";
import { Item } from "./Item";

import css from "./ItemsCollection.module.scss";
import { Pagination } from "../Pagination";
import { useAppSelector } from "../../../hooks/useAppSelector";

export const ItemsCollection: FC = () => {

const items = useAppSelector(state => state.mainCollection.items)

  return (
    <div className={css.component}>
      <div className={css.content}>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
      {/* <Pagination currentPage={1} onChangePage={() => {}}/> */}
    </div>
  );
};
