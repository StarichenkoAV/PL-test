import { FC } from "react";
import css from "./Sorting.module.scss";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { EOrder } from "../../../types/ESort";
import { useDispatch } from "react-redux";
import { mainCollectionActions } from "../../../store/mainSlice";
import { ECategory } from "../../../types/ECategory";

export const Sorting: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { setCategory } = mainCollectionActions;

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

  const options = [
    {
      name: "Возрастанию",
      value: EOrder.ASC,
    },
    {
      name: "Убыванию",
      value: EOrder.DESC,
    },
  ];

  const onChangeCategoty = (value: ECategory, path: string) => {
    dispatch(setCategory(value));
    // navigate(path)
  };

  return (
    <div className={css.component}>
      <div className={css.tabs}>
        {tabs.map((tab) => (
          <Button onClick={() => onChangeCategoty(tab.value, tab.path)}>
            {tab.title}
          </Button>
        ))}
      </div>
      {/* <Select options={options} /> */}
    </div>
  );
};
