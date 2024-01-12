import axios from "axios";
import identity from "lodash/identity";
import pickBy from "lodash/pickBy";
import { endpoint } from "../constants";

export const getItems = async (params: any) => {
  let response, error;

  const { sortBy, category, page, order, limit } = params;
  try {
    const { data } = await axios.get(endpoint, {
      params: pickBy(
        {
          category,
          order,
          sortBy,
          page,
          limit,
        },
        identity
      ),
    });
    response = data;
  } catch (err) {
    error = err;
  }

  return { response, error };
};
