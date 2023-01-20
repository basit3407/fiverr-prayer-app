import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import * as expoLocation from "expo-location";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import format from "date-fns/format";
import { Image, StyleSheet, View, ScrollView } from "react-native";
import { scale, verticalScale } from "./lib/scaling";
import defaultTheme, {
  EnglishFontBold,
  EnglishFontRegular,
} from "./styles/theme";
import {
  WhiteBody,
  WhiteBodyLarge,
  WhiteTitle,
} from "./src/components/UI/Text";
import { Ellipse, Location } from "./src/components/UI/svg";
import getHijriDate from "./src/util/Hijri";
import SalahTime from "./src/components/App/SalahTime";
import {
  Coordinates,
  CalculationMethod,
  PrayerTimes,
  SunnahTimes,
  Prayer,
  Qibla,
} from "adhan";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [prayer_times, set_prayer_times] = useState<PrayerTimes>();
  const [sunnah_times, set_sunnah_times] = useState<SunnahTimes>();
  const [city, set_city] = useState<string | null>(null);
  const [country, set_country] = useState<string | null>(null);

  const [current_prayer, set_current_prayer] = useState<
    "none" | "fajr" | "sunrise" | "dhuhr" | "asr" | "maghrib" | "isha"
  >();

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

        set_city(city);
        set_country(country);

        set_prayer_times(prayerTimes);
        set_sunnah_times(sunnahTimes);

        const current = prayerTimes.currentPrayer();

        set_current_prayer(current);
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
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}

      <View style={styles.screen}>
        <View style={styles.text_container}>
          <WhiteTitle>{format(new Date(), "EEE, dd MMM")}</WhiteTitle>
          <WhiteBody>{getHijriDate(new Date(), 0)}</WhiteBody>
        </View>

        <View style={styles.ellipse}>
          <Ellipse />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SalahTime
            time={format(prayer_times?.fajr as Date, "hh:mm") + " AM"}
            salah="Fajr"
            is_current_prayer={current_prayer === "fajr"}
          />
          <SalahTime
            time={format(prayer_times?.sunrise, "hh:mm") + " AM"}
            is_current_prayer={current_prayer === "sunrise"}
            salah="Sunrise"
          />
          <SalahTime
            time={format(prayer_times?.dhuhr, "hh:mm") + " PM"}
            is_current_prayer={current_prayer === "dhuhr"}
            salah="Dhuhr"
          />
          <SalahTime
            is_current_prayer={current_prayer === "asr"}
            time={format(prayer_times?.asr, "hh:mm") + " AM"}
            salah="Asr"
          />
          <SalahTime
            time={format(prayer_times?.maghrib, "hh:mm") + " PM"}
            is_current_prayer={current_prayer === "maghrib"}
            salah="Maghrib"
          />
          <SalahTime
            time={format(prayer_times?.isha, "hh:mm") + " PM"}
            is_current_prayer={current_prayer === "isha"}
            salah="Isha"
          />
          <SalahTime
            time={format(sunnah_times?.middleOfTheNight, "hh:mm bb")}
            salah="Midnight"
            is_current_prayer={false}
          />
          <SalahTime
            time={format(sunnah_times?.lastThirdOfTheNight, "hh:mm bb")}
            salah="Last third of the night"
            is_current_prayer={false}
          />
        </ScrollView>
        <View style={styles.location_container}>
          <WhiteBodyLarge>{city}</WhiteBodyLarge>
          <View style={styles.location_row}>
            <WhiteBody style={styles.country}>{country}</WhiteBody>
            <Location />
          </View>
        </View>
      </View>
      <View pointerEvents="none">
        <Image
          style={styles.image}
          source={require("./assets/images/SalahSchedule.png")}
        />
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: defaultTheme.colors.primary.default,
    paddingTop: verticalScale(56),
    paddingBottom: verticalScale(35),

    // alignItems: "center",
  },
  text_container: {
    alignItems: "center",
  },
  ellipse: {
    marginTop: verticalScale(35),
    marginBottom: verticalScale(33),
  },
  image: {
    position: "absolute",
    bottom: 0,
  },
  location_container: {
    marginTop: verticalScale(32),
    alignItems: "center",
  },
  location_row: {
    flexDirection: "row",
    alignItems: "center",
  },
  country: {
    marginRight: scale(4),
  },
});
