import { Action, AnyAction } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
import rootReducer from "./reducers";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type ThunkAction<
  R, // Return type of the thunk function
  S, // state type used by getState
  E, // any "extra argument" injected into the thunk
  A extends Action // known types of actions that can be dispatched
> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  extraArgument: E
) => R;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

//if issue comes check api for configure store and apply deafut middlewares api
const store = configureStore({ reducer: rootReducer });

export default store;
