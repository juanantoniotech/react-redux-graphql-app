import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserModel {
  name: string;
}
interface UserState {
  loggedIn: boolean;
  user: UserModel | null;
}

const initialState: UserState = {
  loggedIn: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<UserModel>) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
  },
});

// Los actions creators se generan por cada función reductora
export const { login } = userSlice.actions;
