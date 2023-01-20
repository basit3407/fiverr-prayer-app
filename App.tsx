import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import format from "date-fns/format";
import { Image, StyleSheet, View } from "react-native";
import { verticalScale } from "./lib/scaling";
import defaultTheme, {
  EnglishFontBold,
  EnglishFontRegular,
} from "./styles/theme";
import { WhiteBody, WhiteTitle } from "./src/components/UI/Text";
import { Ellipse } from "./src/components/UI/svg";
import getHijriDate from "./src/util/Hijri";
import SalahTime from "./src/components/App/SalahTime";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

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
        <View>
          <SalahTime time="05:46 Am" salah="Fajr" />
          <SalahTime time="05:46 Am" salah="Sunrise" />
          <SalahTime time="05:46 Am" salah="Dhuhr" />
          <SalahTime is_current_prayer time="05:46 Am" salah="Asr" />
          <SalahTime time="05:46 Am" salah="Maghrib" />
          <SalahTime time="05:46 Am" salah="Isha" />
          <SalahTime time="05:46 Am" salah="Midnight" />
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
});
