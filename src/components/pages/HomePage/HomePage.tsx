import { FC } from "react";
import css from "./HomePage.module.scss";
import { ItemsCollection } from "../../common/ItemsCollection";

export const HomePage: FC = () => {

  return (
    <div className={css.component}>
      <ItemsCollection />
    </div>
  );
};
