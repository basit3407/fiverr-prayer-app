import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import * as expoLocation from "expo-location";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { StyleSheet, View, Alert } from "react-native";
import { EnglishFontBold, EnglishFontRegular } from "./styles/theme";
import {
  Coordinates,
  CalculationMethod,
  PrayerTimes,
  SunnahTimes,
} from "adhan";
import { useAppDispatch } from "./src/redux/hooks";
import {
  SET_CURRENT_PRAYER,
  SET_LOCATION,
  SET_PRAYER_TIMES,
  SET_SUNNAH_TIMES,
} from "./src/redux/constants";
import * as Updates from "expo-updates";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Router from "./src/router";
import { compulsoryPrayerTimes, sunnahPrayerTimes } from "./types/times";
import format from "date-fns/format";

const timeFormat = "hh:mm aa";

const App: React.FC = () => {
  //For force updating when new new update is published via expo-updates
  useEffect(() => {
    (async () => {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          Alert.alert(
            "Update available",
            "A new update is available.Please Restart the app to apply the update.",
            [{ text: "OK", onPress: async () => await Updates.reloadAsync() }],
            { cancelable: false }
          );
        }
      } catch (e) {
        // handle or log error
      }
    })();
  }, []);

  return (
    <Provider store={store}>
      <SplashScreenProvider />
    </Provider>
  );
};

const SplashScreenProvider: React.FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const dispatch = useAppDispatch();

  //splash screen
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          [EnglishFontBold]: require("./assets/fonts/Sofia-Pro-Bold-Az.otf"),
          [EnglishFontRegular]: require("./assets/fonts/Sofia-Pro-Regular-Az.otf"),
        });

        const { status } =
          await expoLocation.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          return;
        }

        const location = await expoLocation.getCurrentPositionAsync({});

        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude;

        const string_location = await expoLocation.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        const city = string_location[0].city;
        const country = string_location[0].country;

        const coordinates = new Coordinates(latitude, longitude);
        const params = CalculationMethod.MuslimWorldLeague();
        const date = new Date();
        const prayerTimes = new PrayerTimes(coordinates, date, params);
        const sunnahTimes = new SunnahTimes(prayerTimes);

        dispatch({
          type: SET_LOCATION,
          payload: {
            city,
            country,
          },
        });

        const complusory_times: compulsoryPrayerTimes = {
          fajr: format(prayerTimes.fajr, timeFormat),
          dhuhr: format(prayerTimes.dhuhr, timeFormat),
          sunrise: format(prayerTimes.sunrise, timeFormat),
          asr: format(prayerTimes.asr, timeFormat),
          maghrib: format(prayerTimes.maghrib, timeFormat),
          isha: format(prayerTimes.isha, timeFormat),
        };

        const sunnah_times: sunnahPrayerTimes = {
          midnight: format(sunnahTimes.middleOfTheNight, timeFormat),
          lastThirdOfTheNight: format(
            sunnahTimes.lastThirdOfTheNight,
            timeFormat
          ),
        };

        dispatch({ type: SET_PRAYER_TIMES, payload: complusory_times });
        dispatch({ type: SET_SUNNAH_TIMES, payload: sunnah_times });

        const current = prayerTimes.currentPrayer();

        dispatch({ type: SET_CURRENT_PRAYER, payload: current });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.

      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.app}>
      <Router />
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
