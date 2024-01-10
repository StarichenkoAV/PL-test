import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../common/Icon";
import css from "./Header.module.scss";

export const Header: FC = () => {
  const totalCount = 0;
  const [isShowCard, setIsShowCard] = useState<boolean>(false)

  return (
    <header className={css.component}>
      <Link to="/">
        <span className={css.home}>Home</span>
      </Link>
      <div onClick={(prev) => setIsShowCard(!prev)} className={css.cartButton}>
        <Icon width="25px" height="25px" name="cart" />
        {totalCount && <span>{totalCount}</span>}
      </div>
    </header>
  );
};
