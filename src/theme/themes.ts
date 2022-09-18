import { colors } from './colors';

export const lightTheme = {
  PRIMARY_COLOR: colors.white,
  SECONDARY_COLOR: colors.lighGrey,
  ACCENT_COLOR: colors.blue,
  PRIMARY_TEXT_COLOR: colors.dark,
};

export type ThemeType = {
  globalTheme: typeof lightTheme,
  colors: typeof colors;
};

const theme: ThemeType = {
  colors,
  globalTheme: lightTheme,
};

export default theme;