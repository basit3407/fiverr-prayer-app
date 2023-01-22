import { AnyAction } from "redux";
import { SET_LOCATION } from "../constants";

type location_state = {
  city: string;
  country: string;
};

const initial_state: location_state = {
  city: "",
  country: "",
};

const location_reducer = (
  state = initial_state,
  action: AnyAction
): location_state => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        city: action.payload.city,
        country: action.payload.country,
      };
    default:
      return state;
  }
};

export default location_reducer;
