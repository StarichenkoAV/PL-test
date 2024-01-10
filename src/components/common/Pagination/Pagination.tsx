import { FC } from "react";
import css from "./Pagination.module.scss";
// import { IItem } from "../../../types/IItem";
// import { Button } from "../Button";
import ReactPaginate from "react-paginate";

interface IPaginationProps {
  currentPage: number;
  onChangePage: (page: number) => void;
}

export const Pagination: FC<IPaginationProps> = ({
  currentPage,
  onChangePage,
}) => (
  <ReactPaginate
    className={css.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={currentPage - 1}
  />
);
