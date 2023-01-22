/* eslint-disable react-native/no-inline-styles */
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { scale } from "../../../lib/scaling";
import defaultTheme from "../../../styles/theme";
import { Volume, VolumeOff } from "../UI/svg";
import { WhiteBodyLarge } from "../UI/Text";

type salahName =
  | "fajr"
  | "sunrise"
  | "dhuhr"
  | "asr"
  | "maghrib"
  | "isha"
  | "Midnight"
  | "Last third of the night";

type Props = {
  salah: salahName;

  is_current_prayer: boolean;
  time: string;
};

const SalahTime: React.FC<Props> = (props) => {
  const [show_notification, set_show_notification] = useState(true);

  const onPressVolume = () => {
    set_show_notification((prev) => !prev);
    console.log("pressed");
  };

  return (
    <View
      style={[
        styles.container,
        { justifyContent: props.is_current_prayer ? "flex-start" : "center" },
      ]}
    >
      {props.is_current_prayer && <View style={styles.dot} />}
      <View style={styles.row_container}>
        <WhiteBodyLarge
          style={props.salah != "Last third of the night" && styles.salahName}
        >
          {props.salah}
        </WhiteBodyLarge>
        <View style={styles.right_row}>
          <WhiteBodyLarge style={styles.time}>{props.time}</WhiteBodyLarge>
          <TouchableOpacity onPress={onPressVolume}>
            {show_notification ? <Volume /> : <VolumeOff />}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SalahTime;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  row_container: {
    aspectRatio: 295 / 56,
    width: scale(295),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "rgba(255,255,255,0.2)",
    borderBottomWidth: 1,
  },
  right_row: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    marginRight: scale(16),
  },
  dot: {
    aspectRatio: 1,
    width: scale(6),
    backgroundColor: defaultTheme.colors.secondary.background,
    marginRight: scale(16),
    marginLeft: scale(18),
    borderRadius: scale(3),
  },
  salahName: {
    textTransform: "capitalize",
  },
});
