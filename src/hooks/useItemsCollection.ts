import axios from "axios";
import { endpoint } from "../constants";
import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "./useAppSelector";
import { useDispatch } from "react-redux";
import { itemsCollectionActions } from "../store/itemsCollection";
export interface IuseItemsCollectionResult {
  countItems: number;
  onChangePage: (currentPage: number) => void;
  currentPage: number;
}

export const useItemsCollection = (): IuseItemsCollectionResult => {
  const [countItems, setCountItems] = useState<number>(0);
  const category = useAppSelector((state) => state.itemsCollection.category);
  const currentPage = useAppSelector((state) => state.itemsCollection.page);

  const dispatch = useDispatch()

  const { setPage } = itemsCollectionActions;   

  const getItemsLength = useCallback(async () => {
    try {
      const { data } = await axios.get(endpoint, {
        params: {
          category,
        },
      });
      setCountItems(data.length);
    } catch (err) {
      alert(`Error: ${err}`)
      console.error(`Error: ${err}`)
    }

  }, [category]);

  const onChangePage = (currentPage: number) => {
    dispatch(setPage(currentPage));
  };

  useEffect(() => {
    getItemsLength();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return { countItems, onChangePage, currentPage };
};
