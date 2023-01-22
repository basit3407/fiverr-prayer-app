import { StyleSheet, ViewStyle, TouchableOpacity } from "react-native";
import { scale } from "../../../lib/scaling";

type Props = {
  style?: ViewStyle;
  children: React.ReactNode;
  onPress: () => void;
};

const IconContainer: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={[styles.container, props.style]}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default IconContainer;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    aspectRatio: 1,
    width: scale(56),
    backgroundColor: "rgba(250,251,255,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
});
