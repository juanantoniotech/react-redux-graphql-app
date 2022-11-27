import { ThunkAction } from "redux-thunk";
import { configureStore, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userSlice } from "./slices/user";
import { charsSlice } from "./slices/chars";
import logger from "redux-logger";

export interface IRootState {
  user: any;
  chars: any;
}

const rootReducer: IRootState = {
  user: userSlice.reducer,
  chars: charsSlice.reducer,
};
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    chars: charsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
