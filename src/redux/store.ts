import { combineReducers, compose, applyMiddleware } from "redux";
import userReducer from "./userDuck";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// const enhancer = compose(applyMiddleware(thunk), DevTools.instrument());
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const devToolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const rootReducer = () => ({
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  //   enhancers: [composeEnhancers],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
