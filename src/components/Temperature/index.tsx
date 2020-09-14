import React, { useState } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { StyleSheet, TouchableOpacity } from "react-native";

import TemperatureBg from "../../assets/temperature_background.svg";
import { Box, colors, Text } from "../../theme/colors";

const temperatureStyle = StyleSheet.create({
  iconContiner: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    height: "100%",
    zIndex: 99,
  },
  temperatureContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rootContainer: {
    position: "relative",
  },
});

const Temperature = () => {
  const [currentTemperature, setcurrentTemperature] = useState(18);
  return (
    <Box
      style={[temperatureStyle.rootContainer]}
      margin="s"
      borderColor="purpleLight"
      borderWidth={2}
      borderRadius="l"
    >
      <Box
        style={[temperatureStyle.iconContiner]}
        padding="l"
        flex={1}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <TouchableOpacity
          onPress={() => setcurrentTemperature((state: number) => state + 1)}
        >
          <AddBoxIcon style={{ fontSize: 80 }} htmlColor={colors.purleLight} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setcurrentTemperature((state: number) => state - 1)}
        >
          <IndeterminateCheckBoxIcon
            style={{ fontSize: 80 }}
            htmlColor={colors.purleLight}
          />
        </TouchableOpacity>
      </Box>
      <Box style={[temperatureStyle.temperatureContainer]}>
        <Text style={{ position: "absolute" }} variant="header">
          {currentTemperature}
        </Text>
        <img style={{ margin: 50 }} src={TemperatureBg} />
      </Box>
    </Box>
  );
};

export default Temperature;
