import { CSSProperties, FC, HTMLAttributes, ReactNode } from "react";
import css from "./Button.module.scss";

export interface IButtonProp extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  style?: CSSProperties;
}

export const Button: FC<IButtonProp> = ({
  children = ``,
  onClick,
  style,
  ...rest
}) => {
  return (
    <button
      style={style}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        !!onClick && onClick(event);
      }}
      className={css.component}
      {...rest}
    >
      {children}
    </button>
  );
};
