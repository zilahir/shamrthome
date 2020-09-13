import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { format } from "date-fns";
import { WiSnow } from "weather-icons-react";

import { Box, colors, Text } from "./theme/colors";

const { width, height } = Dimensions.get("window");

const rootStyles = StyleSheet.create({
  rootContainer: {
    padding: 20,
    width,
    height,
    backgroundColor: colors.mainAppColor,
    flexDirection: "row",
  },
  weatherIconContainer: {
    position: "relative",
    top: -8,
  }
});

const App = () => (
  <View style={rootStyles.rootContainer}>
    <Box flex={1} alignContent="center" justifyContent="center" margin="s">
      <Box
        padding="l"
        borderRadius="xl"
        borderWidth={3}
        borderColor="purpleLight"
      >
        <Text variant="header" marginBottom="s">
          Welcome Home
        </Text>
        <Text variant="subHeader" marginBottom="s" marginTop="s">
          {format(new Date(), "'Today is a' iiii")}
        </Text>
        <Text variant="subHeader">
          It's currently snowing,
          <View style={[rootStyles.weatherIconContainer]}>
            <WiSnow size={36} color="#ffffff" />
          </View>
          and -19°c outside.
        </Text>
      </Box>
    </Box>
  </View>
);

export default App;
