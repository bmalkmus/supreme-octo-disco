import { Shadows } from './types'

export const baseShadows = {
    level1: "0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(255, 255, 255, 0.54)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #B4D9F3, 0px 0px 0px 4px rgba(255, 255, 255, 0.04)",
    inset: "inset 0px 2px 2px -1px #087FFE",
    innerTableInset: "0px -1px 7px 2px #3480f51c inset",
    card: "0px 5px 10px rgba(2, 74, 187, 0.25)",
    onHover: "0px 2px 5px rgba(2, 74, 187, 0.25)"
}

export const lightShadows: Shadows = {
  ...baseShadows,
};

export const darkShadows: Shadows = {
  ...baseShadows,
};