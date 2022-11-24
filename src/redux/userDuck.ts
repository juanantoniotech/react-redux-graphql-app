// constant
let initialData = {
  loggedIn: false,
};
const LOGIN = "LOGIN";

// reducer
export default function reducer(state: any = initialData, action: any) {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

// action (action creator)
