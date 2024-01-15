import { FC } from "react";
import css from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

interface IPaginationProps {
  currentPage: number;
  onChangePage: (page: number) => void;
  countItems: number;
  limitItems?: number;
}

export const Pagination: FC<IPaginationProps> = ({
  currentPage,
  onChangePage,
  limitItems = 10,
  countItems,
}) => {

  const pageCount = Math.ceil(countItems / limitItems);

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
