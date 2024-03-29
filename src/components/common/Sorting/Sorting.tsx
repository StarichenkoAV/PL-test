import cn from "classnames";
import { FC, useState } from "react";
import { Button } from "../Button";
import { EOrder, ESortBy } from "../../../types/ESort";
import { useDispatch } from "react-redux";
import { itemsCollectionActions } from "../../../store/itemsCollection";
import { ECategory } from "../../../types/ECategory";
import { SelectReact } from "../SelectReact";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { Icon } from "../Icon";

import css from "./Sorting.module.scss";

export const Sorting: FC = () => {
  const dispatch = useDispatch();

  const currentSort = useAppSelector((state) => state.itemsCollection.sortBy);
  const currentOrder = useAppSelector((state) => state.itemsCollection.order);
  const currentCategory = useAppSelector(
    (state) => state.itemsCollection.category
  );

  const [sortByValue, setSortByValue] = useState<string>(currentSort);
  const [sortOrderValue, setSortOrderValue] = useState<string>(currentOrder);
  const [isDesc, setIsDesc] = useState<boolean>(sortOrderValue === EOrder.DESC);

  const { setCategory, setSortBy, setOrder, setPage, clearFilters } =
    itemsCollectionActions;

  const tabs = [
    { title: "Все товары", value: ECategory.ALL },
    { title: "Еда", value: ECategory.FOOD },
    { title: "Одежда", value: ECategory.CLOTHING },
    {
      title: "Электроника",
      value: ECategory.ELECTRONICS,
    },
  ];

  const sortOptions = [
    {
      label: "Цене",
      value: ESortBy.PRICE,
    },
    {
      label: "Алфавиту",
      value: ESortBy.TITLE,
    },
  ];

  const onChangeCategoty = (value: ECategory): void => {
    dispatch(setCategory(value));
    dispatch(setPage(1));
  };

  const valueSortForSelect = sortOptions.find((o) => o.value === sortByValue);

  const onChangeSortBy = (v: any): void => {
    dispatch(setSortBy(v.value));
    setSortByValue(v.value);
  };

  const onChangeOrder = (): void => {
    const changedOrder =
      sortOrderValue === EOrder.DESC ? EOrder.ASC : EOrder.DESC;
    setIsDesc((prev) => !prev);
    setSortOrderValue(changedOrder);
    dispatch(setOrder(changedOrder));
  };

  const onClearFilters = (): void => {
    dispatch(clearFilters());
  };

  return (
    <div className={css.component}>
      <div className={css.tabs}>
        {tabs.map((tab) => {
          const isActiveCategory = currentCategory === tab.value;
          return (
            <Button
              isActiveCategory={isActiveCategory}
              style={{ height: "50px", minWidth: "150px" }}
              key={tab.value}
              onClick={() => onChangeCategoty(tab.value)}
            >
              {tab.title}
            </Button>
          );
        })}
      </div>
      <div className={css.sortBlock}>
        <SelectReact
          value={valueSortForSelect}
          width="200px"
          options={sortOptions}
          onChange={(v) => onChangeSortBy(v)}
          label="Cортировать по"
        />
        <div
          onClick={onChangeOrder}
          title={isDesc ? "По убыванию" : "По возрастанию"}
          className={cn(css.orderIcon, { [css.isDesc]: isDesc })}
        >
          <Icon width="30px" height="30px" name="icon-up" />
        </div>
        <Button onClick={onClearFilters}>Сбросить фильтры</Button>
      </div>
    </div>
  );
};
