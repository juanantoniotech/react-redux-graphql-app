import axiosClient from "../../../clients/axios";
import type { Dispatch } from "redux";
import { fetching, success, error } from "./slice";

export const getCharacters =
  () => async (dispatch: Dispatch, getState: any) => {
    dispatch(fetching());
    try {
      const response = await axiosClient.get("/people");
      dispatch(success(response.data));
    } catch (err) {
      dispatch(error(err));
    }
  };
