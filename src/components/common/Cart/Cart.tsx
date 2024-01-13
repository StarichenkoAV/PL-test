import { FC } from "react";

import css from "./Cart.module.scss";

export const Cart: FC = () => {
  return (
    <div className={css.component}>
      <p>Корзина</p>
      <div className={css.mainBlock}></div>
    </div>
  );
};
