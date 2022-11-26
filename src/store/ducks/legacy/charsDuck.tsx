import axios from "axios";
import { Dispatch } from "redux";

// Types and interfaces
interface State {
  loading: boolean;
  characters: any[];
  error: string | null;
}

enum ActionType {
  GET_CHARACTERS_PENDING = "GET_CHARACTERS_PENDING",
  GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS",
  GET_CHARACTERS_FAIL = "GET_CHARACTERS_FAIL",
}

interface actionPending {
  type: ActionType.GET_CHARACTERS_PENDING;
}
interface actionSuccess {
  type: ActionType.GET_CHARACTERS_SUCCESS;
  payload: any[];
}
interface actionFail {
  type: ActionType.GET_CHARACTERS_FAIL;
  payload: string;
}

type Action = actionPending | actionSuccess | actionFail;

// Constants
const initialData: State = {
  loading: false,
  characters: [],
  error: null,
};

const URL = "https://rickandmortyapi.com/api/character/";

// Reducers
export default function reducer(
  state: State = initialData,
  action: Action
): State {
  switch (action.type) {
    case ActionType.GET_CHARACTERS_PENDING: {
      return { ...state, loading: true };
    }
    case ActionType.GET_CHARACTERS_SUCCESS: {
      return { ...state, loading: false, characters: action.payload };
    }
    case ActionType.GET_CHARACTERS_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
}

// actions (thunks)
export const getCharactersAction = (
  dispatch: Dispatch<Action>,
  getState: any
) => {
  dispatch({
    type: ActionType.GET_CHARACTERS_PENDING,
  });

  /**
   * dispatch y getState son parte del store
   * siempre recibe estas dos funciones
   */
  return axios
    .get(URL)
    .then((res) => {
      dispatch({
        type: ActionType.GET_CHARACTERS_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionType.GET_CHARACTERS_FAIL,
        payload: err.message,
      });
    });
};
