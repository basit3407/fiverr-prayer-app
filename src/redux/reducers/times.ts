import { AnyAction } from "redux";
import {
  compulsoryPrayerTimes,
  prayerName,
  sunnahPrayerTimes,
} from "../../../types/times";
import {
  SET_CURRENT_PRAYER,
  SET_PRAYER_TIMES,
  SET_SUNNAH_TIMES,
} from "../constants";

type prayerTimesState = {
  compulsory: compulsoryPrayerTimes | undefined;
  sunnah: sunnahPrayerTimes | undefined;
  current: prayerName | undefined;
  // currentPrayerTime:Date | undefined
  // nextPrayer:prayerName | undefined
  // nextPrayerTime:prayerName | undefined
};

const initialState: prayerTimesState = {
  compulsory: undefined,
  sunnah: undefined,
  current: undefined,
};

const timesReducer = (
  state = initialState,
  action: AnyAction
): prayerTimesState => {
  switch (action.type) {
    case SET_PRAYER_TIMES:
      return {
        ...state,
        compulsory: action.payload,
      };

    case SET_SUNNAH_TIMES:
      return {
        ...state,
        sunnah: action.payload,
      };

    case SET_CURRENT_PRAYER:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};

export default timesReducer;
