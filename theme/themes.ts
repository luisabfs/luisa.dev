import { colors } from './colors';

export const lightTheme = {
  PRIMARY_COLOR: colors.white,
  SECONDARY_COLOR: colors.lighGrey,
  ACCENT_COLOR: colors.blue,
  PRIMARY_TEXT_COLOR: colors.dark,
};

export const darkTheme = {
  PRIMARY_COLOR: colors.darkBackground,
  SECONDARY_COLOR: colors.gray,
  ACCENT_COLOR: colors.pink,
  PRIMARY_TEXT_COLOR: colors.primary,
};

export type ThemeType = {
  globalTheme: typeof lightTheme | typeof darkTheme,
  colors: typeof colors;
};

const theme: ThemeType = {
  colors,
  globalTheme: darkTheme,
};

export default theme;
