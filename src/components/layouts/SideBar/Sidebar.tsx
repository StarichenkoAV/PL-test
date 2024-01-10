import { FC, ReactNode } from "react";
import css from "./Sidebar.module.scss";

interface ISidebarProps {
  children: ReactNode;
}

export const Sidebar: FC<ISidebarProps> = ({ children }) => {
  return <div className={css.component}>{children}</div>;
};
