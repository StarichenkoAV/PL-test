import { FC } from "react";
import { Item } from "./Item";

import css from "./CollectionItems.module.scss";
import { Pagination } from "../Pagination";
import { useAppSelector } from "../../../hooks/useAppSelector";

export const CollectionItems: FC = () => {

const items = useAppSelector(state => state.main.allItems)

console.log(JSON.stringify(`${items}`));

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
