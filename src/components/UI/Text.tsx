import { StyleSheet, Text, TextProps } from "react-native";
import { moderateScale } from "../../../lib/scaling";
// import { moderateScale } from "../../../lib/scaling";
import defaultTheme from "../../../styles/theme";

type Props = {
  children: React.ReactNode;
} & TextProps;

const WhiteTitle: React.FC<Props> = ({ children, ...otherProps }) => {
  return (
    <Text
      style={[styles.title, styles.fontLarge, styles.white, otherProps.style]}
    >
      {children}
    </Text>
  );
};

const WhiteBody: React.FC<Props> = ({ children, ...otherProps }) => {
  return (
    <Text
      style={[styles.body, styles.fontSmall, styles.white, otherProps.style]}
    >
      {children}
    </Text>
  );
};

const WhiteBodyLarge: React.FC<Props> = ({ children, ...otherProps }) => {
  return (
    <Text
      style={[styles.body, styles.fontLarge, styles.white, otherProps.style]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: defaultTheme.typography.fontFamily.EnglishTitle,
  },
  body: {
    fontFamily: defaultTheme.typography.fontFamily.EnglishBody,
  },
  white: {
    color: defaultTheme.colors.secondary.background,
  },
  fontSmall: {
    fontSize: moderateScale(14),
  },
  fontLarge: {
    fontSize: moderateScale(17),
  },
});

export { WhiteTitle, WhiteBody, WhiteBodyLarge };
