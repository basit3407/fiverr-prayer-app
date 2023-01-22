/* eslint-disable @typescript-eslint/ban-ts-comment */
import format from "date-fns/format";
import { StyleSheet, ScrollView, View, Image } from "react-native";
import { scale, verticalScale } from "../../lib/scaling";
import defaultTheme from "../../styles/theme";
import { SalahTime } from "../components/App";
import { Ellipse, Location } from "../components/UI/svg";
import { WhiteBody, WhiteBodyLarge, WhiteTitle } from "../components/UI/Text";
import { useAppSelector } from "../redux/hooks";
import { getHijriDate } from "../util";

const salahNames = [
  "fajr",
  "sunrise",
  "dhuhr",
  "asr",
  "maghrib",
  "isha",
  "middleOfTheNight",
  "lastThirdOfTheNight",
] as const;

const HomeScreen: React.FC = () => {
  const prayer_times = useAppSelector((state) => state.times.compulsory),
    sunnah_times = useAppSelector((state) => state.times.sunnah),
    current_prayer = useAppSelector((state) => state.times.current),
    location = useAppSelector((state) => state.location),
    { country, city } = location;

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.text_container}>
          <WhiteTitle>{format(new Date(), "EEE, dd MMM")}</WhiteTitle>
          <WhiteBody>{getHijriDate(new Date(), 0)}</WhiteBody>
        </View>

        <View style={styles.ellipse}>
          <Ellipse />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {salahNames.map((item) => {
            const isSunnahPrayer =
              item === "lastThirdOfTheNight" || item === "middleOfTheNight";

            return (
              <SalahTime
                key={item}
                is_current_prayer={current_prayer === item}
                time={
                  isSunnahPrayer
                    ? //@ts-ignores
                      sunnah_times[item]
                    : //@ts-ignore
                      prayer_times[item]
                }
                salah={
                  isSunnahPrayer
                    ? item === "lastThirdOfTheNight"
                      ? "Last third of the night"
                      : "Midnight"
                    : item
                }
              />
            );
          })}
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
          source={require("../../assets/images/SalahSchedule.png")}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: defaultTheme.colors.primary.default,
    paddingTop: verticalScale(56),
    paddingBottom: verticalScale(35),
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
