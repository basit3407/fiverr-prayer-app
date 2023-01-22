import { combineReducers } from "redux";
import location_reducer from "./location";
import timesReducer from "./times";

const rootReducer = combineReducers({
  times: timesReducer,
  location: location_reducer,
});

export default rootReducer;
