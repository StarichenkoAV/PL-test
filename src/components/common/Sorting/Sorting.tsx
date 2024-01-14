import { FC, useEffect, useState } from "react";
import { Button } from "../Button";
// import { useNavigate } from "react-router-dom";
import { EOrder, ESortBy } from "../../../types/ESort";
import { useDispatch } from "react-redux";
import { itemsCollectionActions } from "../../../store/itemsCollection";
import { ECategory } from "../../../types/ECategory";
import { SelectReact } from "../SelectReact";

import css from "./Sorting.module.scss";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { SortButton } from "../SortButton";
import { Icon } from "../Icon";

export const Sorting: FC = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const currentSort = useAppSelector((state) => state.itemsCollection.sortBy)

  const [sortByValue, setSortByValue] = useState<string>(currentSort);
  const [sortOrderValue, setSortOrderValue] = useState<string>("")

  const { setCategory, setSortBy, setOrder } = itemsCollectionActions;

  const tabs = [
    { path: "/", title: "Все товары", value: ECategory.ALL },
    { path: "/food", title: "Еда", value: ECategory.FOOD },
    { path: "/clothing", title: "Одежда", value: ECategory.CLOTHING },
    {
      path: "/electronics",
      title: "Электроника",
      value: ECategory.ELECTRONICS,
    },
  ];

  const orderOptions = [
    {
      label: "Возрастанию",
      value: EOrder.ASC,
    },
    {
      label: "Убыванию",
      value: EOrder.DESC,
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

  const onChangeCategoty = (value: ECategory, path: string): void => {
    dispatch(setCategory(value));
    // navigate(path)
  };

  const onChangeSortBy = (v: any): void => {
    setSortByValue(v);
    dispatch(setSortBy(v.value));
    console.log(v);
  };

  useEffect(() => {
    
  }, [])

  const onChangeOrder = (v: any): void => {
    setSortOrderValue(v);
    dispatch(setOrder(v.value));
  }
 
  return (
    <div className={css.component}>
      <nav className={css.tabs}>
        {tabs.map((tab) => (
          <Button
            style={{ height: "50px", minWidth: "150px" }}
            key={tab.value}
            onClick={() => onChangeCategoty(tab.value, tab.path)}
          >
            {tab.title}
          </Button>
        ))}
      </nav>
      <SelectReact
        value={sortByValue}
        width="200px"
        options={sortOptions}
        onChange={(v) => setSortByValue(v)}
        label="Cортировать по"
      />
      {/* <Icon name="arrow-down" />
      <SortButton isDesc onClick={() => {}} /> */}
    </div>
  );
};
