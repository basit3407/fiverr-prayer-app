import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
};

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
