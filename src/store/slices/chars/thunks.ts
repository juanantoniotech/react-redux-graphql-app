import axiosClient from "../../../clients/axios";
import { Dispatch } from "redux";
import { fetching, success } from "./slice";

export const getCharacters =
  () => async (dispatch: Dispatch, getState: any) => {
    dispatch(fetching());

    try {
      const response = await axiosClient.get("/people");
      dispatch(success(response.data));
    } catch (error) {}
  };
