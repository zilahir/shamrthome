import hexToRgba from "hex-to-rgba";

export const colors = {
  mainAppColor: hexToRgba("#121220", 1),
  purleLight: hexToRgba("#26243F", 1),
  white: hexToRgba("#ffffff", 1),
  orange: hexToRgba("#F55945", 1),
  orangeLight: hexToRgba("#F55945", 0.7),
};

const theme = {
  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 34,
      color: "white",
    },
    subHeader: {
      fontWeight: "normal",
      fontSize: 20,
      color: "white",
    },
    body: {
      fontSize: 16,
      color: "white",
    },
  },
  colors: {
    mainAppColor: colors.mainAppColor,
    purpleLight: colors.purleLight,
    white: "white",
    orange: colors.orange,
    orangeLight: colors.orangeLight,
  },
  spacing: {
    s: 10,
    m: 30,
    l: 50,
  },
  breakpoints: {},
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
};

export default theme;
