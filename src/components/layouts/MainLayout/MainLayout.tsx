import { FC } from "react";
import css from "./MainLayout.module.scss";
import { Header } from "../Header";
import { Sidebar } from "../SideBar";
import { Outlet } from "react-router-dom";

export const Cart: FC = () => {
  return <div className={css.component}></div>;
};

export const MainLayout: FC = () => {
  return (
    <div className={css.component}>
      <Header />
      {/* <Sidebar>
        <Cart />
      </Sidebar> */}
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};
