import { IState, EActionType, TAction } from "./models";

let initialData: IState = {
  loggedIn: false,
  user: null,
};

export default function reducer(
  state: IState = initialData,
  action: TAction
): IState {
  switch (action.type) {
    case EActionType.LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
