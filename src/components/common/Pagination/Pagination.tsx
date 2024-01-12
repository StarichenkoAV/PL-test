import { FC } from "react";
import css from "./Pagination.module.scss";
// import { IItem } from "../../../types/IItem";
import ReactPaginate from "react-paginate";
import { useAppSelector } from "../../../hooks/useAppSelector";

interface IPaginationProps {
  currentPage: number;
  onChangePage: (page: number) => void;
  itemsCount?: number;
}

export const Pagination: FC<IPaginationProps> = ({
  currentPage,
  onChangePage,
  itemsCount = 10,
}) => {
  const items = useAppSelector((state) => state.mainCollection.items);

  console.log(items.length, `555`);

  const pageCount = Math.ceil(items.length / itemsCount);

  return (
    <ReactPaginate
      className={css.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      forcePage={currentPage - 1}
    />
  );
};
