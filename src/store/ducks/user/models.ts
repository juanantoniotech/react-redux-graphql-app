// State
export interface IState {
  loggedIn: boolean;
  user: any;
}

// Action constant names
export enum EActionType {
  LOGIN = "LOGIN",
}

// Actions
interface IActionLogin {
  type: EActionType.LOGIN;
  payload: any;
}

export type TAction = IActionLogin;
