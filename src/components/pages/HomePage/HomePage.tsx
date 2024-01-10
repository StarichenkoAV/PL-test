import { FC } from "react";
import css from "./HomePage.module.scss";
import { CollectionItems } from "../../common/CollectionItems";

export const HomePage: FC = () => {

  return (
    <div className={css.component}>
      <CollectionItems />
    </div>
  );
};
