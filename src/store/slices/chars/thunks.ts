import axiosClient from "../../../clients/axios";
import type { Dispatch } from "redux";
import { fetching, success, error } from "./slice";

export const getCharacters =
  (nextPage = null) =>
  async (dispatch: Dispatch, getState: any) => {
    dispatch(fetching());
    try {
      const url = nextPage ? nextPage : "/people";

      const response = await axiosClient.get(url);
      dispatch(success(response.data));
    } catch (err) {
      dispatch(error(err));
    }
  };
