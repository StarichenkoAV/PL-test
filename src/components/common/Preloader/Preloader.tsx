import { CSSProperties, FC } from "react";

import css from "./Preloader.module.scss";
import IconsSvg from "../../../assets/icons.svg";

interface PreloaderProps {
  iconSize?: string;
  size?: string;
  stroke?: string;
  fill?: string;
  style?: CSSProperties;
}

export const Preloader: FC<PreloaderProps> = ({
  iconSize = `51px`,
  size,
  stroke = `#bbb`,
  fill = `transparent`,
  style = {},
}: PreloaderProps) => {
  if (size) {
    style.width = size;
    style.height = size;
    style.minHeight = size;
  }

  return (
    <div
      className={css.component}
    >
      <svg
        className={css.rotationAnimation}
        fill={fill}
        stroke={stroke}
        width={iconSize}
        height={iconSize}
      >
        <use xlinkHref={`${IconsSvg}#icon-loader`} />
      </svg>
    </div>
  );
};
