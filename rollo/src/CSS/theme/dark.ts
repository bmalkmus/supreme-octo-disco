import { DefaultTheme } from "styled-components";
import base from "./base";
import { darkColors } from "./colors";
import { darkShadows } from "./shadows";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: darkColors,
  shadows: darkShadows
};

export default lightTheme;