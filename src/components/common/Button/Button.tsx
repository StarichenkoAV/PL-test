import { CSSProperties, FC, HTMLAttributes, ReactNode } from "react";
import css from "./Button.module.scss";
import cn from "classnames";

export interface IButtonProp extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  style?: CSSProperties;
  isActiveCategory?: boolean
}

export const Button: FC<IButtonProp> = ({
  children = ``,
  onClick,
  style,
  isActiveCategory = false,
  ...rest
}) => {
  return (
    <button
      disabled={isActiveCategory}
      style={style}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        !!onClick && onClick(event);
      }}
      className={cn(css.component, {[css.isActiveCategory]:isActiveCategory })}
      {...rest}
    >
      {children}
    </button>
  );
};
