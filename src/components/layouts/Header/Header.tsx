import { FC } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../common/Icon";
import css from "./Header.module.scss";
interface IHeaderProps {
  onShowCard: () => void;
}

export const Header: FC<IHeaderProps> = ({onShowCard}) => {
  const totalCount = 0;

  return (
    <header className={css.component}>
      <Link to="/">
        <span className={css.home}>Home</span>
      </Link>
      <div onClick={onShowCard} className={css.cartButton}>
        <Icon width="25px" height="25px" name="cart" />
        {totalCount && <span>{totalCount}</span>}
      </div>
    </header>
  );
};
