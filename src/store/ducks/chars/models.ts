// State
export interface IState {
  loading: boolean;
  characters: any[];
  error: string | null;
}

// Action constant names
export enum EActionType {
  GET_CHARACTERS_PENDING = "GET_CHARACTERS_PENDING",
  GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS",
  GET_CHARACTERS_FAIL = "GET_CHARACTERS_FAIL",
}

// Actions
interface IActionPending {
  type: EActionType.GET_CHARACTERS_PENDING;
}
interface IActionSuccess {
  type: EActionType.GET_CHARACTERS_SUCCESS;
  payload: any[];
}
interface IActionFail {
  type: EActionType.GET_CHARACTERS_FAIL;
  payload: string;
}

export type TAction = IActionPending | IActionSuccess | IActionFail;
