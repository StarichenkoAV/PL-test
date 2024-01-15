import { FC, useState } from "react";
import { Header } from "../Header";
import { Sidebar } from "../SideBar";
import { Outlet } from "react-router-dom";

import css from "./MainLayout.module.scss";
import { CartsCollection } from "../../common/CartCollection";

export const MainLayout: FC = () => {
  const [isShowCart, setIsShowCart] = useState<boolean>(false);

  const onShowCard = (): void => {
    setIsShowCart((prev) => !prev);
  };

  return (
    <div className={css.component}>
      <Header onShowCard={onShowCard} />
      {isShowCart && (
        <Sidebar>
          <CartsCollection />
        </Sidebar>
      )}
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};
