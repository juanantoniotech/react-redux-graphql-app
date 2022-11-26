import { IState, TAction, EActionType } from "./models";

const initialData: IState = {
  loading: false,
  characters: [],
  error: null,
};

export default function reducer(state: IState = initialData, action: TAction) {
  switch (action.type) {
    case EActionType.GET_CHARACTERS_PENDING: {
      return { ...state, loading: true };
    }
    case EActionType.GET_CHARACTERS_SUCCESS: {
      return { ...state, loading: false, characters: action.payload };
    }
    case EActionType.GET_CHARACTERS_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
}
