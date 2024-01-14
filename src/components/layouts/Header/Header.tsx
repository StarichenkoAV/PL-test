import { FC } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../common/Icon";
import css from "./Header.module.scss";
import { useAppSelector } from "../../../hooks/useAppSelector";
interface IHeaderProps {
  onShowCard: () => void;
}

export const Header: FC<IHeaderProps> = ({onShowCard}) => {

  const cartItems = useAppSelector((state) => state.cartCollection.cartItems)
  const totalCount = cartItems.length;

  return (
    <header className={css.component}>
      <Link to="/">
        <span className={css.home}>Home</span>
      </Link>
      <div title="Товаров в корзине" onClick={onShowCard} className={css.cartButton}>
        <Icon width="25px" height="25px" name="cart" />
        {totalCount && <span>{totalCount}</span>}
      </div>
    </header>
  );
};
