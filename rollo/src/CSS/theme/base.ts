import { Breakpoints, MediaQueries, Spacing } from "./types";

export const breakpointMap: { [key: string]: number } = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
  };
  
  const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);
  
  const mediaQueries: MediaQueries = {
    xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
    sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
    md: `@media screen and (min-width: ${breakpointMap.md}px)`,
    lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
    xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
    nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  };
  
  const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];
  
  const radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
  };
  
  const zIndices = {
    dropdown: 10,
    modal: 100,
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    siteWidth: 1200,
    breakpoints,
    mediaQueries,
    spacing,
    radii,
    zIndices,
  };