import axios from "axios";
import { endpoint } from "../constants";
import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "./useAppSelector";
import { useDispatch } from "react-redux";
import { mainCollectionActions } from "../store/mainSlice";

export interface IuseItemsCollectionResult {
  countItems: number;
  onChangePage: (currentPage: number) => void;
  currentPage: number;
}

export const useItemsCollection = (): IuseItemsCollectionResult => {
  const [countItems, setCountItems] = useState<number>(0);
  const category = useAppSelector((state) => state.mainCollection.category);
  const currentPage = useAppSelector((state) => state.mainCollection.page);

  const dispatch = useDispatch()

  const { setPage } = mainCollectionActions;   

  const getItemsLength = useCallback(async () => {
    let response, error;

    try {
      const { data } = await axios.get(endpoint, {
        params: {
          category,
        },
      });
      response = data.length;
      setCountItems(response);
    } catch (err) {
      error = err;
    }

    return { response, error };
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
