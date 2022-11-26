import { EActionType, TAction } from "./models";
import { Dispatch } from "redux";
import axiosClient from "../../../clients/axios";
export const getCharactersAction = (
  dispatch: Dispatch<TAction>,
  getState: any
) => {
  dispatch({
    type: EActionType.GET_CHARACTERS_PENDING,
  });

  /**
   * dispatch y getState son parte del store
   * siempre recibe estas dos funciones
   */
  return axiosClient
    .get("/people")
    .then((res: any) => {
      dispatch({
        type: EActionType.GET_CHARACTERS_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err: any) => {
      dispatch({
        type: EActionType.GET_CHARACTERS_FAIL,
        payload: err.message,
      });
    });
};
