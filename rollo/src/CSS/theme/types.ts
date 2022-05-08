export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export interface Shadows {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
  innerTableInset: string;
  card: string;
  onHover: string;
}

export type Gradients = {
  bubblegum: string;
  buttongum: string;
  bubbleYum: string,
  zapGlare?: string;
  zapMarble: string;
};

export type Modal = {
  background: string;
  color: string;
  borderColor: string;
};

export interface Colors {
  failure: string,
  primary: string,
  primaryBright: string,
  primaryDark: string,
  secondary: string,
  secondaryDark: string,
  success: string,
  warning: string,
  white: string,
  background: string
}

export type ZIndices = {
  dropdown: number;
  modal: number;
};