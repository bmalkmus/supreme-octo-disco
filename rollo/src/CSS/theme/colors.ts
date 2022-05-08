import { Colors, Shadows } from './types'
import { darkShadows as DarkShadows , lightShadows as LightShadows} from "./shadows"

export const baseColors = {
  failure: '#C62073',
  primary: '#2B7EFF',
  primaryBright: '#94BEFF',
  primaryDark: '#024ABB',
  secondary: '#20DFDA',
  secondaryDark: '#21c5d9',
  success: '#20DFDA',
  warning: '#FFB237',
  white: '#ffffff',
}


export const lightColors: Colors = {
  ...baseColors,
  background: '#F0F6FF',
};

export const darkColors: Colors = {
  ...baseColors,
  background: '#1c2025',
};

export const lightShadows: Shadows = {
  ...LightShadows,
}

export const darkShadows: Shadows = {
  ...DarkShadows,
}